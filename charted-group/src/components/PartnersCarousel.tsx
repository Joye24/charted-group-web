"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function PartnersCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start", // ensures slides start at left
    slidesToScroll: 1, // how many slides to scroll per snap
  });

  useEffect(() => {
    if (!embla) return;

    const interval = setInterval(() => {
      // If user is dragging or can't scroll further, reset to first slide
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [embla]);

  const logos = [
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
    "/images/partners/imperial-hotel.png",
  ];

  // Duplicate the array so the loop transition looks seamless
  const partnerLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-gray-200 my-20 mb-60 py-5">
      <div
        className="overflow-hidden"
        ref={emblaRef}>
        <div className="flex">
          {partnerLogos.map((src, i) => (
            // Show ~8 logos at once => w-[12.5%] = 1/8
            <div
              className="
                flex-none
                w-[12.5%]
                px-2
                flex
                justify-center
                items-center
              "
              key={i}>
              <Image
                src={src}
                alt={`Partner ${i}`}
                width={100}
                height={0}
                className="
                  grayscale
                  hover:grayscale-0
                  transition
                  w-auto
                  h-[45px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
