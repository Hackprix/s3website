import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Header } from "@/components/site/header";
import { Analytics } from "@vercel/analytics/react";

const inter = localFont({
  src: "../../public/fonts/Inter.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const outfit = localFont({
  src: "../../public/fonts/Outfit.ttf",
  variable: "--font-outfit",
  display: "swap",
  weight: "100 900",
});

const siteName = "HackPrix Season 3";
const siteDescription =
  "HackPrix is a 2-day premier hackathon in Hyderabad, India. Bringing together top students, developers & tech visionaries to build impactful, real-world solutions.";
export const metadata: Metadata = {
  metadataBase: new URL("https://s3.hackprix.tech"),
  title: {
    default: siteName,
    template: "%s | HackPrix Season 3",
  },
  description: siteDescription,
  keywords: [
    "HackPrix",
    "HackPrix Season 3",
    "Hackathon",
    "Offline Hackathon",
    "Developer Event",
    "Tech Competition",
    "Build For Better",
    "HackPrix 2026",
  ],
  authors: [{ name: "HackPrix Team", url: "https://hackprix.tech" }],
  creator: "HackPrix",
  publisher: "HackPrix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://s3.hackprix.tech",
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@hackprix",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-white text-black flex flex-col md:flex-row min-h-screen`}
      >
        {/* Main Content */}
        <main className="w-full flex-1 order-1 md:order-1 min-w-0">
          <Header />
          {children}
          <Analytics />
        </main>

        {/* Vertical Navigation - Side by side on desktop */}
        <div className="order-2 md:order-2">
          <Navbar />
        </div>
      </body>
    </html>
  );
}