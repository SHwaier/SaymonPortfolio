import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"api.microlink.io", // Microlink Image Preview
		],
	},

	async headers() {
		return [
			{
				// apply to every route (HTML + assets). Safe for fonts/CDNs when using credentialless.
				source: "/:path*",
				headers: [{ key: "Cross-Origin-Opener-Policy", value: "same-origin" }],
			},
		];
	},
};

export default nextConfig;
