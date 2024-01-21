import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saymon Hwaier",
  description: "Saymon Hwaier personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
      <Script src="/cursorPosition.js"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
