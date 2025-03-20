// app/Footer.tsx
"use client";

import CopyRightFooter from "./CopyrightFooter";
import Image from 'next/image';
// import LocationsFooter from "./LocationsFooter";
// import PartnersFooter from "./PartnersFooter";
// import SocialFooter from "./SocialFooter";

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
      "
    >
      {/** Top section with 4 columns */}
      <div className="flex items-center justify-center pb-[50px] relative">
        {/* Logo */}
        <div className="flex flex-col items-start justify-center lg:justify-left lg:w-1/3">
          <Image
            src="/images/ce-logo-light.png"
            alt="Simply Jet Logo"
            width="50"
            height="0"
            className="h-[auto] w-[50px]"
          />
        </div>
        <div className="flex flex-col items-center lg:w-1/3">
          {/* Social Icons */}
          {/* <SocialFooter /> */}
        </div>
        <div className="flex flex-col items-end lg:w-1/3">
          {/* Partners */}
          {/* <PartnersFooter /> */}
        </div>
      </div>
      {/** Middle section: offices/addresses */}
      {/* <LocationsFooter /> */}
      {/* Bottom-most row: Terms, Data policy, etc. */}
      <CopyRightFooter />
    </footer>
  );
}
