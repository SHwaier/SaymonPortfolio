import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Saymon Hwaier | Software Engineer",
    template: "%s | Saymon Hwaier"
  },
  description: "Portfolio of Saymon Hwaier, a Software Engineer crafting digital experiences with React, Next.js, and TypeScript. View my projects and skills.",
  authors: [{ name: "Saymon Hwaier" }],
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript", "Frontend Developer", "Full Stack"],
  creator: "Saymon Hwaier",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saymon.ca",
    title: "Saymon Hwaier | Software Engineer",
    description: "Crafting digital experiences that matter. Explore my portfolio of projects and skills.",
    siteName: "SaymonPortfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saymon Hwaier Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saymon Hwaier | Software Engineer",
    description: "Software Engineer specializing in modern web development.",

    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL('https://saymon.ca'),
}

import { ThemeProvider } from "@/components/theme-provider"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { ClarityAnalytics } from "@/components/clarity-analytics"
import { ConsentBanner } from "@/components/consent-banner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-NZNK8HRT" />
      <body>
        {/* Google Tag Manager (noscript)  */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZNK8HRT"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            {children}
            <ConsentBanner />
            <ClarityAnalytics />
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
