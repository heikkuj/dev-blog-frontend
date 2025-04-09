import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/live";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Dev Blog HJ",
  description: "General development blog for Heikku J. :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handjet.variable} antialiased`}
      >
        <Navbar />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
