/**
 * In-memory sliding window rate limiter.
 *
 * Designed for serverless / edge environments where external stores
 * (Redis, Upstash) are not available. The Map is scoped to the
 * process lifetime, which is sufficient for Vercel Functions that
 * share a warm instance across sequential requests.
 *
 * Usage:
 *   const limiter = createRateLimiter({ windowMs: 60_000, max: 10 })
 *   if (!limiter.check(ip)) { return NextResponse.json(..., { status: 429 }) }
 */

interface RateLimiterOptions {
    /** Time window in milliseconds */
    windowMs: number
    /** Maximum number of requests allowed in the window */
    max: number
}

interface RequestRecord {
    timestamps: number[]
}

export function createRateLimiter({ windowMs, max }: RateLimiterOptions) {
    const store = new Map<string, RequestRecord>()

    // Periodically prune stale entries to prevent memory leaks
    const PRUNE_INTERVAL = windowMs * 2
    let lastPrune = Date.now()

    function prune(now: number) {
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
