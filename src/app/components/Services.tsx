"use client";

import { Star, Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  name: string;
  rating: number;
  reviews?: number;
  title: string;
  price: string;
  image: string | StaticImageData;  // ✅ Allow both
  isTopExpert?: boolean;
  duration?: string;
  author?: string;
  onBookClick?: () => void;
  onClick?: () => void;
}

export function ServiceCard({
  name,
  rating,
  title,
  price,
  image,
  isTopExpert = false,
  duration = "10 mins",
  author = "Maria Miller",
  onBookClick,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-[15px] flex overflow-hidden cursor-pointer hover:shadow-md transition"
    >
      <div className="relative w-[120px] flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="w-full h-full object-cover"
        />
        {isTopExpert && (
          <div className="w-[80px] flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2 mb-1 p-1 bg-white text-black text-[10px] font-medium rounded">
            Top Expert
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 py-3">
        <p className="text-sm font-semibold text-black">{title}</p>
        <p className="text-xs text-gray-500">By {author}</p>

        <div className="flex items-center gap-1 text-sm text-black font-medium mt-1">
          {rating.toFixed(1)}
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>

        <div className="flex items-center text-sm text-[#787878] gap-1 mt-1">
          <Clock className="w-[14px] h-[14px]" />
          in {duration}
        </div>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-[14px] font-semibold text-[#41C48B]">
            {price}$
            <span className="text-[#4C484E] font-normal text-sm"> / Session</span>
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookClick?.();
            }}
            className="text-[12px] px-3 py-[4px] border border-[#F6CBE5] text-[#D2238B] font-medium rounded-md hover:bg-pink-50 transition"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
