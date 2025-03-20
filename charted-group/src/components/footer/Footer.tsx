// app/Footer.tsx
"use client";

import Image from "next/image";
import CopyRightFooter from "./CopyrightFooter";
// import LocationsFooter from "./LocationsFooter";
import PartnersFooter from "./PartnersFooter";
import SocialFooter from "./SocialFooter";

export default function Footer() {
  return (
    <footer
      className="
        bg-slate-950
        text-[var(--charted-color-sand-0)]
        px-10 lg:px-[90px]
        pt-[90px]
        pb-[50px]
        min-h-[20vh]
      ">
      {/** Top section with 4 columns */}
      <div
        className="
    flex
    flex-col
    lg:flex-row 
    items-center
    gap-10
    justify-center
    pb-[50px]
    relative
  ">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Image
            src="/images/ce-logo-light.png"
            alt="Simply Jet Logo"
            width="50"
            height="0"
            className="h-auto w-[50px]"
          />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <SocialFooter />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <PartnersFooter />
        </div>
      </div>

      {/** Middle section: offices/addresses */}
      {/* <LocationsFooter /> */}
      {/* Bottom-most row: Terms, Data policy, etc. */}
      <CopyRightFooter />
    </footer>
  );
}
