import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/custom ui/navbar";
import Footer from "@/components/custom ui/footer"

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
  description: "Created by KevinDesigns, a portfolio showcasing web development projects and designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16`}
      >
        <NavigationBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
