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
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import CicadaHills from "@/lib/Cicada Hills/CoverCicadaHills.svg";
import ITSO from "@/lib/ITSO/CoverITSO.svg";
import CancerLine from "@/lib/CancerLine Companion/CoverCancerLine.svg";
import { Lock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ProjectCard from "@/components/custom ui/ProjectCard";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HomePage() {
  return (
    <div
      className={`min-h-screen flex flex-col px-10 sm:px-20 md:px-24 lg:px-28 py-8 gap-16 ${inter.variable} font-sans `}
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
            Explore web, mobile, and brand work.
          </p>
        </div>

        <Tabs defaultValue="case-studies" className="w-full">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="web-mobile">Web & Mobile</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="playground">Playground</TabsTrigger>
          </TabsList>

          {/* Case Studies */}
          <TabsContent value="case-studies" className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <ProjectCard
                title="Cicada Hills"
                desc="Modular mental health interface reducing overwhelm and boosting engagement through guided flows."
                image={CicadaHills}
                link="/casestudy/CicadaHills"
              />

              <ProjectCard
                title="CancerLine Companion"
                desc="CancerLine Companion helps cancer patients navigate treatment with confidence using guided flows and accessible design."
                image={CancerLine}
                locked
              />

              <ProjectCard
                title="ITSO"
                desc="A beachhouse brand website designed to attract more direct bookings through a clean UI and custom form."
                image={ITSO}
                link="/casestudy/ITSO"
              />
               <ProjectCard
                title="ITSO"
                desc="A beachhouse brand website designed to attract more direct bookings through a clean UI and custom form."
                image={ITSO}
                link="#"
              />
            </motion.div>
          </TabsContent>

          {/* Web & Mobile */}
          <TabsContent value="web-mobile" className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <Card className="p-6 flex items-center justify-center">
                <p className="text-gray-400">
                  More mobile/web concepts coming soon…
                </p>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Branding */}
          <TabsContent value="branding" className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              <Card className="p-6 flex items-center justify-center">
                <p className="text-gray-400">Branding projects coming soon…</p>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Playground */}
          <TabsContent value="playground" className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <Card className="p-6 flex items-center justify-center">
                <p className="text-gray-400">
                  UI/UX experiments & animations soon…
                </p>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
