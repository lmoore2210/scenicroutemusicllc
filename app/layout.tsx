import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Scenic Route Music LLC | Audio Production, Performance & Instruction",
  description:
    "Washington-based audio production, live sound engineering, rock band music lessons, and SDVOSB government/commercial contracting services located in Bellingham & the Pacific Northwest.",
  keywords: [
    "Scenic Route Music",
    "Live Sound Engineering",
    "FOH Sound Mixer Bellingham",
    "Rock Band Coaching",
    "Music Lessons Bellingham WA",
    "Guitar Lessons",
    "Bass Lessons",
    "Drum Lessons",
    "Audio Production PNW",
    "SDVOSB Music Contractor",
    "Veteran Owned Business Washington",
    "NAICS 711510",
    "NAICS 512240",
  ],
  authors: [{ name: "Luke Moore" }],
  creator: "Luke Moore - Scenic Route Music LLC",
  publisher: "Scenic Route Music LLC",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Scenic Route Music LLC",
    title: "Scenic Route Music LLC | Sound • Gig • Instruction",
    description:
      "Stage-ready live sets, front of house sound, event music management, and rock band instruction. Service-Disabled Veteran-Owned Small Business (SDVOSB) in Washington State.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scenic Route Music LLC | Audio Production & Performance",
    description:
      "Live sound engineering, rock band coaching, and SDVOSB audio services across Western Washington.",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#0a0a0a] text-[#f5f2eb] min-h-screen flex flex-col site-margins">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}