/**
 * In-memory sliding window rate limiter.
 *
 * Designed for serverless / edge environments. Includes a maximum
 * store capacity cap to protect against IP-spoofing memory leaks.
 */

interface RateLimiterOptions {
    /** Time window in milliseconds */
    windowMs: number
    /** Maximum number of requests allowed in the window */
    max: number
    /** Maximum store entries before force clearing to prevent OOM */
    maxKeys?: number
}

interface RequestRecord {
    timestamps: number[]
}

export function createRateLimiter({ windowMs, max, maxKeys = 10_000 }: RateLimiterOptions) {
    const store = new Map<string, RequestRecord>()

    const PRUNE_INTERVAL = windowMs * 2
    let lastPrune = Date.now()

    function prune(now: number) {
        // Prevent memory leak from IP spoofing by enforcing max map capacity
        if (store.size > maxKeys) {
            store.clear()
            lastPrune = now
            return
        }

        if (now - lastPrune < PRUNE_INTERVAL) return
        lastPrune = now

        for (const [key, record] of store) {
            const valid = record.timestamps.filter((t) => now - t < windowMs)
            if (valid.length === 0) {
                store.delete(key)
            } else {
                record.timestamps = valid
            }
        }
    }

    return {
        /**
         * Returns `true` if the request is allowed, `false` if rate-limited.
         */
        check(key: string): boolean {
            const now = Date.now()
            prune(now)

            const record = store.get(key) ?? { timestamps: [] }
            record.timestamps = record.timestamps.filter((t) => now - t < windowMs)

            if (record.timestamps.length >= max) {
                return false // rate limited
            }

            record.timestamps.push(now)
            store.set(key, record)
            return true // allowed
        },
    }
}

