"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

import { clarity } from "react-microsoft-clarity";
import { sendGTMEvent } from '@next/third-parties/google';

type ConsentStatus = "granted" | "denied" | null

interface AnalyticsContextType {
    consent: ConsentStatus
    setConsent: (status: ConsentStatus) => void
    trackEvent: (action: string, value?: string, params?: Record<string, any>) => void
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

    useEffect(() => {
        // Handle session termination
        const handleUnload = () => {
            if (window.clarity) {
                window.clarity('stop');
            }
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])

    const setConsent = (status: ConsentStatus) => {
        setConsentState(status)
        if (status) {
            localStorage.setItem("cookie-consent", status)
        }
    }

    const trackEvent = (action: string, value?: string, params?: Record<string, any>) => {
        if (consent === "granted") {
            // 1. Microsoft Clarity
            const eventName = value ? `${action}_${value}` : action
            const sanitizedEvent = eventName.toLowerCase().replace(/\s+/g, '_')

            if (window.clarity) {
                clarity.event(sanitizedEvent);
            }

            // 2. Google Tag Manager
            // This will also trigger GA4 if configured in GTM container
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
