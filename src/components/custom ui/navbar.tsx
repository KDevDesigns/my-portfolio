"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -10 },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`w-full sticky top-0 z-50 bg-white ${inter.variable} font-sans`}>
      <div className="flex items-center justify-between py-6 px-4 md:px-8">
        <Link href="/">
          <Avatar className="w-12 h-12">
            <AvatarImage src={LogoBrand.src} alt="logo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link className="text-base hover:text-[#7A382B] hover:font-semibold" href="/#work">Works</Link>
          <Link className="text-base hover:text-[#7A382B] hover:font-semibold" href="/about">About</Link>
          <Link className="text-base hover:text-[#7A382B] hover:font-semibold" href="/contact">Contact</Link>
          <Button className="bg-[#7A382B] hover:bg-[#5f2e23] text-white">Download CV</Button>
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
            <motion.div variants={itemVariants}>
              <Link className="py-2 border-b text-base hover:text-[#7A382B]" href="/#work">Works</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className="py-2 border-b text-base hover:text-[#7A382B]" href="/about">About</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className="py-2 border-b text-base hover:text-[#7A382B]" href="/contact">Contact</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button className="bg-[#7A382B] hover:bg-[#5f2e23] text-white w-full">Download CV</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
