"use client";

import Image from "next/image";
import Cover from "../../../lib/Cicada Hills/CoverCicadaHills.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Inter } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import Corporate from "../../../lib/Cicada Hills/Persona/CorporateClient.jpg";
import Person from "../../../lib/Cicada Hills/Persona/Person.jpg";
import Team from "../../../lib/Cicada Hills/Persona/Team.jpg";
import Profile from "../../../lib/Images/Profile.png";
import DesignSystem from "../../../lib/Cicada Hills/Design System/DesignSystem.svg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function CicadaHills() {
  return (
    <div className={`min-h-screen ${inter.variable} font-sans py-12 sm:py-16`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero / Cover + Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 lg:mt-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <Image
                src={Cover}
                alt="Cicada Hills project screenshot"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                <AvatarImage src={Profile.src} alt="Profile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Kevin — UI/UX Designer
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-xs">
                  Design is not decoration — it’s acceleration. I ship systems that
                  help people find answers quickly.
                </p>
              </div>
            </div>

            <ul className="text-sm sm:text-base space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-teal-700">Role:</span> UI/UX
                Designer
              </li>
              <li>
                <span className="font-semibold text-teal-700">
                  Responsibilities:
                </span>{" "}
                Research, booking flow, responsive website, admin dashboard,
                rebranding
              </li>
              <li>
                <span className="font-semibold text-teal-700">Approach:</span>{" "}
                Design Thinking
              </li>
              <li>
                <span className="font-semibold text-teal-700">Outcome:</span>{" "}
                3-step booking, integrated payments, lightweight staff dashboard
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-teal-700 text-white rounded-full py-1 px-3 text-sm font-semibold border-none">
                Figma
              </Badge>
              <Badge className="bg-teal-100 text-teal-700 rounded-full py-1 px-3 text-sm font-semibold border-none">
                Google Meet
              </Badge>
              <Badge className="bg-teal-100 text-teal-700 rounded-full py-1 px-3 text-sm font-semibold border-none">
                FigJam
              </Badge>
            </div>
          </aside>
        </section>

        {/* Overview & Research */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 flex items-start">
            <div className="text-teal-700 text-6xl sm:text-7xl font-bold">01</div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700">
              Project Overview & Challenge
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              Cicada Hills relied on Facebook Messenger for bookings and payments.
              As demand grew the flow became inefficient — long back-and-forths,
              manual payment confirmations, and no staff tooling to manage bookings
              or refunds.
            </p>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">User Groups</h4>
            <ul className="text-gray-700 space-y-3">
              <li>
                <strong>Event Planners:</strong> Organizations arranging training
                sessions and corporate events.
              </li>
              <li>
                <strong>Private Clients:</strong> Couples, families, and
                individuals booking events.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Key Pain Points</h4>
            <ul className="text-gray-700 space-y-3">
              <li>Limited presence beyond Facebook.</li>
              <li>Lengthy Messenger bookings that block staff time.</li>
              <li>Manual payment confirmations via screenshots.</li>
              <li>No centralized tool for staff management or refunds.</li>
            </ul>
          </div>
        </section>

        {/* Problem statement */}
        <section className="mt-12 py-10 rounded-lg bg-teal-700 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Problem Statement</h3>
          <p className="mt-3 italic max-w-3xl mx-auto">
            How might we create a seamless booking experience for customers while
            reducing the operational burden on staff?
          </p>
        </section>

        {/* Personas */}
        <section className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700">
              User Personas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <Image
                  src={Corporate}
                  alt="Corporate"
                  className="w-full h-48 object-cover"
                />
                <CardDescription className="p-4 text-sm sm:text-base">
                  <h4 className="font-bold mb-2">Kim Montegrande, 34</h4>
                  <p className="mb-2">
                    <strong>Role:</strong> HR Officer
                  </p>
                  <div className="italic text-sm space-y-2">
                    <p>
                      “I want to see available dates quickly and get an invoice
                      for accounting.”
                    </p>
                    <p>
                      Needs: self-service booking, instant confirmation,
                      downloadable receipts.
                    </p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <Image
                  src={Person}
                  alt="Person"
                  className="w-full h-48 object-cover"
                />
                <CardDescription className="p-4 text-sm sm:text-base">
                  <h4 className="font-bold mb-2">Miguel Santos, 29</h4>
                  <p className="mb-2">
                    <strong>Occupation:</strong> IT Support
                  </p>
                  <div className="italic text-sm space-y-2">
                    <p>
                      “I need to lock in the date and get an official receipt
                      immediately.”
                    </p>
                    <p>Needs: smooth payment flow and transparent pricing.</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <Image
                  src={Team}
                  alt="Team"
                  className="w-full h-48 object-cover"
                />
                <CardDescription className="p-4 text-sm sm:text-base">
                  <h4 className="font-bold mb-2">James Reyes, 26</h4>
                  <p className="mb-2">
                    <strong>Occupation:</strong> Front desk staff
                  </p>
                  <div className="italic text-sm space-y-2">
                    <p>
                      “I want all bookings in one place instead of searching
                      Messenger.”
                    </p>
                    <p>
                      Needs: centralized dashboard, booking history, refund
                      handling.
                    </p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Wireframes & Prototyping */}
        <section className="mt-12 grid grid-cols-1 gap-8">
          <div className="flex items-center gap-4">
            <div className="text-teal-700 text-6xl sm:text-7xl font-bold">03</div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700">
                Wireframing & Concept
              </h3>
              <p className="mt-2 text-gray-700">
                Low-fidelity wireframes explored the booking flow and admin tasks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-48" />
            <Card className="h-48" />
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-8">
          <div className="flex items-center gap-4">
            <div className="text-teal-700 text-6xl sm:text-7xl font-bold">04</div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700">
                Prototyping & Visual Direction
              </h3>
              <p className="mt-2 text-gray-700">
                Color system and components used across the site.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden">
            <Image
              src={DesignSystem}
              alt="Design system"
              className="w-full h-auto object-cover"
            />
          </Card>
        </section>
      </main>
    </div>
  );
}
