"use client";
import { Inter } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoBrand from '../../lib/Images/Logo.png'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function NavigationBar() {
  return (
    <div className={`flex flex-row py-12 items-center ${inter.variable} font-sans`}>
      <div className="flex-none">
        <Link href="/">
          <Avatar className="w-16 h-16">
            <AvatarImage src={LogoBrand.src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="grow"></div>
      <div className="flex justify-end items-center gap-10">
        <Link className="text-base hover:text-[#7A382B] hover:font-semibold active:text-[#7A382B]" href="/work">Works</Link>
        <Link className="text-base hover:text-[#7A382B] hover:font-semibold active:text-[#7A382B]" href="/about">About</Link>
        <Link className="text-base hover:text-[#7A382B] hover:font-semibold active:text-[#7A382B]" href="/contact">Contact</Link>
        <Button className="bg-[#7A382B]" variant="default">Download CV</Button>
      </div>
    </div>
  );
}
