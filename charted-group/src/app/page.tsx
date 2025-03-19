// app/page.tsx
"use client";

import { ibmPlexSerif } from "./fonts";

import BrandSection from "@components/BrandSection";

export default function Landing() {
  return (
    <div className="bg-slate-950 relative">
      <main
        id="hero-bg"
        style={{
          background:
            "url('/images/travelling.jpg') center 0% / cover no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30 w-full h-full" />

        {/* Sticky container with left title & right booking tool */}
        <div
          className="
          flex
          flex-row
          justify-start
          sticky
          top-[150px]
          bottom-[200px]
          pb-[100vh]
          opacity-100
          gap-[100px]
          min-w-full
        "
          style={{
            marginTop: "150px",
            zIndex: 1,
          }}
        >
          {/* Left side: Title & Subheading */}
          <div
            className={`${ibmPlexSerif.className} w-1/2 max-w-[608px] pl-[30px] pr-12 text-[#191F32]`}
          >
            <h1 className="text-[inherit] text-7xl leading-tight mb-4 font-light">
              Travel In Luxury
            </h1>
            <h2 className="text-[inherit] text-3xl font-light leading-tight">
              Seamlessly travel. Effortlessly arrive
            </h2>
          </div>

          {/* Right side: Booking Tool */}
          <div className="flex-1 flex flex-col items-start justify-start px-12">
            {/* Leg Type Switch */}
            <div className="flex gap-10 mb-6">
              <p className="text-[#191F32] font-medium border-b-2 border-[#191F32] cursor-pointer">
                One way
              </p>
              <p className="text-[#191F32] cursor-pointer">Round trip</p>
              <p className="text-[#191F32] cursor-pointer">Multi city</p>
            </div>

            {/* Booking Form Container */}
            <div className="flex flex-col gap-5 w-full">
              {/* Top row: From / To */}
              <div className="flex flex-col md:flex-row gap-5">
                {/* From */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="from"
                    className="text-sm font-medium mb-1 text-slate-950"
                  >
                    From*
                  </label>
                  <input
                    id="from"
                    className="
                    w-full
                    border
                    border-gray-300
                    bg-white
                    rounded-full
                    px-5
                    py-2
                    text-[16px]
                  text-slate-950
                    focus:outline-none
                  "
                    placeholder="e.g. Geneva"
                  />
                </div>

                {/* To */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="to"
                    className="text-sm font-medium mb-1 text-slate-950"
                  >
                    To*
                  </label>
                  <input
                    id="to"
                    className="
                    w-full
                    border
                    border-gray-300
                    bg-white
                    rounded-full
                    px-5
                    py-2
                    text-[16px]
                    text-slate-950
                    focus:outline-none
                  "
                    placeholder="e.g. London"
                  />
                </div>
              </div>

              {/* Middle row: Departure Date / Passengers */}
              <div className="flex flex-col md:flex-row gap-5">
                {/* Departure date */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="departureDate"
                    className="text-sm font-medium mb-1 text-slate-950"
                  >
                    Departure date*
                  </label>
                  <input
                    id="departureDate"
                    type="date"
                    className="
                    w-full
                    border
                    border-gray-300
                    bg-white
                    rounded-full
                    px-5
                    py-2
                    text-[16px]
                    text-slate-950
                    focus:outline-none
                  "
                  />
                </div>

                {/* Passengers */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="passengers"
                    className="text-sm font-medium mb-1 text-slate-950"
                  >
                    Passengers*
                  </label>
                  <input
                    id="passengers"
                    type="number"
                    defaultValue={1}
                    className="
                    w-full
                    border
                    border-gray-300
                    bg-white
                    text-slate-950
                    rounded-full
                    px-5
                    py-2
                    text-[16px]
                    focus:outline-none
                  "
                  />
                </div>
              </div>

              {/* Bottom row: Next Button */}
              <div className="flex justify-start md:justify-end w-full">
                <button
                  className="
                  flex
                  items-center
                  bg-[#191F32]
                  text-white
                  rounded-full
                  uppercase
                  tracking-[2px]
                  font-light
                  text-[15px]
                  h-[60px]
                  px-[30px]
                  py-[18px]
                "
                >
                  <svg
                    width="25"
                    height="18"
                    fill="none"
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.7749 8.50028C17.0421 6.31653 15.477 2.82631 15.1487 1.09333L16.1313 0.907227C16.4639 2.66321 18.3432 6.73857 23.174 8.53152L24.4522 9.00593L23.1703 9.47037C22.2338 9.80968 20.7268 10.6093 19.3236 11.8904C17.9234 13.1687 16.6495 14.9049 16.1266 17.1154L15.1534 16.8852C15.7345 14.429 17.1439 12.5263 18.6494 11.1519C19.3835 10.4817 20.1458 9.93193 20.8569 9.50028H0V8.50028H20.7749Z"
                      fill="#fff"
                    />
                  </svg>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plane Window & Clip Path */}
        <div>
          {/* Hidden SVG clipPath */}
          <svg className="absolute w-0 h-0">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0,0 C0,0.485,0.06,0.878,0.5,0.878 C0.94,0.878,1,0.485,1,0 V1 H0 V0" />
            </clipPath>
          </svg>

          {/* Window shape */}
          <div
            className="
            bg-slate-950
          "
            style={{
              clipPath: "url(#my-clip-path)",
              width: "100%",
              height: "71.2962vh",
              objectPosition: "bottom",
              objectFit: "contain",
              position: "absolute",
              left: 0,
              bottom: "-2px",
              zIndex: 0,
            }}
          >
            {/* This div is empty in your example, 
              but you could add content or styling if needed */}
          </div>
        </div>
      </main>
      <BrandSection />
    </div>
  );
}
