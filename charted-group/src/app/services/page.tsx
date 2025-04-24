// app/page.tsx
"use client";

import { ibmPlexSerif } from "../fonts";

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
          background:
            "url('/images/services-bg.jpg') center 50% / cover no-repeat",
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
            <h1 className="text-white text-5xl md:text-7xl leading-tight mb-4 font-light text-center pt-[5vh] pb-[50vh]">
              Our Services
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
      "></div>
      <div
        className={`${ibmPlexSerif.className} flex flex-col gap-10 px-5 md:px-10 lg:px-20 py-10`}>
        <h1 className="leading-relaxed text-3xl text-center md:text-left md:text-7xl font-normal w-full">
          Why Charted Group?
        </h1>
        <div className="border-1 border-gray-500 border-opacity-50 rounded-4xl md:rounded-r-[130px] px-5 py-15 md:pl-100 md:pr-60 md:-ml-60 md:mr-40">
          <h2 className="text-2xl md:text-5xl mb-5 md:mb-7 font-light">
            Who we are
          </h2>
          <p className="font-light md:font-thin text-md md:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="font-light md:font-thin text-md md:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="text-2xl md:text-5xl mb-5 md:mb-7 font-light">
            What we do
          </h2>
          <p className="font-light md:font-thin text-md md:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="font-light md:font-thin text-md md:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
