"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Inter } from "next/font/google";
import Image from "next/image";
import CoverImg from "@/lib/Mindspace/MindspaceCover.svg";
import Link from "next/link"; // Link is correctly imported and used
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import CompetitiveAnalysis from "@/lib/Mindspace/Competitive Analysis/Competitive Analysis.svg";
import EntireWireframe from "@/lib/Mindspace/Wireframe/Hifi-Wireframe Entire feature.svg";
import OnboardingtoAuth from "@/lib/Mindspace/Wireframe/Hifi-Wireframe on Boarding to Auth.svg";
import { Button } from "@/components/ui/button";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function MindSpace() {
  return (
    <div className={inter.className}>
      <header className="flex items-center justify-start py-4 md:py-4 px-4 md:px-8 lg:px-12 mx-8 lg:mx-28">
        <Link
          href="/" // Using <Link /> for internal navigation to avoid the previous error
          className="font-medium flex justify-center items-center gap-2 text-xs md:text-sm lg:text-lg"
        >
          <MoveLeft />
          Home
        </Link>
      </header>
      <main className="">
        <section className="flex flex-col">
          <div className="relative w-full">
            <Image
              className="z-0 w-full h-auto object-cover"
              src={CoverImg}
              alt={"CoverImg"}
            />

            <div className="absolute left-0 bottom-0 flex flex-col gap-2 md:gap-4 items-start p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 ">
              <Badge className="text-xs md:text-sm lg:text-lg p-1 md:p-2 text-white bg-blue-700">
                Case Study
              </Badge>
              <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-6xl ">
                MindSpace
              </h1>
              <p className="italic text-white text-xs md:text-sm lg:text-lg">
                Designing for Calm in a Chaotic Digital World
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 ">
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            MindSpace is a self-initiated concept project—a holistic mental
            wellness application combining journaling, mood tracking, and guided
            meditation. This case study details my approach as the sole designer
            to create a superior user experience by directly responding to
            critical pain points found in leading competitor apps (Headspace,
            Calm, Reflectly).
          </p>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 ">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
            The Challenge: A Friction-Filled Path to Peace
          </h2>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            While popular, existing digital wellness applications frequently
            frustrate users. My competitive analysis and user review audit
            revealed three core failures across the market:
          </p>
          <div className="flex flex-col my-8">
            <Image src={CompetitiveAnalysis} alt={"FullHifi"} />

            <h1 className="text-lg md:text-2xl font-bold my-8 ">
              Competitive Analysis Summary
            </h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Competitor</TableHead>
                  <TableHead>Primary UX Issues Reported by Users</TableHead>
                  <TableHead>Core Frustrations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Headspace</TableCell>
                  <TableCell>
                    Overly complex onboarding, cluttered home <br />
                    page, lack of content filtering/tracking, inco
                    <br />
                    nsistent labeling.
                  </TableCell>
                  <TableCell>
                    Cluttered Navigation & Lack of Progress Awareness
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Reflectly</TableCell>
                  <TableCell>
                    Low-contrast UI, poor visual hierarchy, <br />
                    slow animations, disjointed navigation, <br />
                    aggressive monetization.
                  </TableCell>
                  <TableCell>Accessibility & Usability Failures</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Calm</TableCell>
                  <TableCell>
                    Aggressive monetization pre-registration, <br />
                    difficulty resuming courses, hidden settings, <br />
                    overall disorganized feel.
                  </TableCell>
                  <TableCell>Monetization & Navigation Friction</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <ul className="list-disc list-inside mt-4 space-y-2 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            <h1 className="font-bold my-4 text-2xl">
              Core UX Problems to Solve in MindSpace
            </h1>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
              The research distilled these widespread criticisms into five
              foundational problems that became the focus of the MindSpace
              design strategy:
            </p>
            <li>
              <strong className="text-blue-700">Onboarding Friction:</strong>{" "}
              Users are overwhelmed by setup or upsell screens before accessing
              core content.
            </li>
            <li>
              <strong className="text-blue-700">
                Cluttered and Confusing Navigation:
              </strong>{" "}
              Users struggle to easily return to their current activity (course,
              journal).
            </li>
            <li>
              <strong className="text-blue-700">Poor Visual Hierarchy:</strong>{" "}
              Visual cues lack clarity, making it difficult for users to
              identify clickable elements.
            </li>
            <li>
              <strong className="text-blue-700">
                Aggressive Monetization Flows:
              </strong>{" "}
              Pricing is non-transparent, often interrupting the user experience
              too early.
            </li>
            <li>
              <strong className="text-blue-700">
                Lack of Progress Awareness:
              </strong>{" "}
              Users cannot easily track their progress or streaks across
              different wellness activities.
            </li>
          </ul>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 ">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
            Strategy: Design Strategy and User Segmentation
          </h2>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            The strategy was to use targeted research insights—specifically How
            Might We (HMW) statements and User Personas—to execute solutions
            that directly neutralize the identified competitor weaknesses.
          </p>
          <div className="flex flex-col my-8">
            <h1 className="text-lg md:text-2xl font-bold my-2 ">
              Target User Personas
            </h1>
            <p className="mb-4 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
              Two personas grounded the design decisions, ensuring the interface
              catered to distinct needs:
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Challenge</TableHead>
                  <TableHead> Strategic Design Question</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Onboarding Friction
                  </TableCell>
                  <TableCell>
                    (HMW) let users jump into their wellness routine <br />{" "}
                    without unnecessary setup friction?
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Navigation Confusion
                  </TableCell>
                  <TableCell>
                    (HMW) help users pick up exactly where they <br />
                    left off, every time?
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Poor Visual Hierarchy
                  </TableCell>
                  <TableCell>
                    (HMW) make UI elements feel intuitive and <br />
                    distinguishable at a glance?
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Aggressive Monetization
                  </TableCell>
                  <TableCell>
                    (HMW) design a calm and trustworthy monetization <br />
                    flow that doesn’t break immersion?
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Lack of Progress
                  </TableCell>
                  <TableCell>
                    (HMW) show users their emotional and course <br />
                    progress clearly and meaningfully?
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col my-8">
            <h1 className="text-lg md:text-2xl font-bold my-2 ">
              Target User Personas
            </h1>
            <p className="mb-4 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
              Two personas grounded the design decisions, ensuring the interface
              catered to distinct needs:
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Persona</TableHead>
                  <TableHead>Goal & Need</TableHead>
                  <TableHead>Frustration</TableHead>
                  <TableHead>Design Focus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Samira Dela Cruz <br />
                    (The Daily Reflector)
                  </TableCell>
                  <TableCell>
                    Maintain a daily journaling habit and <br />
                    track mood trends. Needs a clean, <br />
                    distraction-free space with good contrast.
                  </TableCell>
                  <TableCell>
                    Cluttered UIs, <br />
                    poor contrast, intrusive upsells.
                  </TableCell>
                  <TableCell>
                    Visual Design, <br />
                    Journaling Flow, Respectful UX
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Alex Navarro <br />
                    (The Guided Growth Seeker)
                  </TableCell>
                  <TableCell>
                    Commit to trackable meditation courses <br /> and resume
                    progress easily. Needs smart <br />
                    course continuation and clear content <br />
                    filtering.
                  </TableCell>
                  <TableCell>
                    Apps that lose course progress, <br />
                    cluttered and hard-to-navigate <br />
                    content libraries.
                  </TableCell>
                  <TableCell>
                    Navigation Intelligence, <br />
                    Content Organization
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
            Executing the Solution: Features and Flows
          </h1>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            The MindSpace design addresses each HMW statement through targeted
            feature implementation, <br />
            prioritizing clarity and trust to deliver a superior user
            experience.
          </p>
          <ul className="list-decimal list-inside mt-4 space-y-2 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            <li className="flex flex-col gap-4">
              <strong className="text-blue-700">
                The Value Proposition First (The &quot;Taste&quot;)
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                The flow intentionally directs the user into a core feature
                (e.g., mood tracking: &quot;How are you feeling right now?&quot;) before
                presenting the sign-up form. This leverages the Reciprocity
                Principle in UX: by providing immediate utility, the design
                earns the right to request commitment. The user invests effort
                into an entry, justifying registration as a <span className="
                font-semibold text-blue-700">benefit to save
                progress,</span> rather than a mandatory hurdle.
              </p>
              <TransformWrapper>
                <TransformComponent>
                  <Image src={OnboardingtoAuth} alt={"FullHifi"} />
                </TransformComponent>
              </TransformWrapper>
              
            </li>
            <li className="flex flex-col gap-4">
              <strong className="text-blue-700">
                Priority on Recognition Over Recall (The Resume Feature)
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                To combat navigation friction, the home screen centers around a
                dynamic **&quot;Continue Session&quot;** card. This smart
                feature ensures that with one tap, users—whether pursuing a
                multi-day meditation course or continuing a journal entry—pick
                up exactly where they left off. Navigation is simplified to a
                clear four-tab structure: Home, Meditate, Journal, and Progress.
              </p>
            </li>
            <li className="flex flex-col gap-4">
              <strong className="text-blue-700">
                Frictionless Onboarding and Ethical Monetization
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                MindSpace introduces an optional, single-screen onboarding
                process, allowing users to explore the app immediately without
                forced questionnaires or immediate payment demands. Monetization
                is handled through a transparent, non-intrusive paywall nested
                within the settings, ensuring users build value and trust before
                being asked to subscribe.
              </p>
              
            </li>
            <li className="flex flex-col gap-4">
              <strong className="text-blue-700">
                Clarity and Progress Visualization
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                The UI employs a high-contrast visual design to maximize
                accessibility and hierarchy, ensuring clickable elements are
                clearly identifiable. Crucially, a dedicated
                <strong> &quot;Progress&quot; </strong> tab provides clear, visual feedback on
                user streaks and course completion, directly resolving the lack
                of progress awareness and promoting sustained engagement.
              </p>
              <TransformWrapper>
                <TransformComponent>
                  <Image src={EntireWireframe} alt={"FullHifi"} />
                </TransformComponent>
              </TransformWrapper>
            </li>
          </ul>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="auto"
            height="1080"
            src="https://embed.figma.com/proto/T1gjtsTnaF4AHthuB8ArUc/Project-MindSpace?page-id=0%3A1&node-id=275-812&viewport=2017%2C1357%2C0.25&scaling=scale-down&content-scaling=fixed&starting-point-node-id=275%3A812&embed-host=share"
            allowFullScreen
          ></iframe>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 mb-20">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
            Conclusion{" "}
          </h2>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            MindSpace serves as a compelling case study illustrating how focused
            user research can drive superior product design. By deliberately
            addressing the fundamental flaws of market leaders—namely clutter,
            friction, and aggressive monetization—MindSpace provides a
            conceptually more thoughtful and trustworthy path to digital
            wellness, setting a higher standard for the industry.
          </p>
        </section>
        
      </main>
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
    </div>
  );
}
