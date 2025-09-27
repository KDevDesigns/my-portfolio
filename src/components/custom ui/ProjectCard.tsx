"use client";

import { Card } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Lock } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  image: string | StaticImageData;
  link?: string;
  locked?: boolean;
  ctaType?: "prototype" | "case-study" | "project"; // Add this line
};

const normalize = (l?: string) =>
  l ? (l.startsWith("#") || l.startsWith("/") ? l : `/${l}`) : undefined;

function getCtaLabel(type?: "prototype" | "case-study" | "project") {
  switch (type) {
    case "case-study":
      return "View Case Study";
    case "project":
      return "View Project";
    default:
      return "View Prototype";
  }
}

function LockedDialog({ ctaLabel = "View Prototype" }: { ctaLabel?: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#7A382B] hover:bg-[#5f2e23] text-white font-medium flex items-center gap-2 mt-3">
          <Lock className="w-4 h-4" /> {ctaLabel}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-xl border border-gray-200 bg-white p-6 shadow-md max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <Lock className="w-5 h-5" /> Limited Access Notice
          </AlertDialogTitle>
        </AlertDialogHeader>

        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          This project is under a Non-Disclosure Agreement (NDA). Only limited,
          non-sensitive portions are available for public viewing. For full
          access or further details, please reach out directly.
        </p>

        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md px-4 py-2">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function ProjectCard({ title, desc, image, link, locked, ctaType }: Props) {
  const href = normalize(link);
  const ctaLabel = getCtaLabel(ctaType);

  return (
    <Card className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-xl">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </AspectRatio>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* CTA Button */}
        {locked ? (
          <LockedDialog ctaLabel={ctaLabel} />
        ) : href ? (
          <Button
            asChild
            className="bg-[#7A382B] hover:bg-[#5f2e23] text-white font-medium mt-3"
          >
            <Link href={href}>{ctaLabel}</Link>
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
