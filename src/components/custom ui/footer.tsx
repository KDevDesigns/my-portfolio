import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-20">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-300" />

      <div className="flex flex-col items-center gap-6 px-10 sm:px-20 md:px-24 lg:px-28 py-12 text-center">
        {/* Socials */}
        <div className="flex gap-6">
          <Link href="https://github.com/" target="_blank">
            <Github className="h-6 w-6 text-slate-600 hover:text-[#7A382B] transition" />
          </Link>
          <Link href="https://linkedin.com/" target="_blank">
            <Linkedin className="h-6 w-6 text-slate-600 hover:text-[#7A382B] transition" />
          </Link>
          <Link href="mailto:youremail@example.com">
            <Mail className="h-6 w-6 text-slate-600 hover:text-[#7A382B] transition" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2025 Kevin Kurt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
