"use client";

import React from "react";
import Image from "next/image";

interface MenuRowProps {
  title: string;
  icon: string;
}

const MenuRow: React.FC<MenuRowProps> = ({ title, icon }) => {
  return (
  <div className="flex items-center text-[#2C2D3A] hover:text-black
   hover:bg-[#0000000e] cursor-pointer hover:px-2 transition-all justify-between w-full h-[44px] border-b border-[#E0E0E0]">
    <span className=" text-sm font-normal font-plus-jakarta">
      {title}
    </span>
    <Image src={icon} alt={title} width={16} height={16} />
  </div>
  );
};

export default MenuRow;
