"use client";

import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";


interface SuccessModalProps {
  open: boolean;
  title: string;
  message: string;
  subMessage?: string;
  noteBelowImage?: React.ReactNode;
  imageSrc: string;
  onClose: () => void;
}

export function SuccessModal({
  open,
  title,
  message,
  subMessage,
  noteBelowImage,
  imageSrc,
  onClose,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[500px] text-center p-6 relative shadow-xl animate-scale-in">
        {/* Header */}
        <div className="flex items-center gap-2 absolute top-4 left-4">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={16} />
          </button>
          <p className="text-sm font-semibold">{title}</p>
        </div>

        {/* Image */}
        <div className="mt-10 mb-4">
          <Image
            src={imageSrc}
            alt="Success"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto"
          />
        </div>

        {/* Optional Note Below Image */}
        {noteBelowImage && (
          <p className="text-[10px] text-gray-400 mb-1">{noteBelowImage}</p>
        )}

        {/* Main Message */}
        <p className="text-base font-semibold text-black mt-1">{message}</p>

        {/* Sub Message */}
        {subMessage && (
          <p className="text-sm text-gray-500 mt-1">{subMessage}</p>
        )}
      </div>
    </div>
  );
}
