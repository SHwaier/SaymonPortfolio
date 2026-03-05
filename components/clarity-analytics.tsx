"use client"

import { useEffect } from "react"
import clarity from "@microsoft/clarity";
import { useAnalytics } from "./analytics-provider"

export function ClarityAnalytics() {
    const { consent } = useAnalytics()
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

    useEffect(() => {
        // Only initialize if project ID exists
        if (projectId) {
            // The official package's init is safe to call multiple times or manages its own state
            clarity.init(projectId);

            // If consent is granted, make sure we tell clarity
            if (consent === "granted") {
                clarity.consent();
            }
        }
    }, [consent, projectId])

    // If no project ID, don't render anything (or log warning in dev)
    if (!projectId) return null

    return null
}
