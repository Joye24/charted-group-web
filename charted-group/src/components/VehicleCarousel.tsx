"use client";

import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";
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
                flex-none md:flex-auto
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
      <FadeUpOnScroll className="block h-auto duration-500 my-60 py-30 px-10 md:px-25 bg-gradient-to-r from-gray-200 to-gray-500 text-slate-950 rounded-full">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className={`${ibmPlexSerif.className} flex flex-col w-full md:w-1/2 align-middle justify-center`}>
            <h2 className="text-5xl lg:text-8xl font-light mb-8 md:mb-15">Capacity</h2>
            <p className="text-2xl lg:text-3xl font-light mb-5">
              Mercedes MPV vehicles seat up to six passengers, when all seats are in use. Alternatively the seats can also be turned into a conference seating
              position at the clients request. The boot offers good luggage space.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <FadeUpOnScroll className="block h-auto duration-2000">
              <Image
                src="/images/capacity.png"
                alt="Capacity"
                className="w-full backdrop-opacity-100"
                width={605}
                height={0}
              />
            </FadeUpOnScroll>
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  );
}
