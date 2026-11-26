import * as React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "LUMIÈRE AESTHETICS | Laser Hair Removal & Aesthetic Treatments",
  description:
    "Luxury laser hair removal and aesthetic treatments. Gentle, precise, and tailored to your skin.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} font-sans antialiased text-[#1B2024] bg-[#FAF7F2] selection:bg-[#D4AF37] selection:text-white`}
      >
        <header className="site-header" />
        <main className="min-h-screen">{children}</main>
        <footer className="site-footer" />
      </body>
    </html>
  );
}
