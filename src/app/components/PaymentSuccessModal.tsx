"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface PaymentSuccessModalProps {
  open: boolean;
  onClose: () => void;
  amount?: string;
}

export function PaymentSuccessModal({
  open,
  onClose,
  amount = "$20",
}: PaymentSuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[480px] p-6 relative shadow-xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/success-checkmark.svg" // Replace with your image
            alt="Payment Success"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>

        {/* Juspay Branding */}
        <div className="flex justify-center items-center text-[11px] text-gray-400 gap-1 mb-2">
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

        {/* Payment Confirmation Message */}
        <p className="text-black font-semibold text-sm">
          {amount} payment completed successfully!
        </p>
      </div>
    </div>
  );
}
