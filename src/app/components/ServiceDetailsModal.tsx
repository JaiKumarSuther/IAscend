"use client";

import { Clock, Star, X } from "lucide-react";
import Image from "next/image";

interface ServiceDetailsModalProps {
  open: boolean;
  onClose: () => void;
  onAskQuestion: () => void;   // ✅ Added callback
  service: {
    image: string;
    title: string;
    price: string;
    description: string;
    duration?: string;
    author?: string;
    level?: string;
  } | null;
}

export function ServiceDetailsModal({
  open,
  onClose,
  onAskQuestion,   // ✅ Accept as prop
  service,
}: ServiceDetailsModalProps) {
  const isVisible = open && service;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0000003f] backdrop-blur-sm"
      />

      {/* Side Panel */}
      <div
        className={`relative h-full w-[90%] max-w-[420px] bg-[#F1F1F1] shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {service && (
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Image */}
            <div className="relative">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-0 flex justify-end p-3">
                <button
                  onClick={onClose}
                  className="text-gray-600 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="absolute top-0 m-3 right-0 bg-black text-white rounded-sm px-3 py-0.5 text-xs flex items-center gap-1">
                <span>4.6</span>
                <Star size={10} className="text-yellow-400 fill-yellow-400" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md px-4 py-4 flex items-center justify-between text-white">
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold">{service.title}</h3>
                  <p className="text-xs opacity-80">{service.author}</p>
                  <div className="flex items-center text-xs opacity-80 mt-1 space-x-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                    <span>|</span>
                    <span>{service.level}</span>
                  </div>
                </div>
                <p className="text-[#41C48B] font-bold text-lg whitespace-nowrap">
                  {service.price}$
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 flex-1">
              <p className="text-[#717171] leading-relaxed text-sm mb-6">
                {service.description}
              </p>
            </div>

            {/* Actions */}
            <div className="px-6 pb-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  onAskQuestion();  // ✅ Trigger external modal open
                }}
                className="w-full py-3 rounded-lg border border-[#F6CBE5] text-[#D2238B] font-medium hover:bg-[#F6CBE5]/20 transition-colors"
              >
                Ask Question
              </button>
              <button className="w-full py-3 rounded-lg bg-[#D2238B] text-white font-semibold hover:bg-[#B01E75] transition-colors">
                Book
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
