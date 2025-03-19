import React from "react";

export default function MobileHeader() {
  return (
    <div
      className="
        flex lg:hidden
        fixed
        top-[20px]
        left-[20px]
        right-[20px]
        p-2
        rounded-[36px]
        z-[1000]
        bg-[rgba(244,244,242,0.5)]
        backdrop-blur-[5px]
        items-center
        justify-between
        transition-transform
        duration-[400ms]
        transform
      "
    >
      {/* Left: Burger Icon Button */}
      <button
        type="button"
        className="
          text-[rgba(0,0,0,0.1)]
          flex
          items-center
          justify-center
          w-[44px]
          h-[44px]
          rounded-[var(--mantine-radius-xl)]
          bg-[var(--mantine-color-gray-light)]
          hover:bg-[var(--mantine-color-gray-light-hover)]
          shadow-[inset_0_0.5px_0.5px_rgba(0,0,0,0.1)]
          transition
          duration-300
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1d2b4d"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-menu-2"
        >
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </button>

      {/* Center: Logo */}
      <a href="/">
        <img
          alt="Charted Group Logo"
          src="/images/ce-logo-dark.png"
          width="40"
          height="auto"
          style={{ color: "transparent" }}
        />
      </a>

      {/* Right: Phone Button */}
      <button
        type="button"
        className="
          text-[rgba(0,0,0,0.1)]
          flex
          items-center
          justify-center
          w-[44px]
          h-[44px]
          rounded-[var(--mantine-radius-xl)]
          bg-[var(--mantine-color-gray-light)]
          hover:bg-[var(--mantine-color-gray-light-hover)]
          shadow-[inset_0_0.5px_0.5px_rgba(0,0,0,0.1)]
          transition
          duration-300
        "
      >
        <img
          alt="Phone"
          src="/icons/phone.svg"
          width="17"
          height="17"
          style={{ color: "transparent" }}
        />
      </button>
    </div>
  );
}
