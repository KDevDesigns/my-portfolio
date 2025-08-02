// Updated AboutPage.tsx (Polished)
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
import { Code, MessageCircleHeart, Paintbrush, ThumbsUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function AboutPage() {
  return (
    <div
      className={`min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-16 ${inter.variable} font-sans`}
    >
      {/* Hero Section */}
      <section className="text-center my-24">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
            Take a Step Into <span className="text-[#7A382B]">My Journey</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Discover the experiences, skills, and projects that shaped my path.
            Here's how I can contribute meaningfully to your team.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About <span className="text-[#7A382B]">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed">
            Hi, I&apos;m Kevin Kurt Intong, a BS Information Technology graduate
            from the University of the Immaculate Conception, specializing in
            healthcare technology. I&apos;m passionate about building digital
            experiences that are purposeful, intuitive, and user-centric.
            <br />
            <br />
            My journey revolves around transforming complex healthcare
            challenges into seamless digital solutions. By fusing strategy with
            frontend expertise, I create interfaces that are both aesthetically
            refined and functionally powerful.
            <br />
            <br />
            As a designer-developer hybrid, I ensure that every design decision
            aligns with development realities—ready for handoff, collaboration,
            and iteration. I thrive in environments that champion clarity,
            teamwork, and a relentless focus on the user.
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={PersonalProfile}
              alt="Kevin Kurt Intong portrait"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </AspectRatio>
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight text-balance">
          Core Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              icon: <Paintbrush className="w-8 h-8" />,
              title: "Design-Driven Thinking",
              text: "I prioritize clarity and simplicity—designing with real users in mind. My screens are grounded in user research and built to remove friction at every touchpoint.",
            },
            {
              icon: <ThumbsUp className="w-8 h-8" />,
              title: "Feedback-Driven Growth",
              text: "I embrace feedback as fuel for improvement. Iterating with purpose ensures that every version delivers more value and a better experience.",
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "Dev-Ready Collaboration",
              text: "I bridge the gap between design and code, aligning visuals with reusable components in React and Tailwind. It keeps handoffs smooth and implementation fast.",
            },
            {
              icon: <MessageCircleHeart className="w-8 h-8" />,
              title: "Empathy & Communication",
              text: "Strong communication keeps teams aligned. I adapt, listen, and collaborate with intention—ensuring momentum and clarity across all phases.",
            },
          ].map(({ icon, title, text }, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <Avatar>{icon}</Avatar>
              <h2 className="text-base sm:text-xl font-semibold tracking-wide leading-relaxed">
                {title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards, Certifications & Experience Section */}
      <section className="mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Awards</h1>
            <Separator className="my-4" />
            {[
              {
                title: "🏅 Bronze Medalist – TESDA-Khorphil Skills Competition",
                year: "(2022)",
                desc: "Recognized in the Graphic Design Technology category in Davao City and Davao del Sur.",
              },
              {
                title: "🏅 Champion – Techstars Startup Weekend Davao",
                year: "(2023)",
                desc: "Led product design efforts in an interdisciplinary innovation team.",
              },
              {
                title: "🏅 3rd Place – DICT Startup Pitching Competition",
                year: "(2024)",
                desc: "Recognized as a top team in Davao City's startup ecosystem by DICT Region XI.",
              },
            ].map((award, i) => (
              <Accordion type="single" collapsible key={`award-${i}`}>
                <AccordionItem value={`award-${i}`}>
                  <AccordionTrigger className="text-base sm:text-xl font-semibold">
                    {award.title} {award.year}
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg md:text-xl text-gray-600">
                    {award.desc}
                  </AccordionContent>
                  <Separator />
                </AccordionItem>
              </Accordion>
            ))}

            <h1 className="text-3xl sm:text-4xl font-bold pt-8">
              Certifications
            </h1>
            <Separator className="my-4" />
            {[
              {
                title: "📜 Core Team Member – Google Developer Student Club",
                year: "(2022–2023)",
                desc: "Promoted developer advocacy and organized student-led tech initiatives.",
              },
              {
                title: "📜 Google UX Design Professional Certificate",
                year: "(2025)",
                desc: "Completed 7 comprehensive UX courses via Coursera, under DICT scholarship.",
              },
              {
                title: "📜 Frontend Development using React",
                year: "(2025)",
                desc: "Completed a professional course by Board Infinity via Coursera on frontend development best practices.",
              },
            ].map((cert, i) => (
              <Accordion type="single" collapsible key={`cert-${i}`}>
                <AccordionItem value={`cert-${i}`}>
                  <AccordionTrigger className="text-base sm:text-xl font-semibold">
                    {cert.title} {cert.year}
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg md:text-xl text-gray-600">
                    {cert.desc}
                    <button className="mt-4 text-sm underline text-blue-600">
                      View Certificate
                    </button>
                  </AccordionContent>
                  <Separator />
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Experience</h1>
            <Separator className="my-4" />
            <Accordion type="single" collapsible>
              <AccordionItem value="exp-2">
                <AccordionTrigger className="text-base sm:text-xl font-semibold">
                  Generalist UI/UX Designer – CancerLine Companion
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg md:text-xl text-gray-600">
                  Contributed to CancerLine Companion, a Davao-based startup, as
                  a generalist UI/UX designer for 1 year and 5 months. Led the
                  full design lifecycle—including research, wireframes,
                  prototypes, usability testing, and branding. Co-developed a
                  production-ready mobile app, significantly improving usability
                  through continuous iteration and feedback.
                </AccordionContent>
                <Separator />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
