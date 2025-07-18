"use client";

import { Star, Pencil } from "lucide-react";

interface ReviewSummaryProps {
  totalReviews: number;
  averageRating: number;
  breakdown: { stars: number; percentage: number }[];
}

export function ReviewsSummary({
  totalReviews,
  averageRating,
  breakdown,
}: ReviewSummaryProps) {
  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium text-black">{totalReviews} Reviews</p>
          <div className="flex items-center gap-1 text-sm text-black font-semibold">
            {averageRating.toFixed(1)}
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={
                  index < Math.round(averageRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-[#a9a9a9] fill-[#a9a9a9]"
                }
              />
            ))}
          </div>
        </div>

        <button className="flex items-center gap-1 text-pink-600 text-sm font-medium hover:underline">
          <Pencil size={16} />
          Add Review
        </button>
      </div>

      {/* Breakdown */}
      <div className="space-y-2">
        {breakdown.map((item) => (
          <div key={item.stars} className="flex items-center gap-3">
            <span className="w-10 text-sm text-black">{item.stars} Star</span>
            <div className="flex-1 bg-[#EDEDED] rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#D22282] h-2 rounded-full"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <span className="w-8 text-sm text-black text-right">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
