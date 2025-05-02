"use client";

import { ibmPlexSerif } from "@/app/fonts";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FadeUpOnScroll } from "./FadeUpOnScroll";
import { useCountry } from "@/app/context/CountryContext";

export default function VehicleCarousel() {
  // Embla config: loop infinitely, center slides, partial slides
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "center", // ensures slides are centered
    slidesToScroll: 1,
  });

  // Slide data. You could store these in an array, map over them, etc.
  const slides = [
    {
      title: "V-Class",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/vehicles/v-class.jpg')",
      countries: ["IE", "GB", "ES"],
    },
    {
      title: "S-Class",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/vehicles/s-class.jpg')",
      countries: ["IE", "GB", "ES"],
    },
    // {
    //   title: "E-Class",
    //   bgUrl:
    //     "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/vehicles/e-class.jpg')",
    // },
    {
      title: "EQS",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/vehicles/eqs.jpg')",
      countries: ["IE", "GB", "ES"],
    },
    {
      title: "Toyota LC Prado",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/vehicles/toyota-lc-prado.jpg')",
      countries: ["NG"],
    },
    {
      title: "GAC GS4",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('/images/vehicles/gac-gs4.jpg')",
      countries: ["NG"],
    },
  ];

  const { country } = useCountry();
  const filteredSlides = slides.filter((slide) =>
    slide.countries.includes(country.code)
  );

  return (
    <div className="min-h-[600px]">
      <FadeUpOnScroll className="block h-auto duration-500">
        <div
          className={`${ibmPlexSerif.className} font-thin w-full select-none`}>
          <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex gap-6 md:gap-6 px-10 md:px-25">
              {filteredSlides.map((slide, i) => (
                <div
                  key={i}
                  // Each slide is flex-none so Embla can measure it,
                  // min-w-[80%] = partial slides on smaller screens
                  // md:w-1/4 = four across on desktop
                  className="
                flex-none w-[90%] md:w-1/3
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
                    <div className="text-5xl mb-5 text-center">
                      {slide.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll className="block h-auto duration-500 my-60 py-30 px-10 md:px-25 bg-gradient-to-r from-gray-200 to-gray-500 text-slate-950 lg:rounded-full">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div
            className={`${ibmPlexSerif.className} flex flex-col w-full md:w-1/2 align-middle justify-center`}>
            <h2 className="text-5xl lg:text-8xl font-light mb-8 md:mb-15">
              Capacity
            </h2>
            <p className="text-2xl lg:text-3xl font-light mb-5">
              {country.vehicleDescription}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <FadeUpOnScroll className="block h-auto duration-2000">
              <Image
                src={country.capacityImage}
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
