"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.015, // Lower means slower "catch up" for smoothing, try 0.07–0.3
      wheelMultiplier: 1, // Adjust scroll speed
      infinite: false, 
    });

    // make it globally accessible
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)._lenis = lenis;

    // Listen to the Lenis scroll event
    lenis.on("scroll", handleScroll);

    function handleScroll({ scroll }: { scroll: number }) {
      const heroBg = document.getElementById("hero-bg");
      if (!heroBg) return;

      // how far to "animate" the background (1500px of scroll range)
      const maxScroll = 1300; 

      // progress = 0..1
      const progress = Math.min(scroll / maxScroll, 1);

      // Background position effect:
      // from 0% to 180% at progress=1
      // clamp to maybe 120% if you prefer
      const maxPosition = 100; 
      const offset = progress * maxPosition; // e.g. 0..120
      heroBg.style.backgroundPosition = `center ${offset}%`;

      // Adjust background position for mobile view
      if (window.innerWidth >= 1150) {

        // Zoom effect:
      // from 100% at the beginning to 120% at the end 
      // if you only want the zoom to start after half the scroll:
      // e.g. progressZ ~ 0..1 from scroll in [0.5..1]
      let zoomProgress = (progress - 0.2) / 0.5; 
      zoomProgress = Math.max(0, Math.min(zoomProgress, 1)); 

      const minZoom = 100;
      const maxZoom = 130;
      const currentZoom = minZoom + zoomProgress * (maxZoom - minZoom);

        // set backgroundSize
      heroBg.style.backgroundSize = `${currentZoom}% auto`;
      }
    }

    // Animate
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
