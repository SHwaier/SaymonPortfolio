'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'
import { checkPasswordStrength } from '@/lib/validations'

const STRENGTH_COLORS = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500']

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const strength = useMemo(() => checkPasswordStrength(password), [password])

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        if (strength.score < 2) {
            setError('Password is too weak. ' + strength.suggestions[0])
            setLoading(false)
            return
        }

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                throw error
            }

            router.push('/admin')
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to login')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-sm space-y-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <div className="h-12 w-12 rounded-xl bg-foreground flex items-center justify-center shadow-lg">
                            <span className="text-background font-bold text-2xl font-serif">S</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-serif font-bold tracking-tight text-foreground">Admin Portal</h1>
                    <p className="text-sm text-muted-foreground mt-2">Sign in to manage your portfolio</p>
                </div>
                <Card className="border border-border shadow-sm bg-card">
                    <CardContent className="pt-6">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="border-border focus-visible:ring-accent transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    className="border-border focus-visible:ring-accent transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {password.length > 0 && (
                                    <div className="space-y-1.5 pt-1">
                                        <div className="flex gap-1">
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1 flex-1 rounded-full transition-colors ${i <= strength.score - 1 ? STRENGTH_COLORS[strength.score] : 'bg-muted'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {strength.label}
                                            {strength.suggestions.length > 0 && ` — ${strength.suggestions[0]}`}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {error && (
                                <Alert variant="destructive" className="border-red-500/50 text-red-600">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors mt-2" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
