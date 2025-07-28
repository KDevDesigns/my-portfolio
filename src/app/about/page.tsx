import Image from "next/image";
import PersonalProfile from "@/lib/Images/ProfileCard.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-16">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-pretty">
            Take a Step Into My Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Let me show you the skills and work I’ve developed so far. Let’s explore how I can bring value to your team.
          </p>
        </div>
      </section>

      {/* About Section with Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-pretty mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed">
            Hi, I’m Kevin Kurt Intong — a recent BSIT graduate from the University of the Immaculate Conception, with a specialization in healthcare technology.

I’m passionate about designing clean, functional, and meaningful digital experiences that put users first. With a strong foundation in IT and a focus on solving real problems in the healthcare space, I approach every project with clarity, empathy, and purpose.

Whether through freelance collaborations or academic work, I strive to create intuitive solutions that reduce complexity, streamline user journeys, and drive real impact through thoughtful, human-centered design.

With hands-on frontend development skills, I bridge the gap between design and code—making it easy to collaborate with developers and ensure my designs are implemented efficiently and as intended.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full max-w-sm mx-auto">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={PersonalProfile}
              alt="About Me Image"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </AspectRatio>
        </div>
      </section>
    </div>
  );
}
