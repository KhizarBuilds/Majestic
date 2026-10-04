import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://majestic.games"),
  title: "MAJESTIC — Independent Game Studio",
  description:
    "An international independent game studio crafting worlds of monumental scale and visceral realism from Tokyo, Stockholm, and Los Angeles.",
  openGraph: {
    title: "MAJESTIC — Independent Game Studio",
    description: "International game studio crafting worlds of monumental scale and visceral realism.",
    url: "https://majestic.games",
    siteName: "Majestic Studios",
    images: [
      {
        url: "/images/hero_monolith.jpg",
        width: 1920,
        height: 1080,
        alt: "Majestic Monolith",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAJESTIC — Independent Game Studio",
    description: "International game studio crafting worlds of monumental scale and visceral realism.",
    images: ["/images/hero_monolith.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-[#050505] text-[#c8c8c8] overflow-x-hidden selection:bg-[#f2f2f2] selection:text-[#050505]"
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
