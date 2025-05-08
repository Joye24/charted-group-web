"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import BookingForm from "./BookingForm";
import CountrySwitcher from "./footer/CountrySwitcher";
import { COUNTRY_MAP } from "@/app/context/CountryContext";

interface MobileMenuProps {
  isOpen: boolean;
  isPhoneMenuOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  isPhoneMenuOpen,
  onClose,
}: MobileMenuProps) {
  const [showModal, setShowModal] = useState(false);
  const countries = Object.values(COUNTRY_MAP);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any)._lenis;
    if (showModal) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [showModal]);

  return (
    <>
      {/* Overlay */}
      {(isOpen || isPhoneMenuOpen) && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer container */}
      <div
        className={`
          fixed lg:hidden
          top-0
          left-0
          w-full
          h-full
          z-[200]
          bg-[rgba(244,244,242,0.8)]
          backdrop-blur-[5px]
          transition-transform
          duration-250
          ease-in-out
          ${
            isOpen || isPhoneMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
        style={{ borderRadius: "0px" }} // or something else if needed
      >
        {!isPhoneMenuOpen && (
          <div className="flex flex-col justify-between h-full p-6 text-blue-950">
            {/* MAIN CONTENT */}
            <div className="mt-25 space-y-6 overflow-auto">
              {/* Phone / Contact Section */}
              <div className="flex flex-col gap-2 rounded-2xl bg-white/80 p-4">
                <Link
                  onClick={onClose}
                  href="/about"
                  rel="noreferrer"
                  className="block w-full no-underline">
                  <p
                    className="
                     flex items-center gap-3
                     rounded-full
                     py-3 px-4
                     text-blue-950
                     cursor-pointer
                     hover:bg-gray-200
                   ">
                    About Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 ml-auto">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </p>
                </Link>

                <Link
                  onClick={onClose}
                  href="/services"
                  rel="noreferrer"
                  className="block w-full no-underline">
                  <p
                    className="flex 
                             items-center 
                             gap-3
                             rounded-full
                             py-3 
                             px-4
                             text-blue-950
                             cursor-pointer
                             hover:bg-gray-200">
                    Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 ml-auto">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </p>
                </Link>
                <div className="bg-gray-200 p-2 rounded shadow-lg text-slate-950">
                  <CountrySwitcher />
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="flex flex-col items-center gap-4 mb-10">
              {/* Book a Flight Button */}
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="
                 flex
                 items-center
                 justify-center
                 gap-2
                 rounded-full
                 border
                 border-gray-400
                 bg-[var(--mantine-color-sand-0)]
                 hover:bg-[var(--mantine-color-sand-1)]
                 text-[#181F32]
                 text-sm
                 uppercase
                 tracking-[2px]
                 font-normal
                 h-[50px]
                 px-6
               ">
                <svg
                  width="25"
                  height="18"
                  fill="none"
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.7749 8.50028C17.0421 6.31653 15.477 2.82631 15.1487 1.09333L16.1313 0.907227C16.4639 2.66321 18.3432 6.73857 23.174 8.53152L24.4522 9.00593L23.1703 9.47037C22.2338 9.80968 20.7268 10.6093 19.3236 11.8904C17.9234 13.1687 16.6495 14.9049 16.1266 17.1154L15.1534 16.8852C15.7345 14.429 17.1439 12.5263 18.6494 11.1519C19.3835 10.4817 20.1458 9.93193 20.8569 9.50028H0V8.50028H20.7749Z"
                    fill="currentColor"></path>
                </svg>

                <span>Book Your Ride</span>
              </button>
            </div>
          </div>
        )}{" "}
        {isPhoneMenuOpen && (
          <div className="flex flex-col justify-between h-full p-6 text-blue-950">
            <div className="mt-25 space-y-6 overflow-auto">
              <ul className="space-y-2 text-blue-950">
                {countries.map((c) => (
                  <li
                    key={c.code}
                    className="rounded-4xl bg-white shadow-inherit px-4 py-1">
                    <Link
                      href={`tel:${c.telephone.phone}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={onClose}
                      className="flex gap-2 px-4 py-2 decoration-none">
                      <Image
                        alt={`${c.code} flag`}
                        src={`/images/flags/${c.code.toLowerCase()}.svg`}
                        width={17}
                        height={17}
                      />
                      <span>{c.telephone.displayPhone}</span>
                    </Link>
                  </li>
                ))}

                <li className="rounded-4xl bg-white shadow-inherit px-4 py-1">
                  <Link
                    href="https://wa.me/+535834533589"
                    target="_blank"
                    rel="noreferrer"
                    onClick={onClose}
                    className="flex gap-2 px-4 py-2 decoration-none">
                    <Image
                      alt="Whatsapp"
                      src="/icons/whatsapp.svg"
                      width={22}
                      height={22}
                    />{" "}
                    <span>Whatsapp</span>
                  </Link>
                </li>
                <li className="rounded-4xl bg-white shadow-inherit px-4 py-1">
                  <Link
                    href="mailto:chartedinfo@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={onClose}
                    className="flex gap-2 px-4 py-2 decoration-none">
                    <Image
                      alt="Email"
                      src="/icons/envelope.svg"
                      width={22}
                      height={22}
                    />{" "}
                    <span>chartedinfo@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4 mb-10">
              {/* Book a Flight Button */}
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="
                 flex
                 items-center
                 justify-center
                 gap-2
                 rounded-full
                 border
                 border-gray-400
                 bg-[var(--mantine-color-sand-0)]
                 hover:bg-[var(--mantine-color-sand-1)]
                 text-[#181F32]
                 text-sm
                 uppercase
                 tracking-[2px]
                 font-normal
                 h-[50px]
                 px-6
               ">
                <svg
                  width="25"
                  height="18"
                  fill="none"
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.7749 8.50028C17.0421 6.31653 15.477 2.82631 15.1487 1.09333L16.1313 0.907227C16.4639 2.66321 18.3432 6.73857 23.174 8.53152L24.4522 9.00593L23.1703 9.47037C22.2338 9.80968 20.7268 10.6093 19.3236 11.8904C17.9234 13.1687 16.6495 14.9049 16.1266 17.1154L15.1534 16.8852C15.7345 14.429 17.1439 12.5263 18.6494 11.1519C19.3835 10.4817 20.1458 9.93193 20.8569 9.50028H0V8.50028H20.7749Z"
                    fill="currentColor"></path>
                </svg>

                <span>Book Your Ride</span>
              </button>
            </div>
          </div>
        )}
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
              onClick={() => setShowModal(false)}>
              <span className="text-3xl">&times;</span>
            </button>
            <BookingForm />
          </Modal>
        )}
      </div>
    </>
  );
}
