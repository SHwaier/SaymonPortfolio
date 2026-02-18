"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAnalytics } from "./analytics-provider"
import { Cookie, X } from "lucide-react"

export function ConsentBanner() {
    const { consent, setConsent } = useAnalytics()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Don't show if consent has already been given or denied
    if (consent !== null) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", damping: 20 }}
                className="fixed bottom-4 right-4 z-50 w-full max-w-sm p-4 md:right-8 md:bottom-8"
            >
                <Card className="p-4 shadow-xl border-border/50 bg-background/80 backdrop-blur-md">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-medium leading-none">We value your privacy</h4>
                                <p className="text-sm text-muted-foreground leading-snug">
                                    We use cookies to analyze site traffic and improve your experience.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 justify-end">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setConsent("denied")}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Decline
                            </Button>
                            <Button
                                variant="default"
                                size="sm"
                                onClick={() => setConsent("granted")}
                            >
                                Accept
                            </Button>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}
