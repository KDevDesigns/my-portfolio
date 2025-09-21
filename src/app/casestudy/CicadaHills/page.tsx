"use client";
import Image from "next/image";
import React from "react";
import Main from "@/lib/Cicada Hills/Main/MainCicadaHills.svg";
import ImagePlaceholder from "@/lib/Universal Assets/ImagePlaceholder.svg";
import { Separator } from "@radix-ui/react-separator";
import Wireframes from "@/lib/Cicada Hills/Wireframes/Wireframes.svg"
import PrototypeStep1 from "@/lib/Cicada Hills/Wireframes/PrototypeStep1.svg"
import PrototypeStep2 from "@/lib/Cicada Hills/Wireframes/PrototypeStep2.svg"
import PrototypeStep3 from "@/lib/Cicada Hills/Wireframes/PrototypeStep3.svg"
import PrototypeStep4 from "@/lib/Cicada Hills/Wireframes/PrototypeStep4.svg"
import PrototypeStep5 from "@/lib/Cicada Hills/Wireframes/PrototypeStep5.svg"
import { Inter } from "next/font/google";

// Import Framer Motion
import { motion } from "framer-motion";

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
            <span className="text-black font-bold">Case Study:</span> From Messenger Chaos to Seamless Booking at Cicada Hills
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

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="py-0 lg:py-32"
        >
          <Image className="mx-auto h-auto" src={Main} alt={"Main image showing the Cicada Hills website on a device"} />
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
            <h1 className="text-3xl text-teal-700 font-medium py-2">
              The Challenge
            </h1>
            <p className="text-justify my-4">
              Couples dreaming of weddings, companies planning retreats, and families celebrating milestones all loved the serene beauty of Cicada Hills in Davao City. But booking the venue? That was a different story. Everything ran through Facebook Messenger and phone calls. One missed notification could mean a lost client. Guests often messaged three times just to confirm one date. Information was scattered, double-bookings were a constant risk, and the owner spent more time juggling chats than running her venue.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1/2">
            <h1 className="text-3xl text-teal-700 font-medium py-2">
              The Spark
            </h1>
            <p className="text-justify my-4">
              The owner asked for a professional website. My challenge: design an experience so simple that even the least tech-savvy guest could book with confidence. The solution? A stepper booking system—a guided, step-by-step flow that removes friction and builds trust at every click.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16 lg:flex-row md:flex-row mx-auto py-8 px-16"
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
        
        {/* Pain Points Section */}
        <div className="p-16 lg:px-32">
          <Separator className="my-6 border-1" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium my-16 text-center bg-teal-700 text-white p-16"
          >
            The Design Journey
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Unclear availability
              </h1>
              <p className="text-center">
                Users couldn’t tell if dates were actually free.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Slow confirmations
              </h1>
              <p className="text-center">
                Waiting hours—or days—for replies felt endless.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Confusing process
              </h1>
              <p className="text-center">Each inquiry started from scratch.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Lack of trust
              </h1>
              <p className="text-center">
                Without proof of booking, users doubted they were secure.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Wireframes Section */}
        <div className="p-16 lg:px-32">
          <Separator className="my-1 border-1" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-medium text-teal-700 text-center my-4"
          >
            From User Flow to UI
          </motion.h1>
          <div className="py-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="py-8"
            >
              User Flow
            </motion.p>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image src={ImagePlaceholder} alt={"User flow diagram"} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="py-8"
            >
              Wireframes initially tested a four-step process:
            </motion.p>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image src={Wireframes} alt={"Wireframes showing a four-step booking process"} />
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center p-2 lg:p-32 md:p-16 sm:p-16"
          >
            Across three wireframe iterations, the design was refined to create
            a smoother booking flow that clearly showcased Cicada Hills’
            services and packages. The focus was on eliminating uncertainty and
            building trust by addressing the common fear of <a className="text-teal-700 font-semibold after:content-['_↗']"href="...">Hidden Charges</a> This
            process culminated in high-fidelity wireframes with a five-step
            flow, which captured all essential details, reinforced transparency,
            and enhanced user confidence. These refinements also laid the
            groundwork for a straightforward MVP showcase of the admin
            dashboard.
          </motion.p>

          <Separator className="my-6 border-1" />
          
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
            Integrated feedback from peers who emphasized making the Check
            Availability button always visible.
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="py-12 flex flex-col gap-8 md:flex-row md:justify-center md:items-center"
          >
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image src={PrototypeStep1} alt={"Prototype wireframe step 1"} className="max-w-full h-auto" />
            </motion.div>
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image src={PrototypeStep2} alt={"Prototype wireframe step 2"} className="max-w-full h-auto" />
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
              <Image src={PrototypeStep3} alt={"Prototype wireframe step 3"} className="max-w-full h-auto" />
            </motion.div>
            <motion.div variants={imageVariants} className="w-full md:w-1/2">
              <Image src={PrototypeStep4} alt={"Prototype wireframe step 4"} className="max-w-full h-auto" />
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
              <Image src={PrototypeStep5} alt={"Prototype wireframe step 5"} className="max-w-full h-auto" />
            </motion.div>
          </motion.div>
          <Separator className="my-6 border-1" />
        </div>
      </section>
    </main>
  );
}