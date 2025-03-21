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
      title: "Sprinter",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('https://storage.googleapis.com/msgsndr/WCph0efbA60We53JrxGR/media/6760b127fb63bc8dcf610f49.jpeg')",
    },
    {
      title: "S-Class",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('https://storage.googleapis.com/msgsndr/WCph0efbA60We53JrxGR/media/674dd9629edd454e9d34eff0.webp')",
    },
    {
      title: "E-Class",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('https://storage.googleapis.com/msgsndr/WCph0efbA60We53JrxGR/media/674dd98fe481a8af4e909b48.webp')",
    },
    {
      title: "V-Class",
      bgUrl:
        "linear-gradient(rgba(24, 31, 50, 0), rgba(24, 31, 50, 0.63)), url('https://storage.googleapis.com/msgsndr/WCph0efbA60We53JrxGR/media/674dd9b7aa9ab7e3a95a4cf2.webp')",
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
                rounded-[100px]
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
                  <div className="ml-10 mb-20 z-10 text-white">
                    <div className="text-5xl mb-5">{slide.title}</div>
                    <div className="text-xl flex items-center">
                      <svg
                        width="25"
                        height="18"
                        fill="none"
                        className="mr-4"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.7749 8.50028C17.0421 6.31653 15.477 2.82631 15.1487 1.09333L16.1313 0.907227C16.4639 2.66321 18.3432 6.73857 23.174 8.53152L24.4522 9.00593L23.1703 9.47037C22.2338 9.80968 20.7268 10.6093 19.3236 11.8904C17.9234 13.1687 16.6495 14.9049 16.1266 17.1154L15.1534 16.8852C15.7345 14.429 17.1439 12.5263 18.6494 11.1519C19.3835 10.4817 20.1458 9.93193 20.8569 9.50028H0V8.50028H20.7749Z"
                          fill="#fff"
                        />
                      </svg>
                      Experience The Luxury
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
