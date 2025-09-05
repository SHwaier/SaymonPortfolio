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
  title: "Saymon - Portfolio",
  description: "Welcome to my portfolio website! I'm Saymon, a passionate developer specializing in creating beautiful and functional web applications. Explore my projects, skills, and get in touch to collaborate on exciting ventures.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <GoogleTagManager gtmId="GTM-NZNK8HRT" />
      <body>
        {/* Google Tag Manager (noscript)  */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZNK8HRT"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}</body>
    </html>
  )
}
