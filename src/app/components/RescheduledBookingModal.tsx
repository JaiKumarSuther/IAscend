"use client";

interface RescheduledBookingModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
  specialist: string;
  date: string;
  time: string;
  duration: string;
}

export function RescheduledBookingModal({
  open,
  onAccept,
  onReject,
  specialist,
  date,
  time,
  duration,
}: RescheduledBookingModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[440px] p-6 sm:p-8 shadow-xl text-center">

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold mb-6">
          Rescheduled Booking Details
        </h2>

        {/* Booking Details */}
        <div className="bg-[#FAFBFF] rounded-lg p-4 text-left mb-8">
          <div className="flex justify-between text-sm font-medium text-[#7A7A7A] mb-3">
            <span>Specialist:</span>
            <span className="text-black">{specialist}</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-[#7A7A7A] mb-3">
            <span>Date:</span>
            <span className="text-black">{date}</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-[#7A7A7A] mb-3">
            <span>Time:</span>
            <span className="text-black">{time}</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-[#7A7A7A]">
            <span>Duration:</span>
            <span className="text-black">{duration}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onReject}
            className="w-full sm:w-[180px] h-[44px] rounded-md border border-[#D2238B] text-[#D2238B] font-semibold hover:bg-[#FFF5FB] transition"
          >
            Reject
          </button>
          <button
            onClick={onAccept}
            className="w-full sm:w-[180px] h-[44px] rounded-md bg-gradient-to-r from-[#D42066] to-[#D12498] text-white font-semibold hover:from-[#B01E75] hover:to-[#8C155A] transition"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}
