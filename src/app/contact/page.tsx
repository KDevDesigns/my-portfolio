import { Inter } from "next/font/google";
import { CustomContactMe } from "@/components/custom ui/contactme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function ContactPage() {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 gap-16 ${inter.variable} font-sans`}
    >
      <div className="w-full max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
            Connect with me
          </h1>
          <h2 className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Where visions align, delivering UX that’s simply divine.
          </h2>
        </div>
        <CustomContactMe />
      </div>
    </div>
  );
}
