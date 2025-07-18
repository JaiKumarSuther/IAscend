"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  required?: boolean;
}

export function PasswordInput({
  label,
  value,
  onChange,
  placeholder,
  required,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-1 flex flex-col gap-[6px]">
      <label className="font-[500] text-[14px] leading-[20px] tracking-[0] text-[#1B181D]">
        {label}
      </label>
      <div className="relative">
        <Input
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className="pr-10 h-[44px] rounded-[4px] text-[16px] font-[400] leading-[24px] tracking-[0] border border-[#D4D3D5] focus-visible:ring-1 focus-visible:ring-gray-500 placeholder:text-[#716E72] text-black"
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-black cursor-pointer"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
