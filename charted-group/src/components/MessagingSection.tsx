"use client";

import { ibmPlexSerif } from "@/app/fonts";
import { FadeUpOnScroll } from "./FadeUpOnScroll";


/**
 * Example usage with multiple sections
 */
export default function MessagingSection() {
  const slides = [
    {
      title: "We Care",
      message: "We are committed to delivering the best service to every person we pick up.",
      position: "top-[25vh]",
      threshold: 0.5,
    },
    {
      title: "We Smile",
      message: "Spreading joy and positivity with every interaction.",
      position: "top-[25vh]",
      threshold: 0.5,
    },
    {
      title: "We Get Things Done",
      message: "Turning your journey into action and achieving remarkable results.",
      position: "top-[25vh]",
      threshold: 0.5,
    },
  ];

  return (
    <main className="h-[200vh] px-10 md:px-25">
       {slides.map((slide, i) => (
        <FadeUpOnScroll
        key={i}
        threshold={slide.threshold}
        className={`${ibmPlexSerif.className} ${slide.position} duration-800 sticky py-15 lg:py-25 bg-slate-950 mb-30 border-t-1 border-t-gray-400`}
      >	
        <h2 className="text-5xl lg:text-8xl font-thin mb-4 lg:pr-[50%]">{slide.title}</h2>
        <p className="text-2xl lg:text-3xl font-thin mx-2 lg:pl-[50%] lg:pt-10">{slide.message}</p>
      </FadeUpOnScroll>
       ))}
    </main>
  );
}
