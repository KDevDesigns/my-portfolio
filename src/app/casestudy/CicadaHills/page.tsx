"use client";
import Image from "next/image";
import React from "react";
import Main from "@/lib/Cicada Hills/Main/MainCicadaHills.svg";
import ImagePlaceholder from "@/lib/Universal Assets/ImagePlaceholder.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Separator } from "@radix-ui/react-separator";
import LogoRebrand from "@/lib/Cicada Hills/Wireframes/BrandLogo.svg";

import FullWireframe from "@/lib/Cicada Hills/Wireframes/FullWireframe.svg";
import FullHifiAdmin from "@/lib/Cicada Hills/Wireframes/FullHifiAdmin.svg";
import FullHifi from "@/lib/Cicada Hills/Wireframes/HifiWireframe1.svg";
import FullHifiv2 from "@/lib/Cicada Hills/Wireframes/HifiWireframe2.svg";

import NewUserflow from "@/lib/Cicada Hills/Research/NewUserflow.svg";
import OldUserflow from "@/lib/Cicada Hills/Research/Userflow.svg";
import { Inter } from "next/font/google";

// Import Framer Motion
import { motion } from "framer-motion";
import {
  CalendarX2,
  CircleQuestionMark,
  CircleX,
  HeartCrack,
  MoveLeft,
} from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function CicadaHills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className={inter.className}>
      <section className="lg:mx-32 md:mx-24 sm:mx-16 mx-auto overflow-hidden">
        {/*Home Nav*/}
        <motion.div className="flex p-16 lg:px-16 gap-12">
          <Link
            href="/"
            className="flex justify-center gap-4 font-medium place-content-center"
          >
            <MoveLeft />
            Back
          </Link>
        </motion.div>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-32 p-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl lg:text-6xl font-semibold text-center text-teal-700"
          >
            <span className="text-black font-bold">Case Study:</span>{" "}
            Reimagining Cicada Hills&apos; Digital Experience
          </motion.h1>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="py-0 lg:py-12"
        >
          <Image
            src={Main}
            alt="Main image showing the Cicada Hills website on a device"
            width={1200}
            height={800}
            className="mx-auto h-auto"
          />
        </motion.div>

        {/* Challenge and Spark Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row p-16 lg:px-32 gap-12"
        >
          <motion.div variants={itemVariants} className="basis-1/2">
            <h1 className="text-3xl text-teal-700 font-medium ">
              Project Overview
            </h1>
            <p className="italic text-sm">Setting the stage for change</p>
            <p className="text-justify my-4">
              Cicada Hills, a stunning nature-inspired events venue in Davao
              City, had cultivated a strong following on social media,
              showcasing its beautiful scenery and premium offerings. However,
              this popular online presence masked a significant operational
              weakness: the business relied entirely on a manual, high-friction
              booking process through Facebook Messenger, which created
              operational bottlenecks and a frustrating experience for a growing
              customer base. The co-owner approached me with a clear challenge:
              to lead a complete digital transformation that would elevate their
              brand beyond social media. The project involved designing a
              seamless online booking system, creating a professional website to
              capture organic search traffic, and executing a full brand
              identity refresh to build credibility and trust.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="basis-1/2">
            <h1 className="text-3xl text-teal-700 font-medium ">
              The Challenge
            </h1>
            <p className="italic text-sm">The Manual Process Dilemma</p>
            <p className="text-justify my-4">
              During my initial interview with the co-owner, she detailed a
              workflow that was both time-consuming and out of sync with the
              venue&apos;s premium image. The core problem was a disconnect
              between the high-quality experience offered on-site and the
              clunky, inefficient process customers faced online.
            </p>
            <p className="font-semibold my-2">
              The co-owner&apos;s goals were clear:
            </p>
            <ul className="list-disc list-inside gap-2 my-4">
              <li>Expand visibility beyond Facebook.</li>
              <li>Build a credible, professional online presence.</li>
              <li>Automate operations to save time and reduce errors.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Separator fix */}
        <Separator className="my-1 w-full max-w-6xl mx-auto border" />
        <div className="p-16 lg:px-32">
          {/* */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-3xl text-teal-700 font-medium text-center my-8">
              My Role
            </h1>
            <p className="text-center my-8">
              I am the UI/UX Designer and the Developer for this project. While
              new to formal research, I leaned heavily on UI design expertise to
              craft a system that felt professional, trustworthy, and easy to
              use.
            </p>
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        {/* Pain Points Section */}
        <div className="p-16 lg:px-32">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-3xl text-teal-700 font-medium text-start my-8">
              Research & Discovery
            </h1>
            <p className="text-justify my-8">
              As part of discovery, I mapped the venue’s existing workflow to
              identify pain points and inefficiencies. The assessment revealed a
              highly manual, fragmented system:
            </p>
          </motion.div>
          <motion.div>
            <Image src={OldUserflow} alt={""} />
          </motion.div>
          <motion.div>
            <h1 className="text-2xl text-teal-700 font-medium text-center my-2">
              Pain Points
            </h1>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 my-16"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center w-full"
            >
              <CalendarX2 className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Operational inefficiency
              </h1>
              <p className="text-center">
                staff wasted hours on admin tasks instead of client-facing
                service.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center w-full"
            >
              <CircleX className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Human error risks
              </h1>
              <p className="text-center">
                misspelled details, double-bookings, and lost inquiries in
                Messenger.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center w-full"
            >
              <CircleQuestionMark className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Limited growth
              </h1>
              <p className="text-center">
                visibility stuck inside Facebook; no reach on search.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center w-full"
            >
              <HeartCrack className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Customer frustration
              </h1>
              <p className="text-center">
                long wait times, no transparency on dates or packages,
                unprofessional payment experience.
              </p>
            </motion.div>
          </motion.div>
          <motion.div>
            <h1 className="text-2xl text-teal-700 font-medium text-start my-4">
              Insights
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>Customers wanted to see availability instantly.</li>
              <li>Trust required clear fees and receipts.</li>
              <li>
                Staff needed an automated, reliable process to reduce errors.
              </li>
            </ul>
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        {/* Wireframes Section */}
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700 text-center my-4"
          >
            Design Approach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center italic "
          >
            Here&aopos;s how the booking system took shape.
          </motion.p>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="my-16"
          >
            <motion.h1 className="text-teal-700 font-medium text-3xl my-2">
              Mapping the New User Flow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-4 text-start"
            >
              I redesigned the flow around clarity and progression. Instead of
              hidden details and endless back-and-forth, the new system would:
            </motion.p>
            <ul className="list-disc list-inside flex flex-col gap-2 my-4">
              <li>
                Surface{" "}
                <span className="text-teal-700 font-medium">
                  available dates upfront.
                </span>
              </li>
              <li>
                Provide{" "}
                <span className="text-teal-700 font-medium">
                  preset packages
                </span>{" "}
                with clear details.
              </li>
              <li>
                Offer a{" "}
                <span className="text-teal-700 font-medium">
                  customizable setup
                </span>{" "}
                for flexibility.
              </li>
              <li>
                Automate{" "}
                <span className="text-teal-700 font-medium">
                  payment and confirmation.
                </span>
              </li>
            </ul>

            <Image src={NewUserflow} alt={"User flow diagram"} />
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          {/* Hi-Fi Wireframes Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            Wireframing & Iterations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            I built three versions of the wireframes:
          </motion.p>
          <ul className="list-disc list-inside flex flex-col gap-2 my-4">
            <li>
              <span className="text-teal-700 font-medium">Version 1 & 2:</span>{" "}
              Focused on smoother flow but buried available dates too deep.
            </li>
            <li>
              <span className="text-teal-700 font-medium">
                Testing with 5 users:
              </span>{" "}
              Feedback showed frustration—
              <span className="italic">
                “show available dates immediately.”
              </span>{" "}
              Automated payments were also a common request.
            </li>
            <li>
              <span className="text-teal-700 font-medium">Version 3:</span>{" "}
              Pivoted to display dates upfront, streamlined payments, and
              simplified the flow.
            </li>
          </ul>

          <div>
            <TransformWrapper>
              <TransformComponent>
                <Image src={FullWireframe} alt={"FullHifi"} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          {/* Hi-Fi Wireframes Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            High-Fidelity UI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            I translated the final wireframes into a polished, professional
            interface.
          </motion.p>
          <ul className="list-disc list-inside flex flex-col gap-2 my-4">
            Key design features:
            <li>
              <span className="text-teal-700 font-medium">
                Professional, transparent UI
              </span>{" "}
              → aligned with the venue’s premium brand.
            </li>
            <li>
              <span className="text-teal-700 font-medium">Booking summary</span>{" "}
              → no hidden fees, building customer trust.
            </li>
            <li>
              <span className="text-teal-700 font-medium">
                Customizable event setup
              </span>{" "}
              → customers could tailor packages to budget and preferences.
            </li>
            <li>
              <span className="text-teal-700 font-medium">Preset packages</span>{" "}
              → one-click setup with full details shown instantly.
            </li>
            <li>
              <span className="text-teal-700 font-medium">
                Consistent, simple flow
              </span>{" "}
              → a clear 5-step progression that testers found intuitive.
            </li>
          </ul>

          <div className="py-6 flex flex-col gap-8 md:justify-center md:items-center">
            <div>
              <TransformWrapper>
                <TransformComponent>
                  <Image src={FullHifi} alt="FullHifi" />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div>
              <TransformWrapper>
                <TransformComponent>
                  <Image src={FullHifiv2} alt="FullHifi" />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
        </div>
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            The Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-4"
          >
            A simple admin dashboard was built to manage bookings, including:
          </motion.p>

          <div>
            <TransformWrapper>
              <TransformComponent>
                <Image src={FullHifiAdmin} alt={"FullHifi"} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            Rebranding Cicada Hills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="italic"
          >
            Building a stronger visual identity
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-4"
          >
            As part of the project, the Cicada Hills logo was reimagined to
            align with its natural, elegant atmosphere. The refreshed design
            uses earthy greens and organic shapes, reinforcing its eco-inspired
            brand. The rebrand ensures the website, marketing materials, and
            booking platform all carry a consistent, professional identity.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center "
          >
            <motion.div variants={imageVariants} className="w-full">
              <Image
                src={LogoRebrand}
                alt={"Prototype wireframe step 5"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col "
          >
            <div className="h-auto w-auto flex justify-center">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width={"1440"}
                height={"800"}
                src="https://embed.figma.com/proto/J46ElHw6grBVrTxuHz99FK/Cicada-Hills?page-id=10%3A4&node-id=371-1328&viewport=-18623%2C-13903%2C0.31&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=371%3A1328&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
  
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            What&apos;s Next
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-2"
          >
            The move to digital tools brings new challenges:
          </motion.p>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="indent-8 list-disc list-inside my-4 flex flex-col gap-2"
          >
            <motion.li variants={itemVariants}>
              Training staff to use the system
            </motion.li>
            <motion.li variants={itemVariants}>
              Supporting guests who still prefer Messenger
            </motion.li>
            <motion.li variants={itemVariants}>
              Ensuring stable internet access at the venue
            </motion.li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-2"
          >
            Planned improvements include loyalty programs, a chatbot for quick
            questions.
          </motion.p>
        </div>
        
          


        <footer className="py-8">
          <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} ITSO Case Study — Designed with
              Next.js & Tailwind.
            </p>
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to top
            </Button>
          </div>
        </footer>
      </section>
    </main>
  );
}
