"use client";

import { Inter } from "next/font/google";
import { Card } from "@/components/ui/card";
import CicadaHills from "@/lib/Cicada Hills/CoverCicadaHills.svg";
import MindSpace from "@/lib/Mindspace/MindspaceCover.svg";
import CancerLine from "@/lib/CancerLine Companion/CoverCancerLine.svg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ProjectCard from "@/components/custom ui/ProjectCard";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HomePage() {
  // Define animation variants for a staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger delay for children elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`min-h-screen flex flex-col px-10 sm:px-20 md:px-24 lg:px-28 py-8 gap-16 ${inter.variable} font-sans `}
    >
      {/* Hero Section with Animations */}
      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-16 lg:mt-32 mb-16 lg:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance"
          >
            Hi! I’m Kevin, a <br />
            <span className="text-[#7A382B]">UI/UX Designer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl tracking-wide leading-relaxed"
          >
            Design is not decoration—it’s acceleration. I build systems that
            move users from question to solution.
          </motion.p>
        </motion.div>
      </section>

      {/* My Works Section with Animations */}
      <section id="work" className="mt-16 lg:mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-[#7A382B]">Works</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
            See how I turn complexity into clarity. Browse case studies. <br />
            Explore web, mobile, and brand work.
          </p>
        </motion.div>

        <Tabs defaultValue="case-studies" className="w-full">
          {/* Use motion.div for the TabsList */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <TabsList className="flex flex-wrap gap-2">
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="web-mobile">Web & Mobile</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="playground">Playground</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Case Studies */}
          <TabsContent value="case-studies" className="mt-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show" // Use `animate` for a smooth transition on tab change
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <motion.div variants={itemVariants}>
                <ProjectCard
                  title="Cicada Hills"
                  desc="Designing an easy-to-use website where guests can see real-time availability on a calendar and book their stay or event instantly online."
                  image={CicadaHills}
                  link="/casestudy/CicadaHills"
                  ctaType="case-study" // This will show "View Case Study"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ProjectCard
                  title="CancerLine Companion"
                  desc="CancerLine Companion helps cancer patients navigate treatment with confidence using guided flows and accessible design."
                  image={CancerLine}
                  locked
                  ctaType="case-study" // This will show "View Prototype"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ProjectCard
                  title="Mindspace"
                  desc="Modular mental health interface reducing overwhelm and boosting engagement through guided flows."
                  image={MindSpace}
                  link="/casestudy/Mindspace"
                  ctaType="case-study" // This will show "View Project"
                />
              </motion.div>
              
              
            </motion.div>
            
          </TabsContent>

          {/* Web & Mobile */}
          <TabsContent value="web-mobile" className="mt-12">
            
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              <Card className="p-6 flex items-center justify-center">
                <p className="text-gray-400">Web&Mobile projects is in development coming soon…</p>
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