"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import FloatingLabelInput from "./FloatingLabelInput";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import toast from "react-hot-toast";
import { useCountry } from "@/app/context/CountryContext";

type LatLngLiteral = google.maps.LatLngLiteral;

export default function BookingFormCopy() {
  const originInputRef = useRef<HTMLInputElement>(null);
  const destInputRef = useRef<HTMLInputElement>(null);
  const { country } = useCountry();

  // ————— Autocomplete refs & coords —————
  const [originCoords, setOriginCoords] = useState<LatLngLiteral | null>(null);
  const [destCoords, setDestCoords] = useState<LatLngLiteral | null>(null);

  // ————— State Variables —————
  const [step, setStep] = useState<1 | 2>(1);
  const minBookingDate = dayjs().add(1, "day");
  const [legType, setLegType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flightNumberEnabled, setFlightNumberEnabled] = useState(false);
  const [flightNumber, setFlightNumber] = useState("");
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState(dayjs(minBookingDate));
  const [vehicleOption, setVehicleOption] = useState<
    "V-Class" | "S-Class" | "E-Class"
  >("V-Class");

  const [timePeriod, setTimePeriod] = useState<
    "standard" | "premium" | "special"
  >("standard");

  // -------- Personal Details -------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // ————— Price Range Variables —————
  const [fareError, setFareError] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(country.locale, {
        style: "currency",
        currency: country.currency,
        maximumFractionDigits: 0,
      }),
    [country]
  );

  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );

  const canSubmit =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    isEmailValid;

  // pull in the `places` bundle
  const places = useMapsLibrary("places");
  //console.log("Maps:", places);

  // once maps+places loaded, wire up both inputs:
  useEffect(() => {
    if (!places) return;

    let ac1: google.maps.places.Autocomplete | null = null;
    let ac2: google.maps.places.Autocomplete | null = null;

    if (step === 1) {
      if (originInputRef.current) {
        ac1 = new places.Autocomplete(originInputRef.current, {
          fields: ["formatted_address", "geometry.location"],
          componentRestrictions: { country: country.code },
        });
        ac1.addListener("place_changed", () => {
          const p = ac1!.getPlace();
          if (p.formatted_address && p.geometry?.location) {
            setOrigin(p.formatted_address);
            setOriginCoords({
              lat: p.geometry.location.lat(),
              lng: p.geometry.location.lng(),
            });
          }
        });
      }

      if (destInputRef.current) {
        ac2 = new places.Autocomplete(destInputRef.current, {
          fields: ["formatted_address", "geometry.location"],
          componentRestrictions: { country: country.code },
        });
        ac2.addListener("place_changed", () => {
          const p = ac2!.getPlace();
          if (p.formatted_address && p.geometry?.location) {
            setDestination(p.formatted_address);
            setDestCoords({
              lat: p.geometry.location.lat(),
              lng: p.geometry.location.lng(),
            });
          }
        });
      }
    }

    return () => {
      // clean up any listeners we added last time
      if (ac1) google.maps.event.clearInstanceListeners(ac1);
      if (ac2) google.maps.event.clearInstanceListeners(ac2);
    };
  }, [places, step, country.code]);

  useEffect(() => {
    setOrigin("");
    setDestination("");
    setOriginCoords(null);
    setDestCoords(null);
    setDistanceKm(null);
    setPriceRange(null);
  }, [country.code]);

  // when both coords ready, compute driving distance
  useEffect(() => {
    if (!originCoords || !destCoords) return;
    new google.maps.DirectionsService().route(
      {
        origin: originCoords,
        destination: destCoords,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (res, status) => {
        if (status === "OK" && res?.routes.length) {
          const m = res.routes[0].legs[0].distance?.value;
          if (m != null) setDistanceKm(m / 1000);
        }
      }
    );
  }, [originCoords, destCoords]);

  // helper that returns driving‑distance in km, or rejects
  const drivingDistanceKm = (
    origin: google.maps.LatLngLiteral,
    destination: google.maps.LatLngLiteral
  ): Promise<number> => {
    return new Promise((resolve, reject) => {
      new google.maps.DirectionsService().route(
        { origin, destination, travelMode: google.maps.TravelMode.DRIVING },
        (result, status) => {
          //console.log("drivingDistanceKm", { result, status });
          if (status === "OK" && result?.routes.length) {
            const meters = result.routes[0].legs[0].distance?.value ?? 0;
            resolve(meters / 1000);
          } else {
            reject(new Error("NO_ROUTE"));
          }
        }
      );
    });
  };

  const calculateOneWayPrice = useCallback(
    (isDublin: boolean, isBelfast: boolean, tripKm: number) => {
      const baseMap = {
        "E-Class": 90,
        "S-Class": 100,
        "V-Class": 100,
      } as const;
      let price = baseMap[vehicleOption];

      if (isDublin || isBelfast) {
        price += 30;
      } else {
        price += tripKm * 3;
      }

      setPriceRange({ min: price - 25, max: price + 25 });
    },
    [vehicleOption]
  );

  useEffect(() => {
    if (step !== 1) return;

    // airport centers
    const DUBLIN = { lat: 53.438013, lng: -6.254802 };
    const BELFAST = { lat: 54.657222, lng: -6.215833 };

    // clear old priceRange immediately
    setPriceRange(null);
    setFareError(false);

    if (!originCoords || !destCoords || distanceKm == null) {
      // nothing to do yet
      return;
    }

    setIsCalculating(true);

    (async () => {
      try {
        // driving distance between A→B
        const tripKm = distanceKm;

        // both ends → Dublin
        const [oDub, dDub] = await Promise.all([
          drivingDistanceKm(originCoords, DUBLIN),
          drivingDistanceKm(destCoords, DUBLIN),
        ]);
        const inDublin = oDub <= 20 && dDub <= 20;

        let inBelfast = false;
        if (!inDublin) {
          // only check Belfast if not already in Dublin
          const [oBel, dBel] = await Promise.all([
            drivingDistanceKm(originCoords, BELFAST),
            drivingDistanceKm(destCoords, BELFAST),
          ]);
          inBelfast = oBel <= 20 && dBel <= 20;
        }

        if (legType === "oneWay") {
          calculateOneWayPrice(inDublin, inBelfast, tripKm);
        }
      } catch (_e) {
        console.error(_e);
        // any route fail → show error
        setFareError(true);
      } finally {
        setIsCalculating(false);
      }
    })().catch(console.error);
  }, [
    step,
    legType,
    originCoords,
    destCoords,
    vehicleOption,
    distanceKm,
    calculateOneWayPrice,
  ]);

  function handleNext() {
    setIsCalculating(true);
    setStep(2);
    setIsCalculating(false);
  }

  function handleBack() {
    setIsCalculating(true);
    setStep(1);
    setIsCalculating(false);
  }

  async function handleSubmit() {
    setIsCalculating(true);
    const bookingPayload = {
      legType: legType == "oneWay" ? "One Way" : "Round Trip",
      origin,
      destination,
      selectedDate: selectedDate.format(country.dateFormat),
      flightNumber: flightNumberEnabled ? flightNumber : "N/A",
      timePeriod:
        timePeriod == "standard"
          ? "Standard"
          : timePeriod == "premium"
          ? "Premium"
          : "Special",
      vehicleOption,
      distanceKm,
      priceRange,
      firstName,
      lastName,
      email,
      phone,
    };

    const res = await fetch("/api/sendBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingPayload),
    });

    if (res.ok) {
      toast.success("Booking sent!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setFlightNumberEnabled(false);
      setFlightNumber("");
      setOrigin("");
      setDestination("");
      setFlightNumber("");
      setPriceRange(null);
      setDistanceKm(null);
      setVehicleOption("V-Class");
      setTimePeriod("standard");
      setSelectedDate(dayjs(minBookingDate));
      setLegType("oneWay");
      setFareError(false);
      setOriginCoords(null);
      setDestCoords(null);
      setStep(1);
    } else {
      toast.error("Failed to send booking, please try again.");
      console.log("Response:", await res.json());
    }

    setIsCalculating(false);
  }

  return (
    <div className="relative flex-1 flex flex-col items-center lg:items-start rounded-2xl py-5 px-4 md:px-12 bg-white/95 lg:bg-white/95 h-full">
      {isCalculating && (
        <div className="absolute inset-0 z-10 bg-white/70 flex items-center justify-center">
          {/* simple SVG spinner */}
          <svg
            className="animate-spin h-10 w-10 text-[#191F32]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
      )}

      {/* Leg Type Switch (One way, Round trip) */}
      <div className="flex gap-10 mb-10">
        <span
          className={`
            text-[#191F32]
            border-b-2 
            cursor-pointer
            ${
              legType === "oneWay"
                ? "border-slate-950 font-bold"
                : "border-transparent font-light"
            }
          `}
          onClick={() => setLegType("oneWay")}>
          One Way
        </span>

        {/* <span
          className={`
            text-[#191F32]
            cursor-pointer
            border-b-2
            ${
              legType === "roundTrip"
                ? "border-slate-950 font-bold"
                : "border-transparent font-light"
            }
          `}
          onClick={() => setLegType("roundTrip")}
        >
          Round Trip
        </span> */}
      </div>

      <div
        className={`
          flex flex-col gap-5 w-full text-left
          ${step !== 1 ? "hidden" : ""}
        `}>
        {/* Row 1: Origin (left), Date (right) */}
        <div className="flex flex-col xl:flex-row lg:gap-5">
          {/* Origin */}
          <div className="w-full">
            <FloatingLabelInput
              ref={originInputRef}
              label="Origin*"
              id="origin"
              placeholder="Enter your origin"
              value={origin}
              onChange={setOrigin}
              required={true}
            />
          </div>

          {/* Destination */}

          <div className="w-full">
            <FloatingLabelInput
              ref={destInputRef}
              label="Destination*"
              placeholder="Enter your destination"
              id="destination"
              value={destination}
              onChange={setDestination}
              required={true}
            />
          </div>
        </div>

        {/* Row 2: Date (left), Time Period (right) */}
        <div className="flex flex-col xl:flex-row gap-5">
          {/* Destination */}
          <div className="w-full flex flex-col">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure Date*"
                value={selectedDate}
                onChange={(val) => val && setSelectedDate(val)}
                format={country.dateFormat}
                minDate={minBookingDate}
              />
            </LocalizationProvider>
          </div>

          {/* Time Period */}
          <div className="flex flex-col w-full">
            <FormControl fullWidth variant="outlined" className="mt-2">
              <InputLabel id="timePeriod-label">Time Period*</InputLabel>
              <Select
                labelId="timePeriod-label"
                id="timePeriod"
                value={timePeriod}
                label="Time Period*"
                required
                onChange={(e) =>
                  setTimePeriod(
                    e.target.value as "standard" | "premium" | "special"
                  )
                }>
                <MenuItem value="standard">
                  Standard (08:00 - 20:00, Mon-Sat)
                </MenuItem>
                <MenuItem value="premium">
                  Premium (20:00 - 08:00, plus Sunday/PubHol)
                </MenuItem>
                <MenuItem value="special">
                  Special (Sat &amp; Sun, 00:00 - 04:00)
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex flex-col w-full mb-5">
            <FormControl fullWidth variant="outlined" className="mt-2 mb-5">
              <InputLabel id="vehicle-label">Vehicle*</InputLabel>
              <Select
                labelId="timvehicleePeriod-label"
                id="vehicle*"
                value={vehicleOption}
                label="Vehicle"
                required
                onChange={(e) =>
                  setVehicleOption(
                    e.target.value as "V-Class" | "S-Class" | "E-Class"
                  )
                }>
                <MenuItem value="V-Class">V-Class</MenuItem>
                <MenuItem value="S-Class">S-Class</MenuItem>
                <MenuItem value="E-Class">E-Class</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-col w-full mb-5">
            {/* If checked, show the flight number text field */}
            {flightNumberEnabled && (
              <FloatingLabelInput
                label="Flight Number"
                placeholder="e.g. EI123"
                id="flightNumber"
                value={flightNumber}
                onChange={setFlightNumber}
                required={false}
              />
            )}

            {/* Checkbox for flight number */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="flightCheckbox"
                checked={flightNumberEnabled}
                onChange={(e) => setFlightNumberEnabled(e.target.checked)}
              />

              <label
                htmlFor="flightCheckbox"
                className="text-xs text-[#191F32] cursor-pointer">
                Add Flight Number
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex flex-col w-full mb-5">
            <button
              onClick={handleNext}
              disabled={!priceRange}
              className={`
                flex
                max-w-full md:max-w-[150px]
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
                ${priceRange ? "hover:opacity-80" : ""}
                text-center
                justify-center
                ${
                  !priceRange
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-80"
                }
                `}>
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
          <div className="flex flex-col w-full mb-5">
            <div className="flex items-center gap-2 mt-2 py-4 hidden">
              {distanceKm != null && (
                <div className="text-sm text-gray-600 font-bold">
                  Distance: {distanceKm.toFixed(1)} km
                </div>
              )}
            </div>
            <div className="mt-auto flex items-center gap-2 mt-2 py-4 justify-start">
              {fareError ? (
                <span className="text-lg text-red-600 font-bold">
                  Unable to Calculate Fare
                </span>
              ) : priceRange ? (
                <div className="text-lg text-[#191F32] font-semibold mt-2">
                  Estimated fare: {currencyFormatter.format(priceRange.min)} – 
                  {currencyFormatter.format(priceRange.max)}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Personal Details */}
      <div
        className={`
          flex flex-col gap-5 w-full text-left transition-transform duration-300 transform
          ${step !== 2 ? "hidden" : ""}
        `}>
        <div className="flex flex-col xl:flex-row lg:gap-5">
          <div className="w-full">
            <FloatingLabelInput
              ref={null}
              label="First Name*"
              id="firstName"
              value={firstName}
              onChange={setFirstName}
              required
              autoComplete="off"
            />
          </div>
          <div className="w-full">
            <FloatingLabelInput
              label="Last Name*"
              id="lastName"
              value={lastName}
              onChange={setLastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row lg:gap-5">
          <div className="w-full">
            <FloatingLabelInput
              label="Email*"
              id="email"
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div className="w-full">
            <FloatingLabelInput
              label="Phone*"
              id="phone"
              value={phone}
              onChange={setPhone}
              required
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex
                max-w-full md:max-w-[150px]
                items-center bg-slate-600 text-white
                rounded-full
                uppercase
                tracking-[2px]
                font-light
                text-[15px]
                h-[60px]
                px-[30px]
                py-[18px]
                hover:opacity-80
                text-center
                justify-center min-w-[150px]">
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`
                flex
                max-w-full md:max-w-[150px]
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
                ${
                  canSubmit
                    ? "hover:opacity-80"
                    : "opacity-50 cursor-not-allowed"
                }
                text-center
                justify-center  min-w-[150px]
                `}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
