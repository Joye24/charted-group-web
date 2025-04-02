// app/page.tsx
"use client";

import { FadeUpOnScroll } from "@/components/FadeUpOnScroll";
import { ibmPlexSerif } from "../fonts";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-slate-950 relative">
      <main
        className="h-[700px] lg:h-[1100px] md:min-h-screen
        mx-auto
        pt-[60px] 
        px-5 md:px-20 lg:px-[60px]
        pb-0
        bg-fixed
        relative
        z-[2]"
        style={{
          background: "url('/images/services-bg.jpg') center 50% / cover no-repeat",
        }}>
        <div className="absolute inset-0 bg-slate-950/50 w-full h-full" />
        <div
          className="
          flex
          sticky
          top-[100px]
          min-w-full
          text-center
        "
          style={{
            zIndex: 1,
          }}>
          <div className={`${ibmPlexSerif.className} w-full`}>
            <h1 className="text-white text-5xl md:text-7xl leading-tight mb-4 font-light text-center pt-[5vh] pb-[50vh]">Our Services</h1>
          </div>
        </div>
        <div>
          <svg className="absolute w-0 h-0">
            <clipPath
              id="my-clip-path"
              clipPathUnits="objectBoundingBox">
              <path d="M0,0 C0,0.485,0.06,0.878,0.5,0.878 C0.94,0.878,1,0.485,1,0 V1 H0 V0" />
            </clipPath>
          </svg>
          <div
            className="
            bg-slate-950
             w-full 
              h-[25vh] lg:h-[71vh]
              object-contain 
              object-bottom 
              absolute 
              left-0 
              bottom-[-2px] 
              z-[0]
                    "
            style={{
              clipPath: "url(#my-clip-path)",
            }}></div>
        </div>
      </main>
      <div
        className="
        relative
        flex
        flex-col
        items-start
        py-10
        px-10
        lg:px-60
        quote-wrapper
      ">
        {/* <div className="flex flex-col mb-4">
          <div className="flex items-start gap-2">
            <FadeUpOnScroll className="duration-2000">
              <p className={`${ibmPlexSerif.className} leading-relaxed text-xl lg:text-4xl font-thin`}>Make Your Booking</p>
            </FadeUpOnScroll>
          </div>
        </div> */}
      </div>
      <FadeUpOnScroll className="duration-1000">
        <div className="flex flex-col gap-10 px-10 lg:px-60 py-10">
          <h1 className={`${ibmPlexSerif.className} items-center text-center leading-relaxed text-xl lg:text-4xl font-thin w-full`}>
            Our pricing is Competitive & Transparent
          </h1>
          <div className="flex items-center justify-center w-full">
            <Image
              src="/images/fare-calculation.png"
              alt="fare-calculation"
              width={605}
              height={602}
              className="object-contain"
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  );
}
