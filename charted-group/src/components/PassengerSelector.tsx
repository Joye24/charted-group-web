import React from "react";

interface PassengerSelectorProps {
  label?: string;
  value: number; // the current count
  onChange: (val: number) => void; // callback to parent
  min?: number;
  max?: number;
}

export default function PassengerSelector({ label = "Passengers", value, onChange, min = 1, max = 10 }: PassengerSelectorProps) {
  // Decrement (but clamp to min)
  function handleDecrease() {
    onChange(Math.max(value - 1, min));
  }

  // Increment (but clamp to max)
  function handleIncrease() {
    onChange(Math.min(value + 1, max));
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      {label && <span className="text-sm font-medium text-slate-950">{label}</span>}

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handleDecrease}
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            border
            border-gray-300
            hover:bg-gray-100
            text-[#1d2b4d]
            font-bold
            text-2xl
          "
          aria-label="Decrease">
          –
        </button>

        <div
          className="
            w-[60px]
            h-10
            flex
            items-center
            justify-center
            rounded-full
            bg-white
            border
            border-gray-300
            shadow-inner
            text-[#1d2b4d]
            text-lg
            font-medium
            select-none
          ">
          {value}
        </div>

        <button
          type="button"
          onClick={handleIncrease}
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            border
            border-gray-300
            hover:bg-gray-100
            text-[#1d2b4d]
            font-bold
            text-2xl
          "
          aria-label="Increase">
          +
        </button>
      </div>
    </div>
  );
}
