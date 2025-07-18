'use client'
import { useState } from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";

export function SatisfactionFeedbackModal() {
  const [selection, setSelection] = useState<"yes" | "no" | null>(null);

  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#D4206633] px-6 py-5 w-full text-center">
      <p className="text-sm font-medium text-[#1B1B1B] mb-4">
        Are You Satisfied with the Maria’s Answers?
      </p>

      <div className="flex justify-center gap-3">
        {/* Yes Button */}
        <button
          onClick={() => setSelection("yes")}
          className={`flex items-center gap-1 text-sm font-medium px-4 py-1.5 rounded-full transition ${
            selection === "yes"
              ? "bg-[#D3FDEB] text-[#0ABA6E]"
              : "bg-[#E9E9EA] text-[#1B1B1B] hover:bg-[#D4D4D4]"
          }`}
        >
          Yes
          <IoMdThumbsUp
            className={`w-4 h-4 ${
              selection === "yes" ? "text-[#0ABA6E]" : "text-[#1B1B1B]"
            }`}
          />
        </button>

        {/* No Button */}
        <button
          onClick={() => setSelection("no")}
          className={`flex items-center gap-1 text-sm font-medium px-4 py-1.5 rounded-full transition ${
            selection === "no"
              ? "bg-[#D3FDEB] text-[#0ABA6E]"
              : "bg-[#E9E9EA] text-[#1B1B1B] hover:bg-[#D4D4D4]"
          }`}
        >
          No
          <IoMdThumbsDown
            className={`w-4 h-4 ${
              selection === "no" ? "text-[#0ABA6E]" : "text-[#1B1B1B]"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
