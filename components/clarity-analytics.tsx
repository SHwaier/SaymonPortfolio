"use client"

import { useEffect } from "react"
import Script from "next/script"
import { clarity } from "react-microsoft-clarity";
import { useAnalytics } from "./analytics-provider"

export function ClarityAnalytics() {
    const { consent } = useAnalytics()
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

    useEffect(() => {
        // Only initialize if consent is granted and project ID exists
        if (consent === "granted" && projectId) {
            // Ensure we don't double-initialize if already running
            if (!window.clarity) {
                clarity.init(projectId);
            } else {
                // If clarity is already on the window but we want to ensure
                // tracking is active (e.g. after consent change)
                clarity.consent();
            }
        }
    }, [consent, projectId])

    // If no project ID, don't render anything (or log warning in dev)
    if (!projectId) return null

    return null
}
