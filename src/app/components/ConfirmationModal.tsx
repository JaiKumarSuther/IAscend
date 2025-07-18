import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
}

export function ConfirmationModal({ open, onClose }: ConfirmationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white rounded-2xl w-full max-w-[600px] p-8 shadow-xl text-center space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-3 text-left">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={18} />
          </button>
          <p className="font-semibold text-sm text-black">
            Feedback And Review
          </p>
        </div>

        {/* Checkmark Image */}
        <div className="flex justify-center">
          <Image
            src="/checkmark-icon.svg"
            alt="Success"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>

        {/* Message */}
        <p className="font-semibold text-base text-black">
          Your Session is Booked
        </p>

        {/* Session Details */}
        <div className="bg-[#F7F7F7] px-5 py-4 rounded-lg text-left text-sm space-y-3 mx-auto w-full max-w-[380px]">
          <DetailRow label="Specialist:" value="Maria Miller" />
          <DetailRow label="Date:" value="Dec 8, 2025" />
          <DetailRow label="Time:" value="12:30 pm" />
          <DetailRow label="Duration:" value="30 min" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 w-full max-w-[380px] mx-auto">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-[#D42066] text-[#D42066] text-sm font-semibold hover:bg-[#FFF0F5] transition"
          >
            Modify
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#D42066] to-[#D12498] text-white text-sm font-semibold hover:from-[#B01E75] hover:to-[#8C155A] transition"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="font-medium text-black">{value}</span>
    </div>
  );
}
