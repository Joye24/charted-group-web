// app/page.tsx
"use client";

import { FadeUpOnScroll } from "@/components/FadeUpOnScroll";
import { ibmPlexSerif } from "../fonts";
import MessagingSection from "@/components/MessagingSection";
import Testimonials from "@/components/Testimonials";
import TeamCarousel from "@/components/TeamCarousel";

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
        z-[2]" // z-index: 2
        style={{
          background: "url('/images/about-bg.jpg') center 0% / cover no-repeat",
        }}>
        <div className="absolute inset-0 bg-slate-950/40 w-full h-full" />
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
            <h1 className="text-white text-5xl md:text-7xl leading-tight mb-4 font-light text-center pt-[5vh] pb-[50vh]">
              About Us
            </h1>
          </div>
        </div>
        <div>
          <svg className="absolute w-0 h-0">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
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
        <div className="flex flex-col mb-4">
          <div className="flex items-start gap-2">
            <svg
              className="w-[150px] lg:w-[400px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 310">
              <path
                d="M288.32 49.87H183.19v210.26L288.32 155zM126.81 155V49.87H21.68v210.26z"
                fill="#FFF"></path>
            </svg>
            <FadeUpOnScroll className="duration-2000">
              <p
                className={`${ibmPlexSerif.className} leading-relaxed text-xl lg:text-4xl font-thin`}>
                At Charted Group, we believe that every road should be traveled
                in comfort and confidence. Our team strives daily to exceed
                expectations, providing tailored car services that blend
                impeccable safety and genuine hospitality. This unwavering
                commitment to excellence is how we’ve earned our clients’ trust
                and continue to evolve in the world of luxury ground travel.
              </p>
            </FadeUpOnScroll>
          </div>
          <FadeUpOnScroll className="duration-2500">
            <div className="mt-10 mb-2 h-px w-[100px] bg-gray-300" />
          </FadeUpOnScroll>
          <FadeUpOnScroll className="duration-4000">
            <div className="text-lg font-semibold text-gray-400">
              Funto Joye
            </div>
            <div className="text-base text-gray-500">CEO & Co-founder</div>
          </FadeUpOnScroll>
        </div>
      </div>
      <div className="mt-40 mb-50">
        <TeamCarousel />
      </div>
      <MessagingSection />
      <Testimonials />
    </div>
  );
}
