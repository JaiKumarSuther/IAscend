"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface ProcessingPaymentModalProps {
  open: boolean;
  onClose: () => void;
}

export function ProcessingPaymentModal({
  open,
  onClose,
}: ProcessingPaymentModalProps) {
  const [dots, setDots] = useState<string>(".");

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ".";
        if (prev === "..") return "...";
        return "..";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[480px] p-6 relative shadow-xl text-center">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={16} />
          </button>
          <p className="text-base font-semibold">OTP Verification</p>
        </div>

        {/* Loader Icon */}
        <div className="flex justify-center">
          <Image
            src="/juspay-logo.svg"
            alt="Processing"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>

        {/* Animated Processing Text */}
        <p className="text-gray-600 font-medium mb-2">
          Processing your payment{dots}
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
