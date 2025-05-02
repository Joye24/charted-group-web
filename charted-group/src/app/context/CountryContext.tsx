// app/context/CountryContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export type CountryCode = "IE" | "GB" | "ES" | "NG"; // etc

interface CountryInfo {
  code: CountryCode;
  name: string;
  locale: string;
  currency: string;
  dateFormat: string;
  vehicles: string[];
  pricing: {
    base: {
      [vehicle: string]: number;
    };
    perKm: number;
    rangeMargin: number;
    airportSurcharge: number;
  };
  vehicleDescription: string;
  capacityImage: string;
}

const COUNTRY_MAP: Record<CountryCode, CountryInfo> = {
  IE: {
    code: "IE",
    name: "Ireland",
    locale: "en-IE",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    vehicles: ["E-Class", "S-Class", "V-Class", "EQS"],
    pricing: {
      base: { "E-Class": 90, "S-Class": 100, "V-Class": 100, EQS: 100 },
      perKm: 3,
      rangeMargin: 25,
      airportSurcharge: 30,
    },
    vehicleDescription: `Mercedes MPV vehicles seat up to six passengers, when all seats
              are in use. Alternatively the seats can also be turned into a
              conference seating position at the clients request. The boot
              offers good luggage space.`,
    capacityImage: "/images/vehicles/capacity.png",
  },
  GB: {
    code: "GB",
    name: "United Kingdom",
    locale: "en-GB",
    currency: "GBP",
    dateFormat: "MM/DD/YYYY",
    vehicles: ["E-Class", "S-Class", "V-Class", "EQS"],
    pricing: {
      base: { "E-Class": 90, "S-Class": 100, "V-Class": 100, EQS: 100 },
      perKm: 6,
      rangeMargin: 15,
      airportSurcharge: 30,
    },
    vehicleDescription: `Mercedes MPV vehicles seat up to six passengers, when all seats
              are in use. Alternatively the seats can also be turned into a
              conference seating position at the clients request. The boot
              offers good luggage space.`,
    capacityImage: "/images/vehicles/capacity.png",
  },
  ES: {
    code: "ES",
    name: "Spain",
    locale: "es-ES",
    currency: "EUR",
    vehicles: ["E-Class", "S-Class", "V-Class", "EQS"],
    dateFormat: "DD/MM/YYYY",
    pricing: {
      base: { "E-Class": 90, "S-Class": 100, "V-Class": 100, EQS: 100 },
      perKm: 3,
      rangeMargin: 25,
      airportSurcharge: 0,
    },
    vehicleDescription: `Mercedes MPV vehicles seat up to six passengers, when all seats
              are in use. Alternatively the seats can also be turned into a
              conference seating position at the clients request. The boot
              offers good luggage space.`,
    capacityImage: "/images/vehicles/capacity.png",
  },
  NG: {
    code: "NG",
    name: "Nigeria",
    locale: "en-NG",
    currency: "NGN",
    dateFormat: "DD/MM/YYYY",
    vehicles: ["GAC GS4", "Toyota LC Prado"],
    pricing: {
      base: { "GAC GS4": 20000, "Toyota LC Prado": 50000 },
      perKm: 1500,
      rangeMargin: 5000,
      airportSurcharge: 0,
    },
    vehicleDescription: `The new Toyato Land Cruiser Prado is a full-size SUV that seats up to 5 passengers. 
    It is equipped with a powerful engine and advanced safety features, making it perfect for both city driving and off-road adventures.`,
    capacityImage: "/images/vehicles/t-prado-capacity.jpg",
  },
};

// Toyota Land Cruiser Prado | GAC GS4 |

const DEFAULT_COUNTRY = Object.keys(COUNTRY_MAP)[0] as CountryCode;

interface CountryContextValue {
  country: CountryInfo;
  setCountryByCode: (c: CountryCode) => void;
}

const CountryContext = createContext<CountryContextValue | null>(null);

export function CountryProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [country, setCountry] = useState<CountryInfo>(
    COUNTRY_MAP[DEFAULT_COUNTRY]
  );

  const storeCountry = (code: CountryCode) => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("country") !== code
    ) {
      localStorage.setItem("country", code);
    }
  };

  // On mount or whenever ?country= changes, or when no param but localStorage has one,
  // pick that; otherwise fall back to DEFAULT_COUNTRY.
  useEffect(() => {
    let code: CountryCode = DEFAULT_COUNTRY;

    const param = searchParams.get("country")?.toUpperCase() as CountryCode;

    if (param && COUNTRY_MAP[param]) {
      code = param;
      storeCountry(code);
    } else {
      const stored = (typeof window !== "undefined" &&
        localStorage.getItem("country")) as CountryCode;
      if (stored && COUNTRY_MAP[stored]) {
        code = stored;
      } else {
        storeCountry(code);
      }
    }

    setCountry(COUNTRY_MAP[code]);
  }, [searchParams]);

  const setCountryByCode = (c: CountryCode) => {
    const info = COUNTRY_MAP[c];
    setCountry(info);
    storeCountry(c);

    // update URL query param without full reload
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("country", c);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <CountryContext.Provider value={{ country, setCountryByCode }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("Country must be inside CountryProvider");
  return ctx;
}
