// app/LenisWrapper.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 0.8,
      infinite: false, 
      // You can adjust other options if needed
      // e.g. duration, easing, etc.
    });

    lenis.on("scroll", handleScroll);

    // We'll update background position on each scroll event
    function handleScroll({ scroll }: { scroll: number }) {
      const heroBg = document.getElementById("hero-bg");
      if (!heroBg) return;

      // Example: let's go from center 0% up to center 180% over 1000px of scroll
      const maxScroll = 1000;
      const maxPosition = 100;
      const progress = Math.min(scroll / maxScroll, 5);
      const offset = Math.round(progress * maxPosition);

      // Only update background position (keep size/repeat from the markup)
      heroBg.style.backgroundPosition = `center ${Math.min(offset, 100)}%`;
    }

    // Hook Lenis into the animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup (optional)
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
