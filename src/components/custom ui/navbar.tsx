"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoBrand from '../../lib/Images/Logo.png'

export default function NavigationBar() {
  return (
    <div className="flex flex-row py-12 items-center">
      <div className="flex-none">
        <Link href="/">
        <Avatar className="w-16 h-16">
          <AvatarImage src={LogoBrand.src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </Link>
      </div>
      <div className="grow"></div>
      <div className=" flex justify-end items-center gap-10">
        <Link href="/work">Works</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Button variant="default">Download CV</Button>
      </div>
    </div>
  );
}
