"use client";

import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

interface PromotionalModalProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  {
    title: "Meditation for Inner Peace",
    rating: 4.6,
    price: "$120",
    image: "/assets/expert.jpg",
  },
  {
    title: "Yoga for spine",
    rating: 4.6,
    price: "$120",
    image: "/assets/expert.jpg",
  },
  // Add more if needed
];

export function PromotionalModal({ open, onClose }: PromotionalModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-[620px] p-6 relative shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <button onClick={onClose} className="text-black">
            <FaArrowLeft size={16} />
          </button>
          <p className="text-base font-semibold">Promotional cards</p>
        </div>

        {/* Subtitle */}
        <p className="font-semibold text-gray-800 mb-4">
          Discover more ways Maria can support your wellness journey!
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex w-[260px] h-[120px] bg-[#FAFAFA] rounded-xl overflow-hidden shadow-sm flex-shrink-0"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={120}
                className="w-[100px] h-[120px] object-cover"
              />
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm font-semibold text-black leading-snug">
                    {service.title}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    {service.rating}
                    <span className="ml-1 text-yellow-400">★</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#41C48B] font-semibold text-sm">
                    {service.price}
                  </span>
                  <button className="text-[12px] px-3 py-[4px] border border-[#F6CBE5] text-[#D2238B] font-medium rounded-md hover:bg-pink-50 transition">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Card */}
        <div className="border border-[#41C48B] rounded-xl p-3 flex items-center justify-between hover:shadow-sm transition cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="border-2 border-[#41C48B] text-[#41C48B] font-bold rounded-lg px-2 py-1 text-xs leading-tight text-center">
              20%<br />OFF
            </div>
            <div className="text-sm text-gray-700 font-medium">
              Recommend and get 20% off your next session!
            </div>
          </div>
          <svg
            className="w-4 h-4 text-[#41C48B]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
