import React from "react";
import { MoveLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Inter } from "next/font/google";
import Image from "next/image";
import CoverImg from "@/lib/Mindspace/MindspaceCover.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function MindSpace() {
  return (
    <div className={inter.className}>
      <header
        className="flex items-center justify-start
                        py-4 md:py-4 px-4 md:px-8 lg:px-12 mx-8 lg:mx-28"
      >
        <Link
          href="/"
          className="font-medium text-blue-700 flex justify-center items-center gap-2 text-xs md:text-sm lg:text-lg"
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

            <div
              className="absolute left-0 bottom-0 flex flex-col gap-2 md:gap-4 items-start 
                        p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 "
            >
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
          <ul className="list-disc list-inside mt-4 space-y-2 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            <li>
              <strong className="text-blue-700">Navigation and Clutter:</strong>{" "}
              Users struggle with disorganized home screens, lack of content
              filtering, and difficulty resuming activities..
            </li>
            <li>
              <strong className="text-blue-700">Usability and Trust:</strong>{" "}
              Poor visual hierarchy, low contrast, and overly aggressive
              monetization flows erode user trust and compromise accessibility.
            </li>
            <li>
              <strong className="text-blue-700">
                Lack of Progress Awareness:
              </strong>{" "}
              Users receive insufficient feedback on their commitment, hindering
              motivation and continuity.
            </li>
          </ul>
          <p className="mt-4 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            The goal for MindSpace was to resolve these issues, demonstrating a
            full-cycle design capability focused on{" "}
            <strong className="text-blue-700">
              clarity, continuity, and user trust.
            </strong>
          </p>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 ">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
            Strategy: Designing for Seamless Continuity
          </h2>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            Research involved synthesizing these frustrations into actionable
            insights, guided by two primary personas: The Daily Reflector
            (seeking a clean, distraction-free journaling space) and The Guided
            Growth Seeker (needing trackable progress and smart navigation).
            This led to a strategy centered on eliminating points of friction:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            <li>
              <strong className="text-blue-700">Prioritize Continuity:</strong>{" "}
              Ensure users can instantly resume their wellness routine.
            </li>
            <li>
              <strong className="text-blue-700">Establish Visual Trust:</strong>{" "}
              Use high contrast and clear affordance for all interactive
              elements.
            </li>
            <li>
              <strong className="text-blue-700">Implement Ethical UX:</strong>{" "}
              Decouple monetization from core feature exploration
            </li>
          </ul>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
            The Solution: An Intuitive and Respectful Experience
          </h1>
          <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            The resulting MindSpace design is founded on key features engineered
            to directly address competitor weaknesses:
          </p>
          <ul className="list-decimal list-inside mt-4 space-y-2 text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            <li>
              <strong className="text-blue-700">
                The Intelligent Home Dashboard
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                To combat navigation friction, the home screen centers around a
                dynamic "Continue Session" card. This smart feature ensures that
                with one tap, users—whether pursuing a multi-day meditation
                course or continuing a journal entry—pick up exactly where they
                left off. Navigation is simplified to a clear four-tab
                structure: Home, Meditate, Journal, and Progress.
              </p>
            </li>
            <li>
              <strong className="text-blue-700">
                The Intelligent Home Dashboard
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                To combat navigation friction, the home screen centers around a
                dynamic "Continue Session" card. This smart feature ensures that
                with one tap, users—whether pursuing a multi-day meditation
                course or continuing a journal entry—pick up exactly where they
                left off. Navigation is simplified to a clear four-tab
                structure: Home, Meditate, Journal, and Progress.
              </p>
            </li>
            <li>
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
            <li>
              <strong className="text-blue-700">
                Clarity and Progress Visualization
              </strong>{" "}
              <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                The UI employs a high-contrast visual design to maximize
                accessibility and hierarchy, ensuring clickable elements are
                clearly identifiable. Crucially, a dedicated "Progress" tab
                provides clear, visual feedback on user streaks and course
                completion, directly resolving the lack of progress awareness
                and promoting sustained engagement.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col p-4 md:p-8 lg:p-12 mx-8 lg:mx-28 mb-20">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">
                Conclusion </h2>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700 leading-relaxed">
                MindSpace serves as a compelling case study illustrating how focused user research can drive superior product design. By deliberately addressing the fundamental flaws of market leaders—namely clutter, friction, and aggressive monetization—MindSpace provides a conceptually more thoughtful and trustworthy path to digital wellness, setting a higher standard for the industry.
            </p>
        </section>
      </main>
    </div>
  );
}
