// app/components/footer/SocialFooter.tsx
"use client";

import Image from "next/image";

export default function SocialFooter() {
  return (
    <div className="flex items-center gap-[10px] relative">
      <a
        href="https://www.instagram.com/#"
        target="_blank"
        rel="noreferrer">
        <button
          type="button"
          aria-label="Instagram"
          className="
                bg-slate-800
                border-0
                rounded-full
                p-[10px]
                cursor-pointer
              ">
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </a>
      <a
        href="https://ch.linkedin.com/company/#"
        target="_blank"
        rel="noreferrer">
        <button
          type="button"
          aria-label="LinkedIn"
          className="
                bg-slate-800
                border-0
                rounded-full
                p-[10px]
                cursor-pointer
              ">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </a>
      <a
        href="https://www.facebook.com/#"
        target="_blank"
        rel="noreferrer">
        <button
          type="button"
          aria-label="Facebook"
          className="
                bg-slate-800
                border-0
                rounded-full
                p-[10px]
                cursor-pointer
              ">
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </a>
    </div>
  );
}
