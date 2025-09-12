"use client";
import { Badge } from "@/components/ui/badge";
import Cover from "../../../lib/Screenshots/ITSO/CoverPhotoITSO.svg";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CirclePlay,
  ClockArrowDown,
  GalleryVerticalEnd,
  ListChecks,
  MessageCircleQuestionMark,
  RefreshCcw,
  SearchX,
} from "lucide-react";

import STEP1 from "../../../lib/Screenshots/ITSO/BasicInfo1.svg";
import STEP2 from "../../../lib/Screenshots/ITSO/InventorDetails2.svg";
import STEP3 from "../../../lib/Screenshots/ITSO/UploadDocuments3.svg";
import STEP4 from "../../../lib/Screenshots/ITSO/Review&Submit4.svg";
import TRACKDASH from "../../../lib/Screenshots/ITSO/TrackApplicationDash.svg";
import TRACKDETAIL from "../../../lib/Screenshots/ITSO/TrackApplicationDetails.svg";
import PATENTSEARCH from "../../../lib/Screenshots/ITSO/PatentSearch.svg";
import IA from "../../../lib/Screenshots/ITSO/Information Architecture.svg";
import Wireframe from "../../../lib/Screenshots/ITSO/Wireframes.png";
import { Card } from "@/components/ui/card";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function () {
  return (
    <div className={`min-h-screen ${inter.variable} font-sans`}>
      <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-6 py-16">
        {/* HERO / OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-6xl mt-4"
        >

          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-normal">
            Innovation and Technology Support Office (ITSO) Portal{" "}
            <span className="text-rose-600">UI/UX Case Study</span>
          </h1>
          <p className="my-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-prose mx-auto">
            The Innovation and Technology Support Office (ITSO) is responsible
            for assisting students and faculty in protecting intellectual
            property (IP) and innovations. However, the existing manual
            processes caused confusion, delays, and inefficiencies.
          </p>

          <div className="flex flex-row gap-2 justify-center">
            <Badge className="bg-rose-600 rounded-full py-1 px-3 text-sm font-semibold border-none">
              Figma
            </Badge>
            <Badge className="bg-rose-100 text-rose-600 rounded-full py-1 px-3 text-sm font-semibold border-none">
              VS Code
            </Badge>
            <Badge className="bg-rose-100 text-rose-600 rounded-full py-1 px-3 text-sm font-semibold border-none">
              React js
            </Badge>
            <Badge className="bg-rose-100 text-rose-600 rounded-full py-1 px-3 text-sm font-semibold border-none">
              Mantine framework
            </Badge>
          </div>

          {/* CTA - restored
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-[12px]">
              Get Started <ArrowUpRight className="!h-4 !w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-[12px] shadow-none"
            >
              <CirclePlay className="!h-4 !w-4" />
              Watch Demo
            </Button>
          </div> */}
        </motion.div>
        <Image
          className="w-full max-w-screen-xl mx-auto my-16 rounded-xl"
          src={Cover}
          alt={""}
        ></Image>
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-xl mx-auto py-12 text-center w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-flex items-center justify-center rounded-full bg-rose-50 text-rose-600 font-semibold px-3 py-1 text-sm">
              01
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold">The Challenge</h2>
          </div>
          <p className="mt-2 text-base sm:text-lg mx-auto max-w-prose">
            Researchers and students faced three core challenges
          </p>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-center">
            <div className="max-w-auto flex flex-col items-center">
              <ClockArrowDown className="mb-4 h-8 w-8 text-rose-600" />
              <span className="text-base sm:text-lg text-center font-semibold">
                Delayed Communication
              </span>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center">
                Manual coordination between applicants and ITSO staff slowed
                down the process.
              </p>
            </div>
            <div className="max-w-auto flex flex-col items-center">
              <MessageCircleQuestionMark className="mb-4 h-8 w-8 text-rose-600" />
              <span className="text-base sm:text-lg text-center font-semibold">
                Complex Submission Process
              </span>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center">
                First-time users often struggled with document requirements and
                steps.
              </p>
            </div>
            <div className="max-w-auto flex flex-col items-center">
              <SearchX className="mb-4 h-8 w-8 text-rose-600" />
              <span className="text-base sm:text-lg text-center font-semibold">
                Lack of Tracking
              </span>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center">
                Users had no visibility into their application’s progress,
                leading to uncertainty.
              </p>
            </div>
          </div>
        </motion.section>
        <div className="my-12 sm:my-16 px-6 sm:px-12 w-full max-w-4xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="my-12 sm:my-16 px-6 sm:px-12 w-full max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center rounded-full bg-rose-50 text-rose-600 font-semibold px-3 py-1 text-sm">
                02
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
                Goals & Objectives
              </h2>
            </div>
            <p className="text-base mb-8 text-center">
              Researchers and students faced three core challenges
            </p>
            <div className="ml-4 sm:ml-6 space-y-6">
              <div className="relative flex items-start pb-2">
                <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                <div className="absolute ml-[-14px] py-2">
                  <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                    <RefreshCcw className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="pl-12">
                  <h3 className="mt-2 text-base sm:text-[16px] font-medium text-rose-600">
                    Beginner-friendly
                  </h3>
                  <p className="text-sm sm:text-base">
                    Manual coordination between applicants and ITSO staff slowed
                    down the process.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start pb-2">
                <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                <div className="absolute ml-[-14px] py-2">
                  <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="pl-12">
                  <h3 className="mt-2 text-base sm:text-[16px] font-medium text-rose-600">
                    Simplify navigation
                  </h3>
                  <p className="text-sm sm:text-base">
                    First-time users often struggled with document requirements
                    and steps.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start pb-2 ">
                <div className="absolute ml-[-14px] py-2">
                  <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                    <ListChecks className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="pl-12">
                  <h3 className="mt-2 text-base sm:text-[16px] font-medium text-rose-600">
                    Application tracking
                  </h3>
                  <p className="text-sm sm:text-base">
                    Users had no visibility into their application’s progress,
                    leading to uncertainty.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
        <div className="flex flex-col grid-rows-3 max-w-screen-xl mx-auto py-12 text-center w-full">
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-col grid-rows-3 max-w-screen-xl mx-auto py-12 text-center w-full"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center rounded-full bg-rose-50 text-rose-600 font-semibold px-3 py-1 text-sm">
                03
              </span>
              <h1 className="text-3xl sm:text-4xl font-semibold  text-center">
                Design Process
              </h1>
            </div>

            <p className="max-w-2xl mx-auto items-center mt-2 text-base sm:text-lg mb-12">
              We started by understanding the needs of students, researchers, and
              administrators. This involved creating a sitemap to define the
              structure of the portal and mapping user flows to ensure a seamless
              experience for each user type.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} className="mb-16 mx-auto w-full">
              <Card>
                <Image src={IA} alt={"Information Architecture"}></Image>
              </Card>
            </motion.div>

            <div className="flex items-center justify-start w-full mb-6">
              <span className="inline-flex items-center justify-center rounded-full bg-rose-50 text-rose-600 font-semibold px-3 py-1 text-sm mr-3">
                04
              </span>
              <h1 className="text-3xl sm:text-4xl font-semibold text-start">
                Low-fidelity wireframes
              </h1>
            </div>

            <p className="max-w-2xl text-start mt-2 text-base sm:text-lg mb-12">
              Quick sketches and low-fidelity wireframes were created to visualize
              the layout and functionality of the portal. These were tested with
              students to gather feedback on usability and navigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
                <Card>
                  <Image src={IA} alt={"Information Architecture"}></Image>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
                <Card>
                  <Image src={IA} alt={"Information Architecture"}></Image>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
                <Card>
                  <Image src={IA} alt={"Information Architecture"}></Image>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
                <Card>
                  <Image src={IA} alt={"Information Architecture"}></Image>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
                <Card>
                  <Image src={IA} alt={"Information Architecture"}></Image>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
                <Card>
                  <Image src={IA} alt={"Information Architecture"}></Image>
                </Card>
              </motion.div>
            </div>
          </motion.section>
        </div>
        {/* Duplicate: restored second Low-fidelity wireframes block */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col grid-rows-3 max-w-screen-xl mx-auto py-12 text-center w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-start">
            Low-fidelity wireframes
          </h1>
          <p className="max-w-2xl text-start mt-2 text-base sm:text-lg mb-12">
            Quick sketches and low-fidelity wireframes were created to visualize
            the layout and functionality of the portal. These were tested with
            students to gather feedback on usability and navigation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <Card className="">
              <Image src={IA} alt={""}></Image>
            </Card>
            <Card className="">
              <Image src={IA} alt={""}></Image>
            </Card>
            <Card className="">
              <Image src={IA} alt={""}></Image>
            </Card>
            <Card className="">
              <Image src={IA} alt={""}></Image>
            </Card>
            <Card className="">
              <Image src={IA} alt={""}></Image>
            </Card>
            <Card className="">
              <Image src={IA} alt={""}></Image>
            </Card>
          </div>
        </motion.section>
        <div className="mt-12">
          <CaseStudyNavigation />
        </div>
        <footer className="border-t py-8">
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
      </div>
    </div>
  );
}
