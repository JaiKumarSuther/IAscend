"use client";

import { useState } from "react";
import { Video, Phone, ArrowLeft } from "lucide-react";

interface BookingSlotsModalProps {
  open: boolean;
  onClose: () => void;
  expertName: string;
  price: string;
  onBook: () => void; // ✅ Add this
}

export function BookingSlotsModal({
  open,
  onClose,
  expertName,
  price,
  onBook,   // ✅ Destructure it here
}: BookingSlotsModalProps) {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [sessionType, setSessionType] = useState("Audio");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const dates = ["Today", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan"];

  const slotsByDate: Record<string, string[]> = {
    Today: [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM (Sold Out)",
      "11:00 AM",
      "11:30 AM",
    ],
    "11 Jan": [
      "10:00 AM",
      "10:30 AM (Sold Out)",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM (Sold Out)",
    ],
    "12 Jan": [
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM (Sold Out)",
      "3:00 PM",
      "3:30 PM",
    ],
    "13 Jan": [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM (Sold Out)",
      "1:00 PM",
      "2:00 PM",
    ],
    "14 Jan": [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM (Sold Out)",
      "2:00 PM",
      "3:00 PM",
    ],
    "15 Jan": [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM (Sold Out)",
      "11:00 AM",
      "11:30 AM",
    ],
  };

  const slots = slotsByDate[selectedDate] || [];

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot.includes("Sold Out") ? null : slot);
  };

  const isVisible = open;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0000003f] backdrop-blur-sm"
      />

      <div
        className={`relative h-full w-[90%] max-w-[420px] bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F5E7FF] to-[#FAF9FA] p-6 pb-4 border-b min-h-[140px] flex flex-col justify-between">
          <button
            onClick={onClose} // ← Navigates back to service modal
            className="flex items-center text-black font-medium text-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </button>
          <h2 className="text-[18px] leading-[22px] font-medium text-black">
            Reserve Your Spot with{" "}
            <span className="font-bold">{expertName}</span>
          </h2>
        </div>

        {/* Date Selector */}
        <div className="flex border-b overflow-x-auto">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => {
                setSelectedDate(date);
                setSelectedSlot(null); // reset slot on date change
              }}
              className={`py-3 px-4 text-sm font-medium whitespace-nowrap ${
                selectedDate === date
                  ? "text-[#D2238B] border-b-2 border-[#D2238B]"
                  : "text-gray-500"
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-6 flex-1 overflow-y-auto">
          {/* Session Type */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Session Type</h4>
            <div className="flex gap-4">
              {["Audio", "Video"].map((type) => {
                const isSelected = sessionType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setSessionType(type)}
                    className={`flex flex-col items-center justify-center gap-2 w-[70px] h-[80px] rounded-lg font-medium border text-[14px] transition-all duration-200 ${
                      isSelected
                        ? "bg-[#D2238B] text-white border-[#D2238B]"
                        : "border-[#F6CBE5] text-[#D2238B] bg-white"
                    }`}
                  >
                    {type === "Audio" ? (
                      <Phone
                        size={24}
                        className={`${
                          isSelected ? "text-white" : "text-[#D2238B]"
                        }`}
                      />
                    ) : (
                      <Video
                        size={24}
                        className={`${
                          isSelected ? "text-white" : "text-[#D2238B]"
                        }`}
                      />
                    )}
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Duration Selector */}
          <div>
            <h4 className="font-medium text-sm mb-2">Session Duration</h4>
            <div className="grid grid-cols-3 gap-2">
              {["30 Min", "60 Min", "1hr 30Min"].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`py-2 text-sm border rounded-lg text-center ${
                    selectedDuration === duration
                      ? "bg-[#D2238B] text-white border-[#D2238B]"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* Available Slots */}
          <div>
            <h4 className="font-medium text-sm mb-2">Available Slots</h4>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot, index) => {
                const soldOut = slot.includes("Sold Out");
                const selected = selectedSlot === slot;
                return (
                  <button
                    key={index}
                    disabled={soldOut}
                    onClick={() => handleSlotSelect(slot)}
                    className={`py-2 text-xs border rounded-lg text-center ${
                      soldOut
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                        : selected
                        ? "bg-[#D2238B] text-white border-[#D2238B]"
                        : "text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col p-4 border-t gap-3 justify-between shadow-[0_-6px_12px_0_rgba(0,0,0,0.12)]">
          <div>
            <p className="text-sm text-[#18151A] font-medium">
              {selectedDate}, 10 Jan 2024
            </p>
            <p className="text-sm text-[#827F83] font-medium">
              {selectedSlot ? selectedSlot : "Select Slot"} IST
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <span className="text-[#41C48B] font-bold text-lg">${price}</span>
              <span className="text-sm text-gray-500">/ Session</span>
            </div>

            <button
              disabled={!selectedSlot}
              onClick={onBook} // ✅ Fire when clicked
              className={`px-20 py-2 rounded-lg text-white ${
                selectedSlot
                  ? "bg-gradient-to-r from-[#D42066] to-[#D12498] hover:from-[#B01E75] hover:to-[#8C155A]"
                  : "bg-gray-300 cursor-not-allowed"
              } transition`}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
