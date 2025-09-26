"use client";
import { MoveLeft } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

// Images
import MainImage from "@/lib/ITSO/CoverPhotoITSO.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Text
const inter = Inter({ subsets: ["latin"] });
export default function ITSO() {
  return (
    <div className={inter.className}>
      <header className="px-16 py-8 ">
        <Link
          href="/"
          className="flex justify-start gap-2 font-medium items-start"
        >
          <MoveLeft />
          Back
        </Link>
      </header>
      <main className="">
        <section className="flex flex-col px-16 py-16 md:p-20">
          <h1 className="text-center text-teal-700 font-semibold text-3xl md:text-6xl ">
            ITSO Platform – Streamlining University Innovation Support
          </h1>
          <p className="italic text-center">From emails & spreadsheets → to a centralized digital platform.</p>
          <Image src={MainImage} alt="Main Photo" height={1440} />
        </section>
        <section className="flex flex-col gap-4 px-16 lg:px-64 md:px-32 py-16">
          <h1 className="text-2xl md:text-3xl font-medium">
            Background & Context
          </h1>
          <p className="text-justify">
            The Innovation and Technology Support Office (ITSO) is a university
            unit that helps students, faculty, and researchers protect their
            intellectual property and bring new ideas to life. Its role spans
            from guiding invention disclosures to coordinating patent
            applications and providing innovation support.
          </p>
          <p className="text-justify">
            Before this project, ITSO operated entirely on manual workflows —
            forms submitted through email, records tracked in spreadsheets, and
            updates passed back-and-forth in long message threads. As the volume
            of requests grew, this system became harder to manage and left both
            researchers and administrators frustrated.
          </p>
          <p className="text-justify">
            Our team set out to build ITSO’s first dedicated digital platform
            from the ground up — a centralized system to handle submissions,
            streamline internal workflows, and give users transparency over the
            status of their requests.
          </p>
        </section>

        <section className="flex flex-col gap-4 px-16 lg:px-64 md:px-32 py-16">
          <h1 className="text-2xl md:text-3xl font-medium">The Problem</h1>
          <p className="text-justify">
            The lack of a digital system created challenges for both ITSO staff
            and the researchers they served:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-2 text-justify">
            <li>
              <span className="font-semibold">For Researchers:</span> Submitting
              disclosures or follow-up requests meant navigating unclear forms,
              waiting for responses by email, and having no way to check their
              request status.
            </li>
            <li>
              <span className="font-semibold">ITSO staff:</span> Faced unclear
              submission forms, long wait times, and no way to track request
              status.
            </li>
            <li>
              <span className="font-semibold">University:</span> Innovation
              opportunities were hindered by administrative bottlenecks that
              discouraged engagement.
            </li>
          </ul>
          <p className="text-justify">
            Instead of empowering innovators, ITSO’s processes were weighed down
            by inefficiency.
          </p>
        </section>
        <section className="flex flex-col gap-4 px-16 lg:px-64 md:px-32 py-16">
          <h1 className="text-2xl md:text-3xl font-medium">Goals</h1>
          <p className="text-justify">We defined clear objectives </p>
          <ul className="list-decimal list-inside flex flex-col gap-2 text-justify">
            <li>
              <span className="font-semibold">Centralize</span> all ITSO-related
              submissions in one platform.
            </li>
            <li>
              <span className="font-semibold">Simplify</span> the process of
              submitting invention disclosures.
            </li>
            <li>
              <span className="font-semibold">Increase transparency</span> by
              automating recordkeeping.
            </li>
            <li>
              <span className="font-semibold">Reduce admin overhead</span> by
              automating recordkeeping.
            </li>
            <li>
              <span className="font-semibold">Lay a foundation</span> for future
              growth, including system integrations and analytics.
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4 px-16 lg:px-64 md:px-32 py-16">
          <h1 className="text-2xl md:text-3xl font-medium">Process</h1>
          <ul className="list-none flex flex-col gap-8 text-justify">
            <li className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Research & Discovery</h1>
              <p className="text-justify">
                We began by mapping ITSO’s existing workflow. Stakeholder
                interviews with staff revealed pain points around tracking, lost
                submissions, and difficulty managing large volumes of data. We
                also studied how researchers engaged with ITSO, highlighting
                their frustration with slow communication and lack of
                visibility.
              </p>
            </li>
            <li className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Defining the User Flow</h1>
              <p className="text-justify">
                We outlined two main roles: researchers (submission side) and
                ITSO staff (review side). This dual perspective informed early
                flowcharts, which helped us identify bottlenecks before moving
                into design.
              </p>
            </li>
            <li className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">
                Wireframing & Prototyping
              </h1>
              <p className="text-justify">
                Low-fidelity wireframes captured the structure: submission
                forms, dashboards, and an admin queue. Once validated with
                peers, we moved to high-fidelity prototypes, applying the
                university’s branding to simulate a real product.
              </p>
            </li>
            <li className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Collaboration</h1>
              <p className="text-justify">
                The project was developed collaboratively with designers and
                developers. I worked on the UX architecture, designed the UI
                components, and ensured consistency across researcher and staff
                interfaces.
              </p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4 px-16 lg:px-64 md:px-32 py-16">
          <h1 className="text-2xl md:text-3xl font-medium">The Solution</h1>
          <p className="text-justify">The final platform featured:</p>
          <ul className="list-disc list-inside flex flex-col gap-2 text-justify">
            <li>
              <span className="font-semibold">Guided submission forms:</span>{" "}
              Simplified entry for disclosures and requests.
            </li>
            <li>
              <span className="font-semibold">Status tracking:</span>{" "}
              Researchers could log in and instantly see updates.
            </li>
            <li>
              <span className="font-semibold">Admin dashboard:</span> Staff
              processed requests through structured queues instead of
              spreadsheets.
            </li>
            <li>
              <span className="font-semibold">Role-based access:</span>{" "}
              Researchers and staff saw only the tools relevant to them,
              minimizing confusion.
            </li>
          </ul>
          <p className="text-justify">
            The design balanced academic branding with usability, borrowing the
            university logo and color scheme for realism (while remaining
            conceptual).
          </p>
        </section>
        <section className="flex flex-col gap-4 px-16 lg:px-64 md:px-32 py-16">
          <h1 className="text-2xl md:text-3xl font-medium">Results</h1>
          <p className="text-justify">
            The ITSO platform transformed a fragmented process into a
            centralized workflow. Key outcomes included:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-2 text-justify">
            <li>
              <span className="font-semibold">Faster submissions:</span>{" "}
              Multiple email steps condensed into one streamlined form.
            </li>
            <li>
              <span className="font-semibold">Greater transparency:</span>{" "}
              Real-time status updates reduced uncertainty.
            </li>
            <li>
              <span className="font-semibold">Improved staff efficiency:</span>{" "}
              Queue-based processing replaced scattered spreadsheets.
            </li>
            <li>
              <span className="font-semibold">Scalable foundation:</span> Set
              the stage for future features like patent tracking and analytics.
            </li>
          </ul>
          <p className="text-justify">
            While formal metrics weren’t collected, feedback indicated reduced
            back-and-forth communication and fewer missed requests.
          </p>
        </section>
      </main>
      <footer className="mx-auto max-w-6xl px-6 flex items-center justify-between py-10">
        
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} ITSO Case Study — Designed with Next.js
            & Tailwind.
          </p>
          <Button
            variant="ghost"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </Button>
 
      </footer>
    </div>
  );
}
