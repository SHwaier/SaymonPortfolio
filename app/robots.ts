import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const headersList = await headers()
    const host = headersList.get('host') || ''

    // Check if it's the dev subdomain or a Vercel preview URL
    // The user specifically mentioned a dev subdomain for staging.
    const isStaging = host.startsWith('dev.') || host.includes('vercel.app')

    if (isStaging) {
        return {
            rules: {
                userAgent: '*',
                disallow: '/',
            },
        }
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://saymon.ca/sitemap.xml',
    }
}
