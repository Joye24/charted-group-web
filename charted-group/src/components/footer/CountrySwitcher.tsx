"use client";
import { CountryCode, useCountry } from "@/app/context/CountryContext";
import React from "react";

export default function CountrySwitcher() {
  const { country, setCountryByCode } = useCountry();
  return (
    <select
      value={country.code}
      onChange={(e) => setCountryByCode(e.target.value as CountryCode)}
      className="rounded border px-2 py-1">
      <option value="IE">Ireland</option>
      <option value="ES">Spain</option>
      <option value="NG">Nigeria</option>
      <option value="SA">Saudi Arabia</option>
    </select>
  );
}
