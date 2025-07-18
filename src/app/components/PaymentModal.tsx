"use client";

import { useState } from "react";
import {
  FaApple,
} from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { ArrowLeft, ChevronRight } from "lucide-react";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  price: string;
  onProceed: () => void;   // ✅ Add this
}

export function PaymentModal({ open, onClose, price, onProceed }: PaymentModalProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>("1");
  const [savePrimary, setSavePrimary] = useState(true);

  const cards = [
    {
      id: "1",
      last4: "7509",
      holder: "MARIA MILLER",
      expiry: "02/30",
      color: "bg-gradient-to-br from-[#0E1328] to-[#1A2450]",
    },
    {
      id: "2",
      last4: "7509",
      holder: "MARIA MILLER",
      expiry: "02/30",
      color: "bg-gradient-to-br from-[#32004B] to-[#660063]",
    },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-[520px] rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center cursor-pointer gap-2 px-5 py-4 border-b">
          <button onClick={onClose} className="text-black">
            <ArrowLeft size={18} className="mt-1" />
          </button>
          <p className="font-medium">Payment</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Available Cards */}
          <div>
            <p className="font-semibold text-sm mb-4">
              Available Cards ({cards.length})
            </p>
            <div className="flex gap-2 flex-wrap">
              {cards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedCard(card.id)}
                  className={`flex-1 flex flex-col items-start rounded-2xl px-6 py-5 text-white relative shadow-lg transition-all ${
                    selectedCard === card.id ? "ring-2 ring-[#D2238B]" : ""
                  } ${card.color}`}
                >
                  <div className="flex justify-between w-full text-sm font-semibold mb-2">
                    <span className="tracking-widest text-lg font-bold">
                      VISA
                    </span>
                    <FaWifi className="rotate-90 opacity-80" size={20} />
                  </div>
                  <div className="tracking-widest mb-3">**** {card.last4}</div>
                  <div className="flex justify-between w-full items-end text-xs font-normal opacity-80">
                    <div>
                      <p className="text-gray-400 mb-0.5">Card holder name</p>
                      <p className="font-medium text-left text-white">
                        {card.holder}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 mb-0.5">Expiry date</p>
                      <p className="font-medium text-white">{card.expiry}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Save as primary toggle */}
          <div className="flex items-center justify-between">
            <p>Save as primary Card</p>
            <button
              onClick={() => setSavePrimary(!savePrimary)}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                savePrimary ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                  savePrimary ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Add New Card */}
          <button className="w-full flex items-center justify-center gap-2 py-3 border-1 border-[#D2238B] text-[#D2238B] rounded-xl bg-[#FFF5FB] hover:bg-[#D2238B] hover:text-white transition-colors">
            <CiSquarePlus size={20} />
            Add new card
          </button>

          {/* Apple Pay */}
          <button className="w-full flex justify-between items-center px-4 py-3 bg-[#F5F6F7] hover:bg-[#E9EAEB] rounded-xl text-sm font-medium transition">
            <div className="flex items-center gap-1 text-black">
              <span>Pay with</span>
              <FaApple size={14} className="mt-[2px]" />
              <span className="font-bold text-lg ">Pay</span>
            </div>

            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Footer */}
        <div
          className="flex justify-between items-center px-6 py-4 border-t bg-white"
          style={{
            boxShadow: "0px -6px 12px rgba(0, 0, 0, 0.12)",
          }}
        >
          <p className="font-bold text-[#0ABA6E] text-lg">
            ${price}
            <span className="ml-1 font-normal text-[#827F83]">/ Session</span>
          </p>
          <button
        onClick={onProceed}  // ✅ Call onProceed to trigger confirmation modal
        className={`px-6 md:px-10 py-2 rounded-sm font-semibold text-white ${
          selectedCard
            ? "bg-gradient-to-r from-[#D42066] to-[#D12498]"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!selectedCard}
      >
        Proceed to Pay
      </button>
        </div>
      </div>
    </div>
  );
}
