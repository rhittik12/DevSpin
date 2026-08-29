import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DevSpin",
  description: "A random tech topic generator to fuel a daily blog habit and learning.",
  openGraph: {
    title: "DevSpin",
    description: "A random tech topic generator to fuel a daily blog habit and learning.",
    url: "https://dev-spin.vercel.app/",
    siteName: "DevSpin",
    images: [
      {
        url: "/og-image_2.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSpin",
    description: "A random tech topic generator to fuel a daily blog habit and learning.",
    images: ["/og-image_2.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6">
          <header className="flex items-center justify-between py-8">
            <Link href="/" className="font-mono text-lg tracking-tight text-paper">
              Dev<span className="text-copper">×</span>Spin
            </Link>
            <nav className="flex gap-6 font-mono text-sm text-muted">
              <Link href="/" className="hover:text-paper">Today</Link>
            </nav>
          </header>
          <main className="flex-1 pb-16">{children}</main>
        </div>
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        /> 
      </body>
    </html>
  );
}
