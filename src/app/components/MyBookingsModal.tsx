"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface Booking {
  id: number;
  name: string;
  time: string;
  image: string;
  status?: "Rescheduled" | "Declined";
}

interface MyBookingsModalProps {
  open: boolean;
  onClose: () => void;
}

export function MyBookingsModal({ open, onClose }: MyBookingsModalProps) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");

  if (!open) return null;

  const images = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  ];

  const todayBookings: Booking[] = [
    { id: 1, name: "Maria Miller", time: "11:00 am", image: images[0], status: "Rescheduled" },
    { id: 2, name: "Roger Korsgaard", time: "04:30 pm", image: images[1], status: "Declined" },
    { id: 3, name: "Anna Johnson", time: "03:00 pm", image: images[2], status: "Rescheduled" },
  ];

  const tomorrowBookings: Booking[] = [
    { id: 4, name: "David Lee", time: "10:00 am", image: images[3], status: "Declined" },
    { id: 5, name: "Emily Brown", time: "12:30 pm", image: images[4], status: "Rescheduled" },
  ];

  const historyBookings: Booking[] = [
    { id: 6, name: "Michael Scott", time: "09:00 am", image: images[5], status: "Declined" },
    { id: 7, name: "Pam Beesly", time: "01:30 pm", image: images[6], status: "Rescheduled" },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-6">
      <div className="bg-white rounded-2xl w-full max-w-[760px] h-[80vh] shadow-xl relative flex flex-col p-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold text-black">My Bookings</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "upcoming"
                ? "text-[#D2238B] border-b-2 border-[#D2238B]"
                : "text-[#717171]"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "history"
                ? "text-[#D2238B] border-b-2 border-[#D2238B]"
                : "text-[#717171]"
            }`}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
        </div>

        {/* Bookings Content */}
        <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
          {activeTab === "upcoming" ? (
            <>
              <Section title="Today" bookings={todayBookings} />
              <Section title="Tomorrow" bookings={tomorrowBookings} />
            </>
          ) : (
            <Section title="Completed Bookings" bookings={historyBookings} />
          )}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}

const Section = ({ title, bookings }: { title: string; bookings: Booking[] }) => {
  return (
    <div className="mb-6">
      <h3 className="text-[#4B5563] font-semibold text-sm mb-3">{title}</h3>
      <div className="bg-[#FAFAFA] rounded-lg overflow-hidden">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between px-4 py-3 border-b last:border-b-0 bg-white hover:bg-[#FAFAFA] transition"
          >
            <div className="flex items-center gap-3">
              <Image
                src={booking.image}
                alt={booking.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-black">{booking.name}</p>
                <p className="text-xs text-[#717171]">{booking.time}</p>
              </div>
            </div>

            {booking.status && (
              <div
                className={`px-2 py-1 rounded text-[11px] font-medium ${
                  booking.status === "Rescheduled"
                    ? "bg-[#FEEFCB] text-[#B37C00]"
                    : "bg-[#FDEAEA] text-[#D92D20]"
                }`}
              >
                {booking.status}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
