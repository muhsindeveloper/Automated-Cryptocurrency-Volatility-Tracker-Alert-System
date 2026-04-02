import type { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crypto Pulse | Real-Time Cryptocurrency Dashboard",
  description:
    "Monitor real-time cryptocurrency prices, market trends, and trading volumes. Track top gainers/losers with instant price updates, comprehensive market analytics, and interactive charts.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "cryptocurrency",
    "crypto dashboard",
    "bitcoin",
    "ethereum",
    "market prices",
    "trading",
    "real-time data",
  ],
  authors: [{ name: "Crypto Pulse" }],
  openGraph: {
    title: "Crypto Pulse - Real-Time Crypto Dashboard",
    description:
      "Professional cryptocurrency market monitoring with live price tracking and analytics.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${firaCode.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-slate-50">{children}</body>
    </html>
  );
}
