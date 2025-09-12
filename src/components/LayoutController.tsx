"use client"; // ✅ Required so we can use usePathname

import React from "react";
import { usePathname } from "next/navigation"; // client-only hook
import NavigationBar from "@/components/custom ui/navbar";
import Footer from "@/components/custom ui/footer";

/**
 * LayoutController:
 * - Handles showing/hiding Nav + Footer based on current route
 */
export default function LayoutController({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // ✅ current URL path

  // ✅ Hide layout on ALL case studies pages (e.g. /case-studies/itso, /case-studies/xyz)
  const hideLayout = pathname?.startsWith("/casestudy");

  return (
    <>
      {!hideLayout && <NavigationBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
