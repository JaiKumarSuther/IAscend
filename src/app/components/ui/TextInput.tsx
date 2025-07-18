"use client";

import React from "react";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  disabled?: boolean;
}

export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
}: TextInputProps) {
  return (
    <div>
      {label && (
        <label className="text-sm font-medium text-gray-800">{label}</label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}  // ✅ string only
        className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2238B] disabled:bg-gray-100"
      />
    </div>
  );
}
