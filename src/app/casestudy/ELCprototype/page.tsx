import Image from "next/image";
import ITSOCover from "../../../lib/Screenshots/ITSO/CoverPhotoITSO.svg";
import { Badge } from "@/components/ui/badge";

// === Hero Variants === //

// Option 1: Full-Bleed Hero (refined)
function HeroFullBleed() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      <Image
        src={ITSOCover}
        alt="ITSO Cover"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
        <Badge className="mb-4 text-sm md:text-base">Case Study</Badge>
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Intellectual Property Submission Portal
        </h1>
        <p className="text-lg md:text-2xl opacity-90">
          For UIC Faculty Researchers & Students
        </p>
      </div>
    </section>
  );
}

// Option 2: Centered Minimal Hero
function HeroCenteredMinimal() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-24 px-6 text-center">
      <Badge className="mb-4 text-sm md:text-base">Case Study</Badge>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Intellectual Property Submission Portal
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto">
        For UIC Faculty Researchers & Students
      </p>
    </section>
  );
}

// Option 3: Split Layout Hero
function HeroSplitLayout() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <Badge className="mb-4 text-sm md:text-base">Case Study</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Intellectual Property Submission Portal
          </h1>
          <p className="text-lg md:text-2xl text-gray-700">
            For UIC Faculty Researchers & Students
          </p>
        </div>
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <Image
            src={ITSOCover}
            alt="ITSO Cover Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

// === Hero Switcher === //
export function HeroSwitcher({ variant = "minimal" }) {
  if (variant === "full") return <HeroFullBleed />;
  if (variant === "split") return <HeroSplitLayout />;
  return <HeroCenteredMinimal />; // default
}

// === Example ITSO Page (with switchable hero) === //
export default function ITSO() {
  return (
    <>
      {/* Change the variant here: "full" | "minimal" | "split" */}
      <HeroSwitcher variant="minimal" />

      {/* Other ITSO sections follow here... */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <h1 className="text-center text-3xl font-medium mb-12">Project Brief</h1>
        {/* ...rest of your ITSO content... */}
      </section>
    </>
  );
}
