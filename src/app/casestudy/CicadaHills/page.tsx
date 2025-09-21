"user-client";
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


const inter = Inter({ subsets: ["latin"] });

export default function CicadaHills({}) {
  return (
    <main className={inter.className}>
      <section className="lg:mx-32 md:mx-24 sm:mx-16 mx-auto overflow-hidden">
        <div className="py-32 p-16">
          <h1 className="text-4xl lg:text-6xl my-4 font-semibold text-center text-teal-700">
            <span className="text-black font-bold">Case Study:</span> From
            Messenger Chaos to Seamless Booking at Cicada Hills
          </h1>
          <p className="text-center lg:text-2xl md:text-xl text-xl">
            From Messenger Chaos to Seamless Booking at Cicada Hills
          </p>
        </div>
        <div className="py-0 lg:py-32">
          <Image className="mx-auto h-auto" src={Main} alt={""} />
        </div>
        <div className="flex flex-col lg:flex-row p-16 lg:px-32 gap-12">
          <div className="flex-1/2">
            <h1 className="text-3xl text-teal-700 font-medium py-2">
              The Challenge
            </h1>
            <p className="text-justify my-4">
              Couples dreaming of weddings, companies planning retreats, and
              families celebrating milestones all loved the serene beauty of
              Cicada Hills in Davao City. But booking the venue? That was a
              different story. Everything ran through Facebook Messenger and
              phone calls. One missed notification could mean a lost client.
              Guests often messaged three times just to confirm one date.
              Information was scattered, double-bookings were a constant risk,
              and the owner spent more time juggling chats than running her
              venue.
            </p>
          </div>
          <div className="flex-1/2">
            <h1 className="text-3xl text-teal-700 font-medium py-2">
              The Spark
            </h1>
            <p className="text-justify my-4">
              The owner asked for a professional website. My challenge: design
              an experience so simple that even the least tech-savvy guest could
              book with confidence. The solution? A stepper booking system—a
              guided, step-by-step flow that removes friction and builds trust
              at every click.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-16 lg:flex-row md:flex-row mx-auto py-8 px-16">
          <div className="text-center grow">
            <h1 className="text-xl lg:text-2xl font-medium">Timeframe</h1>
            <p className="text-lg">6 weeks</p>
          </div>
          <div className="text-center grow">
            <h1 className="text-xl lg:text-2xl font-medium">My Role</h1>
            <p className="text-lg">UI/UX Designer</p>
          </div>
          <div className="text-center grow">
            <h1 className="text-xl lg:text-2xl font-medium">Tools</h1>
            <p className="text-lg">Figma</p>
          </div>
        </div>
        <div className="p-16 lg:px-32">
          <Separator className="my-6 border-1" />
          <h1 className="text-3xl font-medium my-16 text-center bg-teal-700 text-white p-16">
            The Design Journey
          </h1>
          <h1 className="text-3xl font-medium my-4 text-teal-700">
            Understanding the Users
          </h1>
          <p className="text-justify">
            My research drew from two sources: direct interviews with the owner
            and one staff member, and collected client feedback from reviews and
            comments about their booking experiences. While I first assumed cost
            would be the primary concern, the findings revealed something
            different: convenience and trust dominated customer priorities.
            Clients were willing to pay for a premium venue—they simply wanted
            assurance that their reservations were secure and the process
            transparent. The manual approach left them uncertain, anxious, and
            often frustrated.
          </p>
          <h1 className="text-center my-6 text-2xl font-medium py-16">
            Pain Points
          </h1>
          <div className="flex flex-col lg:flex-row gap-12 ">
            <div className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Unclear availability
              </h1>
              <p className="text-center">
                Users couldn’t tell if dates were actually free.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Slow confirmations
              </h1>
              <p className="text-center">
                Waiting hours—or days—for replies felt endless.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Confusing process
              </h1>
              <p className="text-center ">Each inquiry started from scratch.</p>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-center text-lg font-semibold text-teal-700">
                Lack of trust
              </h1>
              <p className="text-center ">
                Without proof of booking, users doubted they were secure.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium py-16 text-teal-700">
              Personas
            </h1>
            <Image src={ImagePlaceholder} alt={""} />
          </div>
          <Separator className="my-1 border-1" />
        </div>

        <div className="p-16 lg:px-32">
          <h1 className="text-3xl font-medium text-teal-700 text-center my-4">
            From User Flow to UI
          </h1>
          <p className="text-center px-2 lg:px-32 md:px-16 sm:px-16">
            The design process began with user flows, mapping the entire booking
            journey. Three iterations were created and refined based on comments
            from the owner and staff. Each cycle improved clarity, reduced
            friction, and aligned with client feedback from reviews.
          </p>
          <div className="py-16">
            <p className="py-8">User Flow</p>
            <Image src={ImagePlaceholder} alt={""} />
            <p className="py-8">
              Wireframes initially tested a four-step process:
            </p>
            <Image src={Wireframes} alt={""} />
          </div>

          
          <p className="text-center p-2 lg:p-32 md:p-16 sm:p-16 ">
            Across three wireframe iterations, the design was refined to create
            a smoother booking flow that clearly showcased Cicada Hills’
            services and packages. The focus was on eliminating uncertainty and
            building trust by addressing the common fear of <a className="text-teal-700 font-semibold after:content-['_↗']"href="...">Hidden Charges</a> This
            process culminated in high-fidelity wireframes with a five-step
            flow, which captured all essential details, reinforced transparency,
            and enhanced user confidence. These refinements also laid the
            groundwork for a straightforward MVP showcase of the admin
            dashboard.
          </p>
          <Separator className="my-6 border-1" />
          <h1 className="text-3xl font-medium text-teal-700">
            Hi-Fi Wireframes
          </h1>
          <p>
            Integrated feedback from peers who emphasized making the Check
            Availability button always visible.
          </p>
          <div className="py-12 flex flex-col gap-8 md:flex-row md:justify-center md:items-center">
            <div className="w-full md:w-1/2">
            <Image src={PrototypeStep1} alt={""} className="max-w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2">
            <Image src={PrototypeStep2} alt={""} className="max-w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center">
            <div className="w-full md:w-1/2">
            <Image src={PrototypeStep3} alt={""} className="max-w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2">
            <Image src={PrototypeStep4} alt={""} className="max-w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-16"><div className="w-full md:w-1/2">
            <Image src={PrototypeStep5} alt={""} className="max-w-full h-auto" />
            </div></div>
          <Separator className="my-6 border-1" />
        </div>
      </section>
    </main>
  );
}
