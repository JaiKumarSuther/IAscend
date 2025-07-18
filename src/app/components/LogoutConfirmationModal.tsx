"use client";

import Image from "next/image";

interface LogoutConfirmationModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function LogoutConfirmationModal({
  open,
  onCancel,
  onConfirm,
}: LogoutConfirmationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[440px] p-6 sm:p-8 shadow-xl text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="p-2">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">
          Are you sure you want to log out?
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          We’ll miss you, and you might miss out on becoming the wellness expert
          you’ve always wanted to be. Stay a little longer to unlock your best self!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onCancel}
            className="w-full sm:w-[180px] h-[44px] rounded-md border border-[#D2238B] text-[#D2238B] font-semibold hover:bg-[#FFF5FB] transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full sm:w-[180px] h-[44px] rounded-md bg-gradient-to-r from-[#D42066] to-[#D12498] text-white font-semibold hover:from-[#B01E75] hover:to-[#8C155A] transition"
          >
            Log out
          </button>
        </div>

      </div>
    </div>
  );
}
