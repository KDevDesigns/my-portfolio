"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";
import LogoBrand from "../../lib/Images/Logo.png";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: -10 },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { href: "/#work", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav
      className={`w-full sticky top-0 z-50 px-10 sm:px-20 md:px-24 lg:px-28 
        bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800 
        ${inter.variable} font-sans`}
    >
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <Link href="/">
          <Avatar className="w-12 h-12">
            <AvatarImage src={LogoBrand.src} alt="logo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-base transition-colors ${
                    isActive
                      ? "text-[#7A382B] font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:text-[#7A382B]"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#7A382B] rounded"
                  />
                )}
              </div>
            );
          })}
          <Button className="bg-[#7A382B] hover:bg-[#5f2e23] text-white shadow-sm transition hover:scale-[1.03]">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-4 px-4 pb-10 pt-4 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="py-2 border-b text-base text-slate-700 dark:text-slate-300 hover:text-[#7A382B]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Button className="bg-[#7A382B] hover:bg-[#5f2e23] text-white w-full">
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
