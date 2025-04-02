// MenuHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import BookARideButton from "./BookARideButton";

export default function MenuHeader() {
  return (
    <>
      <MobileHeader />
      <div
        className="
        hidden lg:flex
        fixed
        top-[30px]
        left-[30px]
        right-[30px]
        py-[12px]
        px-[30px]
        rounded-[36px]
        z-[4]
        bg-[rgba(244,244,242,0.85)]
        backdrop-blur-[5px]
        items-center
        justify-between
        opacity-100
        transition
        ease-in-out
        duration-300
      ">
        {/* Logo */}
        <Link href="/">
          <Image
            alt="Charted Group Logo"
            src="/images/ce-logo-dark.png"
            width="40"
            height="0"
            className="w-[40px]"
          />
        </Link>

        <div className="flex items-center gap-2">
          {/* Menu items */}
          <div className="flex items-center gap-1 font-medium relative">
            <div className="relative">
              <Link
                href="/about"
                className="
                flex
                items-center
                gap-2
                cursor-pointer
                py-2
                px-6
                rounded-full
                bg-inherit
                hover:bg-gray-200
                shadow-inherit
                text-blue-950
              ">
                About Us
              </Link>
            </div>

            <div className="relative">
              <Link
                href="/services"
                className="
                flex
                items-center
                gap-2
                cursor-pointer
                py-2
                px-6
                rounded-full
                bg-inherit
                hover:bg-gray-200
                shadow-inherit
                text-blue-950
              ">
                Services
              </Link>
            </div>
          </div>

          {/* BOOK A FLIGHT Button */}
          <BookARideButton />
        </div>
      </div>
    </>
  );
}
