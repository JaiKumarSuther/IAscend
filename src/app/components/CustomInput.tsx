"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";


interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextInput({ label, className, ...props }: TextInputProps) {
  return (
    <div className="space-y-1 flex flex-col gap-[6px]">
      <label className="font-[500] text-[14px] leading-[20px] tracking-[0] text-[#1B181D]">
        {label}
      </label>
      <Input
        {...props}
        className={cn(
          "h-[44px] text-[16px] font-[400] leading-[24px] tracking-[0] rounded-[4px] border border-[#827F83] focus-visible:ring-1 focus-visible:ring-gray-500 placeholder:text-[#27222A] text-[#27222A]",
          className
        )}
      />
    </div>
  );
}
