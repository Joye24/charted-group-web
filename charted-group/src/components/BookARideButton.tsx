"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import BookingForm from "./BookingForm"; // or wherever your form is

export default function BookARideButton() {
  const pathName = usePathname();
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    // Are we on the homepage?
    if (pathName === "/") {
      window.location.reload();

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Show the modal
      setShowModal(true);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="relative inline-block z-1">
        <button
          type="button"
          onClick={handleClick}
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
            ">
          <span
            className="
              text-[12px] 
              font-[600]">
            BOOK YOUR RIDE
          </span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="
            fixed inset-0
            flex items-center justify-center
            bg-black/40
            backdrop-blur-sm
            z-50
          "
          onClick={closeModal} // click outside to close
        >
          {/* Prevent click from closing if user clicks inside modal */}
          <div
            className="
              w-full
              max-w-lg
              bg-white
              rounded-md
              p-6
              relative
            "
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={closeModal}>
              X
            </button>

            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
}
