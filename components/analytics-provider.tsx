"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

import { clarity } from "react-microsoft-clarity";

type ConsentStatus = "granted" | "denied" | null

interface AnalyticsContextType {
    consent: ConsentStatus
    setConsent: (status: ConsentStatus) => void
    trackEvent: (action: string, value?: string) => void
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

    const trackEvent = (action: string, value?: string) => {
        if (consent === "granted") {
            // Create a custom event in Clarity
            // Format: action_value (if value exists) or just action
            // Clarity events are typically single strings, so we combine them
            const eventName = value ? `${action}_${value}` : action

            // Sanitize event name (spaces to underscores, lowercase)
            const sanitizedEvent = eventName.toLowerCase().replace(/\s+/g, '_')

            if (window.clarity) {
                // @ts-ignore - clarity type definition might be incomplete
                clarity.event(sanitizedEvent);
            }
        }
    }

    return (
        <AnalyticsContext.Provider value={{ consent, setConsent, trackEvent }}>
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
