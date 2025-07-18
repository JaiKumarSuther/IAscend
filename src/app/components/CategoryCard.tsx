"use client";

import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  title: string;
  image: string | StaticImageData;
  onClick?: () => void;
}

export function CategoryCard({ title, image, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center rounded-lg transition-shadow cursor-pointer group"
    >
      <div className="w-[150px] h-[150px] rounded-[12px] overflow-hidden mb-2 group-hover:scale-105 transition-transform">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-[#000000] p-1 text-center text-[16px] leading-[100%] tracking-[0%] font-medium">
        {title}
      </span>
    </div>
  );
}
