// components/CaseStudySlider.tsx
"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ITSOCover from "../../../lib/Screenshots/ITSO/CoverPhotoITSO.svg";
import Image from "next/image";

export default function CaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 0,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") instanceRef.current?.next();
      if (e.key === "ArrowLeft") instanceRef.current?.prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [instanceRef]);

  const totalSlides = instanceRef.current?.track.details.slides.length || 1;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Progress bar */}
      {loaded && (
        <div className="absolute top-0 left-0 w-full h-2 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Slider container */}
      <div ref={sliderRef} className="keen-slider h-full">
        {/* Slide 1 */}
        <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            
          </motion.div>
          <Image src={ITSOCover} alt={""}></Image>
        </div>

        {/* Slide 2 */}
        <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-teal-600 to-cyan-700">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-4">The Challenge</h2>
            <p>
              Researchers struggled with a complex, paper-heavy process that slowed
              down innovation.
            </p>
          </motion.div>
        </div>

        {/* Slide 3 */}
        <div className="keen-slider__slide flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-4">The Solution</h2>
            <p>
              A digital platform to submit, track, and manage IP efficiently—built
              with Next.js and Tailwind.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          variant="secondary"
          onClick={() => instanceRef.current?.prev()}
        >
          ← Prev
        </Button>
        <Button
          variant="secondary"
          onClick={() => instanceRef.current?.next()}
        >
          Next →
        </Button>
      </div>
    </div>
  );
}
