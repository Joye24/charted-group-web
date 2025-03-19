"use client";

import { FadeUpOnScroll } from "./FadeUpOnScroll";

export default function BrandSection() {
  return (
    <div className="brand-section-container mt-[20px] gap-6 px-25 py-30">
      {/* Heading with multiple lines */}
      <div className="text-5xl font-thin mb-12 leading-relaxed">
        <div>
          <FadeUpOnScroll className="block h-auto">
            Charted Group is a leading luxury charter
          </FadeUpOnScroll>

          <FadeUpOnScroll className="block">
            specialist, providing global solutions
          </FadeUpOnScroll>

          <FadeUpOnScroll className="block">
            for your private travel requirements.
          </FadeUpOnScroll>
        </div>
      </div>

      {/* Button with arrow icon */}
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

      {/* Transparent SimplyJet logo */}
      {/* <img
        src="/_next/static/media/logo-simplyjet-transparent.902114a2.svg"
        alt="SimplyJet Logo"
        width="465"
        height="326"
        className="transform-none"
      /> */}
    </div>
  );
}
