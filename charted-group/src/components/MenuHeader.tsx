// MenuHeader.tsx
"use client";

import MobileHeader from "./MobileHeader";

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
      "
      >
        {/* Logo */}
        <a href="/">
          <img
            alt="Charted Group Logo"
            src="/images/ce-logo-dark.png"
            width="40"
            height="auto"
            className="w-[40px]"
          />
        </a>

        <div className="flex items-center gap-2">
          {/* Menu items */}
          <div className="flex items-center gap-1 font-medium relative">
            <div className="relative">
              <a
                href="#"
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
              "
              >
                About Us
              </a>
            </div>

            <div className="relative">
              <a
                href="#"
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
              "
              >
                Services
              </a>
            </div>
          </div>

          {/* BOOK A FLIGHT Button */}
          <div className="relative inline-block z-1">
            <button
              type="button"
              className="
            bg-slate-800
              text-white
              hover:opacity-80
              rounded-full
              border-0
              tracking-[3px]
              ml-2.5
              px-6
              py-2
              cursor-pointer
            "
            >
              <span
                className="
              text-[12px] 
              font-[600]"
              >
                BOOK YOUR RIDE
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
