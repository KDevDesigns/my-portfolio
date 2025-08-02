"use client";

import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import MindspaceImg from "@/lib/Images/Mindspace.png";
import IslandBoiImg from "@/lib/Images/IslandBoi.png";
import CancerLineImg from "@/lib/Images/CancerLine.png";
import { Lock } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HomePage() {
  return (
    <div
      className={`min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-8 gap-16 ${inter.variable} font-sans `}
    >
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-16 lg:mt-32 mb-16 lg:mb-32">
        <div className="flex-1">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
            Hi! I’m Kevin, a <br />
            <span className="text-[#7A382B]">UI/UX Designer</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl tracking-wide leading-relaxed">
            Design is not decoration—it’s acceleration. I build systems that
            move users from question to solution.
          </p>
        </div>
      </section>

      {/* My Works Section */}
      <section id="work" className="mt-16 lg:mt-32">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-[#7A382B]">Works</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
            See how I turn complexity into clarity. Browse case studies. <br />
            Experience the prototypes.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Project Row 1 */}
          <div className="flex flex-col md:flex-row-reverse gap-12">
            <div className="md:w-1/2">
              <Card>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={MindspaceImg}
                    alt="Mindspace UI preview"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </AspectRatio>
              </Card>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold">MindSpace</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                MindSpace is a modular mental health interface designed to
                reduce user overwhelm and increase engagement. I focused on
                minimalist navigation, guided interaction flows, and a calm
                color system—all optimized for accessibility and cognitive ease.
              </p>
              <Button
                asChild
                className="w-fit bg-[#7A382B] hover:bg-[#5f2e23] text-white"
              >
                <a
                  href="https://www.figma.com/proto/T1gjtsTnaF4AHthuB8ArUc/Project-MindSpace?page-id=0%3A1&node-id=2-5&viewport=1058%2C884%2C0.14&t=bbVjfVvQSMGqBngj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Prototype
                </a>
              </Button>
            </div>
          </div>

          {/* Project Row 2 */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <Card>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={CancerLineImg}
                    alt="MindSpace UI preview"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </AspectRatio>
              </Card>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                CancerLine Companion
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                CancerLine Companion helps cancer patients navigate their
                treatment with confidence. I designed a clear, guided interface
                with empathetic tone, visualized timelines, and actionable next
                steps—ensuring accessibility across all literacy levels.
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    asChild
                    className="w-fit bg-[#7A382B] hover:bg-[#5f2e23] text-white flex items-center gap-2"
                  >
                    <span>View Prototype</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-lg font-semibold text-[#7A382B] flex items-center gap-2">
                      <Lock className="w-5 h-5" /> Limited Access Notice
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    This project is under a Non-Disclosure Agreement (NDA). Only
                    limited, non-sensitive portions are available for public
                    viewing. For full access or further details, please reach
                    out directly.
                  </p>
                  <AlertDialogFooter className="mt-6">
                    <AlertDialogCancel className="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md px-4 py-2">
                      Close
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Project Row 3 */}
          <div className="flex flex-col md:flex-row-reverse gap-12">
            <div className="md:w-1/2">
              <Card>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={IslandBoiImg}
                    alt="IslandBoi preview"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </AspectRatio>
              </Card>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold">IslandBoi</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Island Boi is a beachhouse brand looking to establish a stronger
                online presence and attract more direct bookings. I was brought
                in to design and build a clean, responsive website with a custom
                booking form — setting the foundation for future growth.
              </p>
              <Button className="w-fit bg-[#7A382B] hover:bg-[#5f2e23] text-white">
                View Prototype
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
