'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { createRateLimiter } from '@/lib/rate-limit'

// 10 login attempts per 15 minutes per IP
const loginLimiter = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 10 })

export async function loginAction(_prevState: { error: string | null } | null, formData: FormData): Promise<{ error: string | null }> {
    const headerList = await headers()
    const ip = headerList.get('x-forwarded-for')?.split(',')[0]?.trim()
        ?? headerList.get('x-real-ip')
        ?? '127.0.0.1'

    if (!loginLimiter.check(ip)) {
        return { error: 'Too many login attempts. Please try again in 15 minutes.' }
    }

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { error: 'Email and password are required.' }
    }

    const supabase = await createClient()
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    redirect('/admin')
}
