import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Import the client wrapper we’ll create
import LayoutController from "@/components/LayoutController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KevinDesigns",
  description:
    "Created by KevinDesigns, a portfolio showcasing web development projects and designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ✅ Wrap everything in LayoutController so it can decide when to show Nav/Footer */}
        <LayoutController>{children}</LayoutController>
      </body>
    </html>
  );
}
