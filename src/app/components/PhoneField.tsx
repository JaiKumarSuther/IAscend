"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

interface MobileInputProps {
  label: string;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  number: string;
  onNumberChange: (num: string) => void;
  required?: boolean;
}

export function MobileInput({
  label,
  countryCode,
  onCountryCodeChange,
  number,
  onNumberChange,
  required,
}: MobileInputProps) {
  return (
    <div className="space-y-1 flex flex-col gap-[6px]">
      <label className="font-[500] text-[14px] leading-[20px] tracking-[0] text-[#1B181D]">
        {label}
      </label>
      <div className="flex gap-[6px] justify-between">
        <div className="border border-[#D4D3D5] rounded-[4px]">
          <select
            value={countryCode}
            onChange={(e) => onCountryCodeChange(e.target.value)}
            className="w-[109px] h-[44px] rounded-[4px] pl-[14px] border-[#D4D3D5] text-[16px] font-[400] leading-[24px] tracking-[0] focus-visible:ring-1 focus-visible:ring-gray-500  text-black"
          >
            <option value="+1">US +1</option>
            <option value="+44">UK +44</option>
            <option value="+971">UAE +971</option>
          </select>
        </div>
        <Input
          type="tel"
          value={number}
          onChange={(e) => onNumberChange(e.target.value)}
          placeholder="Mobile Number"
          required={required}
          className={cn(
            "h-[44px] w-[237px] text-[16px] font-[400] leading-[24px] tracking-[0] rounded-[4px] border border-[#D4D3D5] focus-visible:ring-1 focus-visible:ring-gray-500 placeholder:text-[#716E72] text-black"
          )}
        />
      </div>
    </div>
  );
}
