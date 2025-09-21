"use client";
import Image from "next/image";
import React from "react";
import Main from "@/lib/Cicada Hills/Main/MainCicadaHills.svg";
import ImagePlaceholder from "@/lib/Universal Assets/ImagePlaceholder.svg";
import { Separator } from "@radix-ui/react-separator";
import Wireframes from "@/lib/Cicada Hills/Wireframes/Wireframes.svg";
import PrototypeStep1 from "@/lib/Cicada Hills/Wireframes/PrototypeStep1.svg";
import PrototypeStep2 from "@/lib/Cicada Hills/Wireframes/PrototypeStep2.svg";
import PrototypeStep3 from "@/lib/Cicada Hills/Wireframes/PrototypeStep3.svg";
import PrototypeStep4 from "@/lib/Cicada Hills/Wireframes/PrototypeStep4.svg";
import PrototypeStep5 from "@/lib/Cicada Hills/Wireframes/PrototypeStep5.svg";
import { Inter } from "next/font/google";

// Import Framer Motion
import { motion } from "framer-motion";
import { CalendarX2, CircleQuestionMark, ShieldOff, Snail } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export default function CicadaHills({}) {
  // Define animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Animate children with a delay
      },
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
            className="text-4xl lg:text-6xl my-4 font-semibold text-center text-teal-700"
          >
            <span className="text-black font-bold">Case Study:</span> From
            Messenger Chaos to Seamless Booking at Cicada Hills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center lg:text-2xl md:text-xl text-xl"
          >
            From Messenger Chaos to Seamless Booking at Cicada Hills
          </motion.p>
        </motion.div>
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16 lg:flex-row md:flex-row mx-auto px-16"
        >
          <motion.div variants={itemVariants} className="text-center grow">
            <h1 className="text-xl lg:text-2xl font-medium">Timeframe</h1>
            <p className="text-lg">6 weeks</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center grow">
            <h1 className="text-xl lg:text-2xl font-medium">My Role</h1>
            <p className="text-lg">UI/UX Designer</p>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center grow">
            <h1 className="text-xl lg:text-2xl font-medium">Tools</h1>
            <p className="text-lg">Figma</p>
          </motion.div>
        </motion.div>
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="py-0 lg:py-32"
        >
          <Image
            className="mx-auto h-auto"
            src={Main}
            alt={"Main image showing the Cicada Hills website on a device"}
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
          <motion.div variants={itemVariants} className="flex-1/2">
            <h1 className="text-3xl text-teal-700 font-medium ">
              Introduction
            </h1>
            <p className="italic text-sm">Setting the stage for change</p>
            <p className="text-justify my-4">
              Cicada Hills is a nature-inspired events venue in Davao City,
              hosting weddings, retreats, and milestone celebrations. While the
              venue itself impressed visitors, the booking process—managed only
              through Facebook Messenger and phone calls—was unreliable. Guests
              often felt uncertain, and the owner lost time managing scattered
              conversations instead of growing the business.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1/2">
            <h1 className="text-3xl text-teal-700 font-medium ">The Spark</h1>
            <p className="italic text-sm">
              The vision that set the project in motion
            </p>
            <p className="text-justify my-4">
              The owner wanted a professional website that would be simple,
              trustworthy, and polished. The solution: a stepper booking
              system—a guided process easy enough for any tech level. Alongside
              this, the owner requested a logo rebrand to capture Cicada Hills’
              natural elegance and strengthen its identity across all
              touchpoints.
            </p>
          </motion.div>
        </motion.div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        {/* Pain Points Section */}
        <div className="p-16 lg:px-32">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-3xl text-teal-700 font-medium text-center my-8">
              Understanding the Users
            </h1>
            <p className="text-center my-8">
              Research involved interviews with the owner and one staff member,
              plus collected guest feedback from reviews and comments. While
              cost was expected to be the main concern, it became clear that
              convenience and trust mattered more. Guests wanted certainty,
              transparency, and proof that their booking was secure.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 my-32"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center"
            >
              <CalendarX2 className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Unclear availability
              </h1>
              <p className="text-center">
                Users couldn’t tell if dates were actually free.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center"
            >
              <Snail className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Slow confirmations
              </h1>
              <p className="text-center">
                Waiting hours—or days—for replies felt endless.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center"
            >
              <CircleQuestionMark className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Confusing process
              </h1>
              <p className="text-center">Each inquiry started from scratch.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center"
            >
              <ShieldOff className="text-teal-700" />
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Lack of trust
              </h1>
              <p className="text-center">
                Without proof of booking, users doubted they were secure.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="text-3xl text-teal-700 font-medium text-center">
              Personas
            </h1>
            <Image className="my-6" src={ImagePlaceholder} alt={""}></Image>
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
            From Flow to Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center italic"
          >
            Here's how the booking system took shape.
          </motion.p>
          <div className="py-4">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-8"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pb-8 text-center"
              >
                The design process started with user flows mapping the booking
                journey. Three versions were created and refined based on owner
                and client feedback. Each iteration made the flow smoother,
                highlighted packages more clearly, and built trust by addressing
                concerns about hidden charges.
              </motion.p>
              <Image src={ImagePlaceholder} alt={"User flow diagram"} />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src={Wireframes}
                alt={"Wireframes showing a four-step booking process"}
              />
            </motion.div>
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
            Hi-Fi Wireframes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            After feedback, this became a five-step flow, adding missing details
            and giving users more confidence. The final high-fidelity wireframes
            combined clarity, transparency, and trust—plus an{" "}
            <span className="font-medium text-teal-700">MVP admin </span>
            dashboard for the owner.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="py-12 flex flex-col gap-8 md:flex-row md:justify-center md:items-center"
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep1}
                alt={"Prototype wireframe step 1"}
                className="max-w-full h-auto"
              />
            </motion.div>
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep2}
                alt={"Prototype wireframe step 2"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center"
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep3}
                alt={"Prototype wireframe step 3"}
                className="max-w-full h-auto"
              />
            </motion.div>
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep4}
                alt={"Prototype wireframe step 4"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center py-16"
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep5}
                alt={"Prototype wireframe step 5"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="py-12 flex flex-col gap-8 md:flex-row sm:flex-col md:justify-center md:items-center"
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep1}
                alt={"Prototype wireframe step 1"}
                className="max-w-full h-auto"
              />
            </motion.div>
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep2}
                alt={"Prototype wireframe step 2"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center "
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep5}
                alt={"Prototype wireframe step 5"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
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
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep5}
                alt={"Prototype wireframe step 5"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            The Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="py-4"
          >
            Cicada Hills moved from a manual, messy process to a professional,
            trusted venue. Guests now book with confidence, and the owner has
            more control, visibility, and credibility. The new branding also
            positions Cicada Hills more competitively in the local events
            market.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center "
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image
                src={PrototypeStep5}
                alt={"Prototype wireframe step 5"}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700"
          >
            What’s Next
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
            <motion.li variants={itemVariants}>Training staff to use the system</motion.li>
            <motion.li variants={itemVariants}>Supporting guests who still prefer Messenger</motion.li>
            <motion.li variants={itemVariants}>Ensuring stable internet access at the venue</motion.li>
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
        <Separator className="my-1 border-1 w-6xl mx-auto" />
        <div className="p-16 lg:px-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700 my-4"
          >
            View More Case Studies?
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col md:flex-row gap-12"
          >
            <motion.div variants={itemVariants} className="flex-1/2">
              <Card><Image src={ImagePlaceholder} alt={""}/><CardTitle className="px-4 text-2xl">MindSpace</CardTitle><CardDescription className="px-4">Mobile App Case Study</CardDescription></Card>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1/2">
              <Card><Image src={ImagePlaceholder} alt={""}/><CardTitle className="px-4 text-2xl">MindSpace</CardTitle><CardDescription className="px-4">Mobile App Case Study</CardDescription></Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}