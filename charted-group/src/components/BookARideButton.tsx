"use client";

import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import Modal from "./Modal";

export default function BookARideButton() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any)._lenis;
    if (showModal) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [showModal]);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="
          bg-slate-800
          text-white
          hover:opacity-80
          rounded-full
          tracking-[3px]
          px-6
          py-2
        ">
        <span className="text-[12px] font-[600]">BOOK YOUR RIDE</span>
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* You can add a custom close button inside if you like */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
            onClick={() => setShowModal(false)}>
            <span className="text-3xl">&times;</span>
          </button>
          <BookingForm />
        </Modal>
      )}
    </>
  );
}
