'use client';
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import {Card,} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import MindspaceImg from "@/lib/Images/Mindspace.png";
import IslandBoiImg from "@/lib/Images/IslandBoi.png";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HomePage() {
  return (
    <div className={`min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-8 gap-16 ${inter.variable} font-sans`}>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:mt-42 lg:mb-96 md:mt-32 md:mb-64 sm:mt-24 sm:mb-48">
        <div className="flex-1">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-pretty">
            Hi! I’m Kevin, a <br />
            <span className="text-[#7A382B]">UI/UX Designer</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl tracking-wide leading-relaxed">
            Design is not decoration—it’s acceleration. I build systems that
            move users from question to solution.
          </p>
        </div>
      </section>

      {/* My Works */}
      <section>
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">My Works</h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl  max-w-2xl">
            See how I turn complexity into clarity. Browse case <br />
            studies. Experience the prototypes.
          </p>
        </div>

        <div className="flex flex-col gap-16 mb-24">
          {/* Project Row 1 – Card Right */}
          <div className="flex flex-col md:flex-row-reverse gap-16">
            <div className="md:w-1/2">
              <Card>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={IslandBoiImg}
                    alt="IslandBoi UI preview"
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
                The system adapts seamlessly across mobile and tablet
                experiences.
              </p>
              <Button className="w-fit">View Prototype</Button>
            </div>
          </div>
          {/* Project Row 2 – Card Left */}
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <Card>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={MindspaceImg}
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
                Built with empathy at its core, CancerLine Companion helps
                cancer patients navigate their treatment with confidence. I
                designed a clear, guided interface with empathetic tone,
                visualized timelines, and actionable next steps—ensuring
                accessibility for patients and caregivers across all literacy
                levels.
              </p>
              <Button className="w-fit">View Prototype</Button>
            </div>
          </div>
          {/* Project Row 3 – Card Right */}
          <div className="flex flex-col md:flex-row-reverse gap-16">
            <div className="md:w-1/2">
              <Card>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={MindspaceImg}
                    alt="Cicada Hills preview"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </AspectRatio>
              </Card>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Cicada Hills
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Cicada Hills is a real estate experience reimagined—designed to
                turn browsing into buying decisions. I crafted a responsive,
                mobile-first platform that blends nature-inspired visuals with
                high-conversion UX flows. The system scales across property
                types while maintaining brand harmony and user trust.
              </p>
              <Button className="w-fit">View Prototype</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
