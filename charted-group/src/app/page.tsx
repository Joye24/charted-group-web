// app/page.tsx
"use client";

import { ibmPlexSerif } from "./fonts";

import BrandSection from "@components/BrandSection";
import BookingForm from "@components/BookingForm";
import VehicleCarousel from "@/components/VehicleCarousel";
import MessagingSection from "@/components/MessagingSection";
import Testimonials from "@/components/Testimonials";
import PartnersCarousel from "@/components/PartnersCarousel";

export default function Landing() {
  return (
    <div className="bg-slate-950 relative">
      <main
        id="hero-bg"
        className="h-[200vh] md:min-h-screen
                  mx-auto
                  pt-[60px] 
                  px-5 md:px-20 lg:px-[60px]
                  pb-0
                  bg-fixed
                  relative
                  z-[2]"
        style={{
          background: "url('/images/car-dash1.jpg') center 0% / cover no-repeat",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 w-full h-full" />

        {/* Sticky container with left title & right booking tool */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-start
          sticky
          top-[100px]
          md:pt-30
          pb-[30vh]
          lg:pb-[100vh]
          opacity-100
          gap-[100px]
          min-w-full
          text-center lg:text-left"
          style={{ zIndex: 1 }}>
          <div className={`${ibmPlexSerif.className} w-full lg:w-1/2 lg:max-w-[620px] lg:pl-[30px] lg:pr-10 text-white`}>
            <h1 className="text-[inherit] text-4xl md:text-7xl leading-tight mb-4 font-light">Introducing Private Transfers in a New Way.</h1>
            <h2 className="text-[inherit] text-2xl md:text-3xl font-light leading-tight">Experts in Luxury Ground Transportation</h2>
          </div>
          <BookingForm />
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
              z-[0]"
            style={{ clipPath: "url(#my-clip-path)" }}></div>
        </div>
      </main>
      <BrandSection />
      <VehicleCarousel />
      <MessagingSection />
      <PartnersCarousel />
      <Testimonials />
    </div>
  );
}
