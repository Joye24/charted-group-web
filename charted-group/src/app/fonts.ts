// app/fonts.ts (or somewhere in your project)
import { IBM_Plex_Serif, Inter } from "next/font/google";

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"], // or 'latin-ext', etc.
  display: "swap",
  variable: "--font-ibm-plex-serif", // optional CSS var name
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"], // or 'latin-ext' if you need extended char set
  display: "swap", // or 'auto' / 'block'
  variable: "--font-inter", // optional if you want a CSS variable
});
