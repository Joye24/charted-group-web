"use client";

import React, { useState } from "react";
import PassengerSelector from "./PassengerSelector";
import FloatingLabelInput from "./FloatingLabelInput";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function BookingForm() {
  const [legType, setLegType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  // Step 2: Standard, Premium, Special
  const [timePeriod, setTimePeriod] = useState<"standard" | "premium" | "special">("standard");

  // Step 3: # Passengers Over/Under 12
  const [passOver12, setPassOver12] = useState(1);
  const [passUnder12, setPassUnder12] = useState(0);

  // Step 4: Pre-book or Hail
  const [bookingType, setBookingType] = useState<"prebook" | "hail">("prebook");

  setBookingType("prebook");

  const minBookingDate = dayjs().add(1, "day");

  function handleNext() {
    // For now, just console log
    console.log({
      legType,
      origin,
      destination,
      timePeriod,
      passOver12,
      passUnder12,
      bookingType,
    });
  }

  return (
    <div className="flex-1 flex flex-col items-center lg:items-start rounded-2xl py-5 px-4 md:px-12 bg-white/90 lg:bg-white/70">
      {/* Leg Type Switch (One way, Round trip, Multi city) */}
      <div className="flex gap-10 mb-6">
        <span
          className={`
            text-[#191F32]
            border-b-2 
            cursor-pointer
            ${legType === "oneWay" ? "border-slate-950 font-bold" : "border-transparent font-light"}
        `}
          onClick={() => setLegType("oneWay")}>
          One Way
        </span>

        <span
          className={`
            text-[#191F32] cursor-pointer border-b-2
            ${legType === "roundTrip" ? "border-slate-950 font-bold" : "border-transparent font-light"}
          `}
          onClick={() => setLegType("roundTrip")}>
          Round Trip
        </span>
      </div>

      {/* Booking Form Container */}
      <div className="flex flex-col gap-5 w-full text-left">
        {/* Step 1: Origin / Destination */}
        <div className="flex flex-col lg:flex-row lg:gap-5">
          {/* Origin */}
          <div className="w-full">
            <FloatingLabelInput
              label="Origin*"
              id="origin"
              placeholder="Enter your origin"
              value={origin}
              onChange={setOrigin}
            />
          </div>

          {/* Destination */}
          <div className="w-full">
            <FloatingLabelInput
              label="Destination*"
              placeholder="Enter your destination"
              id="destination"
              value={destination}
              onChange={setDestination}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                defaultValue={minBookingDate}
                format="DD/MM/YYYY"
                minDate={minBookingDate}
                slotProps={{
                  textField: {
                    helperText: "DD/MM/YYYY",
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="flex flex-col w-full">
            <FormControl
              fullWidth
              variant="outlined"
              className="mt-2">
              <InputLabel id="timePeriod-label">Time Period</InputLabel>
              <Select
                labelId="timePeriod-label"
                id="timePeriod"
                value={timePeriod}
                label="Time Period"
                onChange={(e) => setTimePeriod(e.target.value as "standard" | "premium" | "special")}>
                <MenuItem value="standard">Standard (08:00 - 20:00, Mon-Sat)</MenuItem>
                <MenuItem value="premium">Premium (20:00 - 08:00, Mon-Sun + Pub Hol)</MenuItem>
                <MenuItem value="special">Special (Sat &amp; Sun, 00:00 - 04:00 + Xmas Times)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <PassengerSelector
            label="Passengers Over 12"
            value={passOver12}
            onChange={setPassOver12}
            min={1}
            max={10}
          />
          <PassengerSelector
            label="Passengers Under 12"
            value={passUnder12}
            onChange={setPassUnder12}
            min={0}
            max={10}
          />
          {/* Bottom row: Next Button */}
          <div className="flex justify-center lg:justify-end w-full">
            <button
              onClick={handleNext}
              className="
              flex
              items-center
              bg-[#191F32]
              text-white
              rounded-full
              uppercase
              tracking-[2px]
              font-light
              text-[15px]
              h-[60px]
              px-[30px]
              py-[18px]
              hover:opacity-80
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
                  fill="#fff"
                />
              </svg>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
