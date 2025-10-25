import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Zlatin — CS Student & Software Engineer",
  description:
    "University of Delaware CS '26 student crafting dependable web systems, AI-powered apps, and mission-ready tooling.",
  openGraph: {
    title: "Benjamin Zlatin — CS Student & Software Engineer",
    description:
      "University of Delaware CS '26 student crafting dependable web systems, AI-powered apps, and mission-ready tooling.",
    url: "https://personal-portfolio.example",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Zlatin — CS Student & Software Engineer",
    description:
      "University of Delaware CS '26 student crafting dependable web systems, AI-powered apps, and mission-ready tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
