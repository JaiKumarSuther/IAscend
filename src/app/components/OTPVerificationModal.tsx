"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface OTPVerificationModalProps {
  open: boolean;
  onClose: () => void;
  onCompleted: () => void; 
}

export function OTPVerificationModal({
  open,
  onClose,
  onCompleted,  // ✅ Fix: Include this prop
}: OTPVerificationModalProps){
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (open && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [open, timer]);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }

      // ✅ If all digits filled, trigger processing modal
      if (newOtp.every((digit) => digit !== "")) {
        setTimeout(() => {
          onCompleted();
        }, 300); // Slight delay for better UX
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) (prevInput as HTMLInputElement).focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("Text").replace(/\D/g, ""); // digits only
    if (pasteData.length > 0) {
      const pastedOtp = pasteData.slice(0, otp.length).split("");
      setOtp((prev) => {
        const updated = [...prev];
        for (let i = 0; i < pastedOtp.length; i++) {
          updated[i] = pastedOtp[i];
        }
        return updated;
      });

      // Focus last filled input
      const lastIndex = Math.min(pastedOtp.length, otp.length) - 1;
      const nextInput = document.getElementById(`otp-input-${lastIndex}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[480px] p-6 relative shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={16} />
          </button>
          <p className="text-base font-semibold">OTP Verification</p>
        </div>

        {/* Message */}
        <p className="font-semibold text-black text-center mb-6">
          OTP sent to linked mobile number
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center items-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 aspect-square rounded-lg bg-gray-100 text-center font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <p className="text-center text-sm text-gray-500 mb-2">
          Resend OTP in{" "}
          <span className="font-semibold text-black">
            00:{timer < 10 ? `0${timer}` : timer}s
          </span>
        </p>

        {/* Juspay Branding */}
        <div className="flex justify-center items-center text-[11px] text-gray-400 gap-1 mt-1">
          secured by
          <Image
            src="/juspay-logo.svg"
            alt="Juspay"
            width={14}
            height={17}
            className="object-contain"
          />
          <span className="text-[#0088FF] font-semibold">JUSPAY</span>
        </div>
      </div>
    </div>
  );
}

