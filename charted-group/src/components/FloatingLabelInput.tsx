// FloatingLabelInput.tsx
"use client";

import React, { forwardRef } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export interface FloatingLabelInputProps {
  label: string;
  id: string;
  value: string;
  required: boolean;
  onChange: (val: string) => void;
  placeholder?: string;
}

const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, id, value, required, onChange, placeholder }, ref) => (
  <div className="w-full mb-2">
    <FormControl variant="outlined" className="w-full">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        label={label}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        inputRef={ref}
      />
    </FormControl>
  </div>
));

FloatingLabelInput.displayName = "FloatingLabelInput";
export default FloatingLabelInput;
