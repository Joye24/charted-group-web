"use client";

import { ibmPlexSerif } from "@/app/fonts";
import { FadeUpOnScroll } from "./FadeUpOnScroll";

/**
 * Example usage with multiple sections
 */
export default function MessagingSection() {
  const slides = [
    {
      title: "We Listen",
      message: "Every client has a unique story, and we make it our priority to truly understand their needs before taking action.",
      position: "top-[25vh]",
      threshold: 0.5,
    },
    {
      title: "We Deliver",
      message: "Punctual, polished, and professional - our chauffeurs and concierge team ensure every journey is safe and stress-free.",
      position: "top-[25vh]",
      threshold: 0.5,
    },
    {
      title: "We Exceed Expectations",
      message:
        "Whether it’s a last-minute itinerary change or a discreet red-carpet arrival, we go above and beyond to provide an experience that feels effortless, exclusive, and exceptional.",
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
          className={`${ibmPlexSerif.className} ${slide.position} duration-800 sticky py-15 lg:py-25 bg-slate-950 mb-30 border-t-1 border-t-gray-400`}>
          <h2 className="text-5xl lg:text-8xl font-thin mb-4 lg:pr-[50%]">{slide.title}</h2>
          <p className="text-2xl lg:text-3xl font-thin mx-2 lg:pl-[50%] lg:pt-10">{slide.message}</p>
        </FadeUpOnScroll>
      ))}
    </main>
  );
}
