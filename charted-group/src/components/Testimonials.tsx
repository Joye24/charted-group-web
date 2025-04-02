"use client";

import { ibmPlexSerif } from "@/app/fonts";
import { FadeUpOnScroll } from "./FadeUpOnScroll";
import useEmblaCarousel from "embla-carousel-react";
import { StarRating } from "./StarRating";
import testimonials from "../data/testimonials.json";

/**
 * Example usage with multiple sections
 */
export default function Testimonials() {
  // Embla config: loop infinitely, center slides, partial slides
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "center", // ensures slides are centered
    // You can tweak other settings if needed
  });

  return (
    <div className="min-h-[700px] mt-15">
      <FadeUpOnScroll className="block h-auto duration-500">
        <h1
          className={`${ibmPlexSerif.className} 
        flex text-center font-light justify-center mx-5 text-3xl lg:text-6xl lg:mb-10`}>
          What Our Clients Think of Our Service
        </h1>
        <div className="font-thin w-full select-none">
          <div
            className="overflow-hidden relative"
            ref={emblaRef}>
            {/* Embla slide wrapper (flex container) */}
            <div className="flex gap-6 md:gap-6 px-2 mr-10 md:px-25">
              {testimonials.map((slide, i) => (
                <div
                  key={i}
                  // Each slide is flex-none so Embla can measure it,
                  // min-w-[80%] = partial slides on smaller screens
                  // md:w-1/3 = three across on desktop
                  className="
                  flex-none
                  w-full
                  md:w-1/3
                  snap-center
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  ease-in-out
                  cursor-pointer
                  my-5 lg:my-10
                ">
                  <div className="ml-5 mb-20 z-10 text-white">
                    <div className={`${ibmPlexSerif.className} text-2xl lg:text-4xl mb-5`}>{slide.title}</div>
                    <div className="text-xl flex items-center">{slide.message}</div>
                    <div className="mt-2 font-medium">- {slide.name}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <StarRating rating={slide.rating} />
                      <span className="text-sm text-white">{slide.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  );
}
