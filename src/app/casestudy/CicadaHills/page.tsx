"user client";
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
export default function CicadaHills () {
  return (
    <div className={`min-h-screen ${inter.variable} font-sans py-16`}>
      <section className="min-h-screen w-full flex-col gap-12 items-center justify-center my-20 px-32">
        <div className="flex-1">
          <Image
            className="h-full w-full object-cover"
            src={Cover}
            alt="Cicada Hills project screenshot"
          />
        </div>
        <div className="flex flex-row gap-4 py-24">
          <div className="flex-1/5 items-center ">
            <div className="text-center">
              <Avatar className="h-20 w-20 place-self-center">
                <AvatarImage src={Profile.src} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ul className="py-8 px-16 text-wrap space-y-2 text-lg">
                <li>
                  <strong className="text-teal-700">Role:</strong> UI/UX
                  Designer
                </li>
                <li>
                  <strong className="text-teal-700">Responsibilities:</strong>{" "}
                  Research, booking flow design, responsive website, admin
                  dashboard, rebranding
                </li>
                <li>
                  <strong className="text-teal-700">Approach:</strong> Design
                  Thinking
                </li>
                <li>
                  <strong className="text-teal-700">Outcome:</strong> Responsive
                  website with 3-step booking, integrated payments, and a
                  lightweight staff dashboard.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1/2 px-16">
            <span className=" items-center justify-center rounded-full  text-teal-700 text-8xl py-1 ">
              01{" "}
            </span>
            <h1 className="font-semibold text-4xl text-teal-700 my-2">
              Project Overview & Challenge
            </h1>
            <p className="text-lg my-4 Leading-7">
              Cicada Hills, a training center and event venue, relied heavily on
              Facebook Messenger to manage bookings, payments, and client
              communications. While functional at first, this approach became
              inefficient as demand grew. Customers faced long back-and-forth
              conversations to reserve dates, payments were confirmed via
              screenshots, and staff lacked tools to track bookings or issue
              refunds.
            </p>
            <div className="flex flex-row gap-2 justify-start">
              <Badge className="bg-teal-700 rounded-full py-1 px-3 text-sm font-semibold border-none">
                Figma
              </Badge>
              <Badge className="bg-teal-100 text-teal-700 rounded-full py-1 px-3 text-sm font-semibold border-none">
                Google Meet
              </Badge>
              <Badge className="bg-teal-100 text-teal-700 rounded-full py-1 px-3 text-sm font-semibold border-none">
                Figjam
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-32 text-lg">
        <div className="px-16">
          <span className=" items-center justify-center rounded-full  text-teal-700 text-8xl py-1 ">
            02{" "}
          </span>
          <h1 className="font-semibold text-4xl text-teal-700 my-2">
            Research & Insights
          </h1>
          <p className="text-lg my-4 Leading-7 mb-4">
            To design a solution, I analyzed both customers and staff needs
            through interviews and process reviews.
          </p>
        </div>
        <div className="flex flex-row gap-16 px-16">
          <div className="flex-1/2 flex-col space-y-2 ">
            <h1 className="font-semibold text-lg">User Groups</h1>
            <ul>
              <li className="mb-4">
                <strong>Event Planners:</strong> Organizations arranging
                training sessions and corporate events.
              </li>
              <li>
                <strong>Private Clients:</strong> Couples, families, and
                individuals booking weddings, parties, or personal gatherings.
              </li>
            </ul>
          </div>
          <div className="flex-1/2 flex-col space-y-2">
            <h1 className="font-semibold text-lg">Key Pain Points</h1>
            <ul>
              <li className="mb-4">Limited online presence beyond Facebook.</li>
              <li className="mb-4">
                Booking required lengthy Messenger conversations.
              </li>
              <li className="mb-4">
                Payment confirmations handled through manual screenshots.
              </li>
              <li>
                No centralized tool for staff to manage clients or refunds.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-24 bg-teal-700 text-white">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-semibold text-4xl  my-2 ">Problem Statement</h1>
          <p className="italic">
            How might we create a seamless booking experience for customers
            while reducing the operational burden on staff?
          </p>
        </div>
      </section>
      <section className="px-32 py-24 text-lg">
        <div className="px-16 text-4xl text-teal-700 font-semibold my-8 text-center">
          User Personas
        </div>
        <div className="px-16 flex flex-row gap-8">
          <Card className="flex-1/2">
            <CardHeader>
              <Image src={Corporate} alt="" />
              <CardDescription className="p-4 text-lg">
                <h1 className="font-bold mb-4">Name: Kim Montegrande, 34</h1>
                <p className="mb-4">
                  <strong>Role:</strong> HR Officer at a local agricultural
                  trading company
                </p>
                <strong>Goals:</strong>
                <ul className="mb-4 italic">
                  <li className="mb-4">
                    “I just want to see which dates are open right away so I can
                    finalize our training schedule.”
                  </li>
                  <li className="mb-4">
                    “Getting a proper invoice instantly would make it easier to
                    process through our accounting.”
                  </li>
                </ul>
                <strong className="mb-2">Frustrations:</strong>
                <ul className="italic">
                  <li className="mb-4">
                    “Messenger bookings take too long, especially when I’m
                    coordinating several employees.”
                  </li>
                  <li className="mb-4">
                    “Sometimes replies are delayed, and it holds up the whole
                    training plan.”
                  </li>
                </ul>

                <strong className="mb-2">Needs:</strong>
                <p className="mb-4">
                  A professional, self-service booking system with instant
                  confirmation, date availability, and downloadable receipts.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex-1/2">
            <CardHeader>
              <Image src={Person} alt="" />
              <CardDescription className="p-4 text-lg">
                <h1 className="font-bold mb-4">Name: Miguel Santos, 29</h1>
                <p className="mb-4">
                  <strong>Occupation</strong> IT Support Specialist at a local
                  university
                </p>
                <strong>Goals:</strong>
                <ul className="mb-4 italic">
                  <li className="mb-4">
                    “My main priority is to lock in the wedding date without
                    worrying.”
                  </li>
                  <li className="mb-4">
                    “I’d feel more confident if I received an official receipt
                    right after paying.”
                  </li>
                </ul>
                <strong className="mb-2">Frustrations:</strong>
                <ul className="italic">
                  <li className="mb-4">
                    “Bank transfer screenshots don’t feel reliable… I keep
                    wondering if they saw it.”
                  </li>
                  <li className="mb-4">
                    “Not knowing immediately if my date is secured is really
                    stressful.”
                  </li>
                </ul>
                <strong className="mb-2">Needs:</strong>
                <p className="mb-4">
                  A smooth payment process with transparent pricing and
                  immediate booking confirmation.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex-1/2">
            <CardHeader>
              <Image src={Team} alt="" />
              <CardDescription className="p-4 text-lg">
                <h1 className="font-bold mb-4">Name: James Reyes, 26</h1>
                <p className="mb-4">
                  <strong>Occupation</strong> Front desk staff at Cicada Hills
                  Training Center
                </p>
                <strong>Goals:</strong>
                <ul className="mb-4 italic">
                  <li className="mb-4">
                    “I want all bookings in one place instead of digging through
                    Messenger.”
                  </li>
                  <li className="mb-4">
                    “Refunds should be quick and easy, not a manual
                    back-and-forth.”
                  </li>
                </ul>
                <strong className="mb-2">Frustrations:</strong>
                <ul className="italic">
                  <li className="mb-4">
                    “I waste so much time scrolling through long chat threads to
                    double-check details.”
                  </li>
                  <li className="mb-4">
                    “It’s confusing to match payments with screenshots —
                    mistakes can easily happen.”
                  </li>
                </ul>
                <strong className="mb-2">Needs:</strong>
                <p className="mb-4">
                  A clear, centralized dashboard with client details, booking
                  history, and refund functionality.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <section className="px-32 py-24 text-lg">
        <div className="flex flex-col gap-4 text-end">
          <span className=" items-center justify-center rounded-full  text-teal-700 text-8xl py-1 ">
            03{" "}
          </span>
          <h1 className="font-semibold text-4xl  my-2 ">
            Wireframing & Concept Development
          </h1>
          <p className="italic">
            Initial sketches and low-fidelity wireframes explored three primary
            areas:
          </p>
        </div>
        <div className="flex flex-row gap-8 my-8">
          <Card className="flex-1/2"></Card>
          <Card className="flex-1/2"></Card>
        </div>
      </section>
      <section className="px-32 py-24 text-lg">
        <div className="flex flex-col gap-4 text-start">
          <span className=" items-center justify-center rounded-full  text-teal-700 text-8xl py-1 ">
            04{" "}
          </span>
          <h1 className="font-semibold text-4xl  my-2">
            Prototyping & Iteration
          </h1>

          <h1 className="font-semibold text-2xl my-2 ">Visual Direction</h1>
          <p className="font-semibold">Colors:</p>
          <Card className="flex-1/2"><Image className="h-full w-full object-cover" src={DesignSystem} alt={""}/></Card>
        </div>
        <div className="flex flex-row gap-8 my-8">
          <Card className="flex-1/2"></Card>
          <Card className="flex-1/2"></Card>
        </div>
      </section>
    </div>
  );
}
