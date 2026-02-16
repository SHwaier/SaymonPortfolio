'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

interface LogoutButtonProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
    children?: ReactNode
}

export default function LogoutButton({ variant = "outline", size = "default", children }: LogoutButtonProps) {
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
        router.refresh()
    }

    return (
        <Button
            variant={variant}
            size={size}
            className="w-full justify-start gap-2"
            onClick={handleLogout}
        >
            <LogOut className="w-4 h-4" />
            {children || "Sign Out"}
        </Button>
    )
}
