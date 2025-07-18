"use client";

import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ExpertCardProps {
  name: string;
  rating: number;
  reviews: number;
  title: string;
  price: string;
  image: string | StaticImageData;
  isTopExpert?: boolean;
}

export function ExpertCard({
  name,
  rating,
  title,
  price,
  image,
  isTopExpert = false,
}: ExpertCardProps) {
  return (
    // <div className="w-full max-w-[433px] h-[212px] bg-white rounded-[15px] flex flex-row gap-6 p-0 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-full bg-white  h-[212px] rounded-[15px] flex flex-row gap-6 p-0 transform hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300 ease-in-out">
      {/* Left: Profile Image */}
      <div className="relative w-[138px] h-[213px] rounded-l-[15px] rounded-b-[15px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />

        {/* Top Expert Badge */}
        {isTopExpert && (
          <div className="absolute left-3 bottom-2 bg-white px-4 rounded-sm">
            Top Expert
          </div>
        )}
      </div>

      {/* Right: Details */}
      <div className="flex flex-col justify-between py-[12px] pr-[12px] w-[calc(100%-138px)]">
        <div className="space-y-[8px] w-[155px] h-[180px]">
          <h3 className="text-[16px] font-semibold text-[#000000] leading-[100%] ">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-[3px] text-[14px] text-[#FFCB45] font-semibold">
            <span className="text-[#000000] font-semibold">
              {rating.toFixed(1)}{" "}
            </span>
            <Star className="w-[14px] h-[13px]" fill="currentColor" />
          </div>

          {/* Title */}
          <p className="text-[13px] text-[#4C484E] font-normal leading-[100%]">
            {title}
          </p>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-[14px] font-semibold text-emerald-600">
            ${price}{" "}
            <span className="text-gray-500 font-normal">/ Session</span>
          </span>
        </div>
      </div>
    </div>
  );
}
