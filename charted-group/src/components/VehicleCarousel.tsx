"use client";

import { ibmPlexSerif } from "@/app/fonts";
import useEmblaCarousel from "embla-carousel-react";
import { FadeUpOnScroll } from "./FadeUpOnScroll";

export default function VehicleCarousel() {
  // Embla config: loop infinitely, center slides, partial slides
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "center", // ensures slides are centered
    // You can tweak other settings if needed
  });

  // Slide data. You could store these in an array, map over them, etc.
  const slides = [
    {
      title: "V-Class",
      bgUrl: "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/v-class.jpeg')",
    },
    {
      title: "S-Class",
      bgUrl: "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/s-class.jpeg')",
    },
    {
      title: "E-Class",
      bgUrl: "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/e-class.jpeg')",
    },
  ];

  return (
    <div className="min-h-[600px]">
      <FadeUpOnScroll className="block h-auto duration-500">
        <div className={`${ibmPlexSerif.className} font-thin w-full select-none`}>
          {/* Embla container (overflow hidden) */}
          <div
            className="overflow-hidden relative"
            ref={emblaRef}>
            {/* Embla slide wrapper (flex container) */}
            <div className="flex gap-6 md:gap-6 px-10 md:px-25">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  // Each slide is flex-none so Embla can measure it,
                  // min-w-[80%] = partial slides on smaller screens
                  // md:w-1/4 = four across on desktop
                  className="
                flex-none
                w-full
                md:w-1/3
                h-[467px]
                snap-center
                flex
                items-end
                justify-start
                rounded-[50px]
                transition-all
                duration-300
                ease-in-out
                cursor-pointer
                bg-no-repeat
                bg-cover
                bg-center
                mb-[15px]
              "
                  style={{
                    backgroundImage: slide.bgUrl,
                  }}>
                  <div className="ml-10 mb-10 z-10 text-white">
                    <div className="text-5xl mb-5 text-center">{slide.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll className="block h-auto duration-500 px-10 md:px-25">
        <div className={`${ibmPlexSerif.className} flex mt-10 mb-10`}>
          <h2 className="text-5xl lg:text-8xl font-thin mb-4">Capacity</h2>
        </div>
      </FadeUpOnScroll>
    </div>
  );
}
