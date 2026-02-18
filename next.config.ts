// next.config.ts
import type { NextConfig } from "next";

const CSP = [
	"default-src 'self'",
	// allow GTM/GA/Clarity; keep 'unsafe-inline' & 'unsafe-eval' so Next/Dev/HMR don't break
	"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com https://www.clarity.ms https://*.clarity.ms",
	// Google Fonts
	"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
	"font-src 'self' https://fonts.gstatic.com data:",
	// images + GA/GTM/Clarity beacons
	"img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://*.clarity.ms https://c.bing.com",
	// XHR/beacons
	"connect-src 'self' https://ivndnsgkpmbxpwhyaeka.supabase.co https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://static.cloudflareinsights.com https://*.clarity.ms https://c.bing.com",
	// GTM <noscript> iframe
	"frame-src 'self' https://www.googletagmanager.com",
	// clickjacking hardening (CSP) + legacy XFO
	"frame-ancestors 'none'",
	// hygiene
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
	async headers() {
		// Only apply strict strict security headers in production
		if (process.env.NODE_ENV === "development") return [];

		return [
			{
				source: "/:path*",
				headers: [
					{ key: "Cross-Origin-Opener-Policy", value: "same-origin" },
					{ key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "Content-Security-Policy", value: CSP },
				],
			},
		];
	},
	reactCompiler: true,
	experimental: {
		useCache: true,
		inlineCss: true,
	},
};

export default nextConfig;
