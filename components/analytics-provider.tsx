"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

import clarity from "@microsoft/clarity";
import { sendGTMEvent } from '@next/third-parties/google';

type ConsentStatus = "granted" | "denied" | null

interface AnalyticsContextType {
    consent: ConsentStatus
    setConsent: (status: ConsentStatus) => void
    trackEvent: (action: string, value?: string, params?: Record<string, unknown>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    const [consent, setConsentState] = useState<ConsentStatus>(null)

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie-consent")
        if (storedConsent === "granted" || storedConsent === "denied") {
            setConsentState(storedConsent)
        }
    }, [])

    // Session termination handling is not natively supported by the official @microsoft/clarity package

    const setConsent = (status: ConsentStatus) => {
        setConsentState(status)
        if (status) {
            localStorage.setItem("cookie-consent", status)
        }
    }

    const trackEvent = (action: string, value?: string, params?: Record<string, unknown>) => {
        if (consent === "granted") {
            // 1. Microsoft Clarity
            const eventName = value ? `${action}_${value}` : action
            const sanitizedEvent = eventName.toLowerCase().replace(/\s+/g, '_')

            if (typeof window !== 'undefined' && window.clarity) {
                clarity.event(sanitizedEvent);
            }

            // 2. Google Tag Manager
            // Triggers GA4 because it is configured in GTM container
            sendGTMEvent({
                event: action,
                value: value,
                ...params,
            });
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
