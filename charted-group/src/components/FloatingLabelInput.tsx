import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

interface FloatingLabelInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string; // optional
}

/**
 * MUI OutlinedInput with built-in floating label
 */
export default function FloatingLabelInput({ label, id, value, onChange, placeholder }: FloatingLabelInputProps) {
  return (
    <div className="w-full mb-2">
      <FormControl
        variant="outlined"
        className="w-full">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <OutlinedInput
          id={id}
          label={label} // This wires up the floating label
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </FormControl>
    </div>
  );
}
