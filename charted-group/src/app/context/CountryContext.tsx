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

export type CountryCode = "IE" | "ES" | "NG" | "SA"; // etc

interface CountryInfo {
  code: CountryCode;
  locale: string;
  currency: string;
  dateFormat: string;
}

const COUNTRY_MAP: Record<CountryCode, CountryInfo> = {
  IE: {
    code: "IE",
    locale: "en-IE",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
  },
  ES: {
    code: "ES",
    locale: "es-ES",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
  },
  NG: {
    code: "NG",
    locale: "en-NG",
    currency: "NGN",
    dateFormat: "DD/MM/YYYY",
  },
  SA: {
    code: "SA",
    locale: "ar-SA",
    currency: "SAR",
    dateFormat: "MM/DD/YYYY",
  },
};

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
