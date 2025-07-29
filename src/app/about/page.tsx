import Image from "next/image";
import { Inter } from "next/font/google";
import PersonalProfile from "@/lib/Images/ProfileCard.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Avatar } from "@radix-ui/react-avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code,
  MessageCircleHeart,
  Paintbrush,
  ThumbsUp,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function AboutPage() {
  return (
    <div className={`min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-16 ${inter.variable} font-sans`}>
      {/* Hero Section */}
      <section className="text-center my-24">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
            Take a Step Into  <span className="text-[#7A382B]">My Journey</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Let me show you the skills and work I’ve developed so far. Let’s explore how I can bring value to your team.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About <span className="text-[#7A382B]">Me</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed">
            Hi, I’m Kevin Kurt Intong — a recent BSIT graduate from the University of the Immaculate Conception, with a specialization in healthcare technology. I’m passionate about designing clean, functional, and meaningful digital experiences that put users first.
            <br /><br />
            With a strong foundation in IT and a focus on solving real problems in the healthcare space, I approach every project with clarity, empathy, and purpose. Whether through freelance collaborations or academic work, I strive to create intuitive solutions that reduce complexity, streamline user journeys, and drive real impact through thoughtful, human-centered design.
            <br /><br />
            With hands-on frontend development skills, I bridge the gap between design and code—making it easy to collaborate with developers and ensure my designs are implemented efficiently and as intended.
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={PersonalProfile}
              alt="About Me Image"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </AspectRatio>
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight text-balance">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              icon: <Paintbrush className="w-8 h-8" />,
              title: "Design-Driven Thinking",
              text: "I design with empathy and clarity—especially for users who need things simple and intuitive. Every screen I create is backed by real-world user feedback and crafted to reduce friction, not just look good.",
            },
            {
              icon: <ThumbsUp className="w-8 h-8" />,
              title: "Feedback-Driven Growth",
              text: "I don’t take feedback personally—I treat it as UX gold. I iterate fast, test with intent, and constantly refine based on what works, not just what looks nice.",
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "Dev-Ready Collaboration",
              text: "With a background in frontend (React, Tailwind), I speak developer fluently. I design with real components in mind, making handoffs smoother and implementation faster—with fewer surprises in dev.",
            },
            {
              icon: <MessageCircleHeart className="w-8 h-8" />,
              title: "Empathy & Communication",
              text: "I ask, listen, and adapt. Whether it’s a user, a stakeholder, or a teammate, I make sure conversations are clear and feedback loops are short—so everyone stays aligned and projects move forward.",
            },
          ].map(({ icon, title, text }, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <Avatar>{icon}</Avatar>
              <h2 className="text-base sm:text-xl font-semibold tracking-wide leading-relaxed">{title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Experience Section */}
      <section className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Awards & Certification</h1>
            {[...Array(4)].map((_, i) => (
              <Accordion type="single" collapsible key={i}>
                <AccordionItem value={`award-${i}`}>
                  <AccordionTrigger className="text-base sm:text-xl font-semibold">
                    Bronze Medalist – Graphic Design
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg md:text-xl text-gray-600">
                    Bronze Medalist – Graphic Design
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Experiences</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="exp-1">
                <AccordionTrigger className="text-base sm:text-xl font-semibold">
                  Champion – Davao Startup Competition 2023
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg md:text-xl text-gray-600">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
