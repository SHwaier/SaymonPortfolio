"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type ConsentStatus = "granted" | "denied" | null

interface AnalyticsContextType {
    consent: ConsentStatus
    setConsent: (status: ConsentStatus) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    const [consent, setConsentState] = useState<ConsentStatus>(null)

    useEffect(() => {
        // Check localStorage on mount
        const storedConsent = localStorage.getItem("cookie-consent")
        if (storedConsent === "granted" || storedConsent === "denied") {
            setConsentState(storedConsent)
        }
    }, [])

    const setConsent = (status: ConsentStatus) => {
        setConsentState(status)
        if (status) {
            localStorage.setItem("cookie-consent", status)
        }
    }

    return (
        <AnalyticsContext.Provider value={{ consent, setConsent }}>
            {children}
        </AnalyticsContext.Provider>
    )
}

export function useAnalytics() {
    const context = useContext(AnalyticsContext)
    if (context === undefined) {
        throw new Error("useAnalytics must be used within an AnalyticsProvider")
    }
    return context
}
