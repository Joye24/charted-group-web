"use client";

import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { COUNTRY_MAP } from "@/app/context/CountryContext";

interface PhoneMenuProps {
  isOpen: boolean;
  onClose: () => void;
  dropdownPosition: { top: number; left: number };
}

export default function PhoneMenu({
  isOpen,
  onClose,
  dropdownPosition,
}: PhoneMenuProps) {
  if (!isOpen) return null;

  const countries = Object.values(COUNTRY_MAP);

  return createPortal(
    <div className="fixed inset-0 z-[2] text-sm" onClick={onClose}>
      {/* Fullscreen Blurry Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      {/* Dropdown Menu positioned under the phone button */}
      <div
        className="absolute z-[220] bg-[rgba(244,244,242,0.9)] rounded-3xl shadow-lg p-2 mt-5"
        style={{
          top: dropdownPosition.top + 10, // gap below the button
          left: dropdownPosition.left,
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <ul className="space-y-2 text-blue-950">
          {countries.map((c) => (
            <li
              key={c.code}
              className="rounded-4xl hover:bg-gray-100 shadow-inherit px-4 py-1">
              <Link
                href={`tel:${c.telephone.phone}`}
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 decoration-none">
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
          <li className="rounded-4xl hover:bg-gray-100 shadow-inherit px-4 py-1">
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
          <li className="rounded-4xl hover:bg-gray-100 shadow-inherit px-4 py-1">
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
    </div>,
    document.body
  );
}
