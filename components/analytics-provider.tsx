"use client"

import React, { createContext, useContext, useState } from "react"

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
    const [consent, setConsentState] = useState<ConsentStatus>(() => {
        if (typeof window !== "undefined") {
            const storedConsent = localStorage.getItem("cookie-consent")
            return (storedConsent === "granted" || storedConsent === "denied") ? storedConsent : null
        }
        return null
    })

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
