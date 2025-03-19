"use client";

import { FadeUpOnScroll } from "./FadeUpOnScroll";

export default function BrandSection() {
  return (
    <div className="brand-section-container gap-6 px-10 md:px-25 py-25">
      {/* Heading with multiple lines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-2xl md:text-5xl font-thin mb-12 leading-relaxed">
      <div className="md:col-span-2 flex flex-col w-full">
        <FadeUpOnScroll className="block h-auto">
        Charted Group is a leading luxury charter specialist, providing global solutions for your private travel requirements.
        </FadeUpOnScroll>
        <FadeUpOnScroll className="block h-auto my-10 text-xl md:text-3xl">
        <button
          type="button"
          className="
          flex
          items-center
          gap-2
          border
          border-[rgba(236,234,232,0.3)]
          text-[var(--mantine-color-sand-1)]
          px-4
          py-2
          rounded-full
          tracking-[3px]
          hover:opacity-80
          "
        >
          <svg
          width="25"
          height="18"
          fill="none"
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7749 8.50028C17.0421 6.31653 15.477 2.82631 15.1487 1.09333L16.1313 0.907227C16.4639 2.66321 18.3432 6.73857 23.174 8.53152L24.4522 9.00593L23.1703 9.47037C22.2338 9.80968 20.7268 10.6093 19.3236 11.8904C17.9234 13.1687 16.6495 14.9049 16.1266 17.1154L15.1534 16.8852C15.7345 14.429 17.1439 12.5263 18.6494 11.1519C19.3835 10.4817 20.1458 9.93193 20.8569 9.50028H0V8.50028H20.7749Z"
            fill="#fff"
          />
          </svg>
          BOOK A RIDE
        </button>
        </FadeUpOnScroll>
      </div>
      <div className="flex w-full justify-center md:justify-end mt-20 md:mt-5 md:pt-30">
        <FadeUpOnScroll className="block h-auto">
        <img
          src="/images/ce-logo-light.png"
          alt="SimplyJet Logo"
          width="100"
          height="auto"
          className="transform-none"
        />
        </FadeUpOnScroll>
      </div>
      </div>
    </div>
  );
}
