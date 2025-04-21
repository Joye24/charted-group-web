"use client";

import Link from "next/link";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import BookARideButton from "./BookARideButton";
import { useState, useRef, useEffect } from "react";
import PhoneMenu from "./PhoneMenu";

export default function MenuHeader() {
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const phoneButtonRef = useRef<HTMLButtonElement>(null);

  // Disable scrolling when the phone menu is open.
  useEffect(() => {
    document.body.style.overflow = phoneMenuOpen ? "hidden" : "";
  }, [phoneMenuOpen]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any)._lenis;
    if (phoneMenuOpen) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [phoneMenuOpen]);
  

  // Calculate dropdown position when menu is open.
  useEffect(() => {
    if (phoneMenuOpen && phoneButtonRef.current) {
      const rect = phoneButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
  }, [phoneMenuOpen]);

  return (
    <>
      <MobileHeader />
      <div className="hidden lg:flex fixed top-[30px] left-[30px] right-[30px] py-[12px] px-[30px] rounded-[36px] z-[4] bg-[rgba(244,244,242,0.85)] backdrop-blur-[5px] items-center justify-between opacity-100 transition ease-in-out duration-300">
        {/* Logo */}
        <Link href="/">
          <Image
            alt="Charted Group Logo"
            src="/images/ce-logo-dark.png"
            width={40}
            height={40}
            className="w-[40px]"
          />
        </Link>

        <div className="flex items-center gap-2">
          {/* Menu items */}
          <div className="flex items-center gap-1 font-medium relative">
            <div className="relative">
              <Link
                href="/about"
                className="flex items-center gap-2 cursor-pointer py-2 px-6 rounded-full bg-inherit hover:bg-gray-200 shadow-inherit text-blue-950">
                About Us
              </Link>
            </div>
            <div className="relative">
              <Link
                href="/services"
                className="flex items-center gap-2 cursor-pointer py-2 px-6 rounded-full bg-inherit hover:bg-gray-200 shadow-inherit text-blue-950">
                Services
              </Link>
            </div>
            <div className="relative">
              <button
                ref={phoneButtonRef}
                onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
                type="button"
                className="flex items-center gap-2 cursor-pointer py-2 px-6 rounded-full bg-inherit hover:bg-gray-200 shadow-inherit text-blue-950">
                <Image
                  alt="Phone"
                  src="/icons/phone.svg"
                  width={17}
                  height={17}
                  style={{ color: "transparent" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4">
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Render PhoneMenu */}
              <PhoneMenu
                isOpen={phoneMenuOpen}
                onClose={() => setPhoneMenuOpen(false)}
                dropdownPosition={dropdownPosition}
              />
            </div>
          </div>
          <BookARideButton />
        </div>
      </div>
    </>
  );
}
