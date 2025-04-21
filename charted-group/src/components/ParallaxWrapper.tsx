"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";
import Ukiyo from "ukiyojs";

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

export default function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  const parallaxRef = useRef<Ukiyo | null>(null);
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!;

  useEffect(() => {
    // Query all elements with the "ukiyo" class.
    const images = document.querySelectorAll(".ukiyo");
    if (images.length === 0) return;

    // Create a new Ukiyo instance over those images
    const parallax = new Ukiyo(images, {
      scale: 1.0,
      speed: 2.5,
      // ... other options if you want
    });
    parallaxRef.current = parallax;

    return () => {
      // Cleanup on unmount, destroying the parallax instance
      parallaxRef.current?.destroy();
      parallaxRef.current = null;
    };
  }, []);

  return (
    <APIProvider apiKey={GOOGLE_API_KEY} libraries={["places"]}>
      {children}
    </APIProvider>
  );
}
