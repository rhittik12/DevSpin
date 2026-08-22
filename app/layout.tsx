import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Topic Spinner",
  description: "Daily random topic generator for your blog habit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6">
          <header className="flex items-center justify-between py-8">
            <Link href="/" className="font-mono text-sm text-paper">
              topic<span className="text-copper">×</span>spinner
            </Link>
            <nav className="flex gap-6 font-mono text-sm text-muted">
              <Link href="/" className="hover:text-paper">Today</Link>
              <Link href="/all" className="hover:text-paper">Browse</Link>
            </nav>
          </header>
          <main className="flex-1 pb-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
