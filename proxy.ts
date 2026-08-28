import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createRateLimiter } from '@/lib/rate-limit'

// 10 login attempts per minute per IP
const loginLimiter = createRateLimiter({ windowMs: 60_000, max: 10 })

export async function proxy(request: NextRequest) {
    // Rate-limit login attempts
    if (request.nextUrl.pathname === '/login' && request.method === 'POST') {
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            ?? request.headers.get('x-real-ip')
            ?? '127.0.0.1'

        if (!loginLimiter.check(ip)) {
            return NextResponse.json(
                { error: 'Too many login attempts. Please try again later.' },
                { status: 429 }
            )
        }
    }

    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for static files and favicons.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
