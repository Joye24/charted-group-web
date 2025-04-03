"use client";

import { ibmPlexSerif } from "@/app/fonts";
import useEmblaCarousel from "embla-carousel-react";

export default function TeamCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "center", // ensures slides are centered
  });

  const team = [
    {
      fullName: "Funto Joye",
      title: "CEO",
      photo: "/images/funto.jpg",
    },
    {
      fullName: "John Doe",
      title: "CTO",
      photo: "https://i.pravatar.cc/1200?img=11",
    },
    {
      fullName: "Mark Jacob",
      title: "CFO",
      photo: "https://i.pravatar.cc/1200?img=12",
    },
    {
      fullName: "Martha Winsty",
      title: "Design",
      photo: "https://i.pravatar.cc/1200?img=36",
    },
  ];

  // const drivers = [{}];

  return (
    <div className="min-h-[600px]">
      <div className="duration-500 w-full text-center mb-20">
        <h1 className={`${ibmPlexSerif.className} leading-relaxed text-5xl lg:text-6xl font-thin`}>Our Team</h1>
      </div>
      <div className="block h-auto duration-500">
        <div className={`font-thin w-full select-none`}>
          {/* Embla container (overflow hidden) */}
          <div
            className="overflow-hidden relative align-center"
            ref={emblaRef}>
            {/* Embla slide wrapper (flex container) */}
            <div className="flex gap-6 md:gap-6 px-10 md:px-25">
              {team.map((slide, i) => (
                <div
                  key={i}
                  className="
                  relative            /* So we can place an overlay */
                  flex-none md:flex-auto
                  w-full
                  md:w-1/5
                  min-h-[400px]
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
                    backgroundImage: `url('${slide.photo}')`,
                  }}>
                  <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-1/2
                    bg-gradient-to-t
                    from-black/70
                    via-black/30
                    to-transparent
                    rounded-b-[50px]
                    pointer-events-none
                  "
                  />

                  {/* Your text (z-index above the overlay) */}
                  <div className="relative z-10 w-full text-center text-white font-light mb-5">
                    <div className="text-4xl mb-1">{slide.fullName}</div>
                    <div className="text-xl mb-5">{slide.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
