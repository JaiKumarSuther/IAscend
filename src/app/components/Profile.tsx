"use client";
import React, { useState } from "react";

import { categoriesCard, experts } from "@/Utils/dummy";
import { CategoryCard } from "./CategoryCard";
import { ExpertCard } from "./ExpertCard";
import { BottomChatBar } from "./BottomBar";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 bg-[#ECE5F0] h-full px-4 py-6 lg:px-10">
      <section className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        {/* Left: Greeting */}
        <div>
          <p className="text text-black">Good Evening</p>
          <h1 className="text-2xl font-bold text-black">Jenny Wilson</h1>
        </div>

        {/* Right: My Bookings Button */}
        <button className="w-full sm:w-auto border border-[#D22282] text-[#D22282] bg-white px-6 py-2 rounded-md font-medium hover:bg-[#D22282] hover:text-white transition" 
        onClick={() => router.push('/booking')}>
          My Bookings
        </button>
      </section>

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search Categories"
          className="w-full bg-[#DBCFE1] placeholder-[#828282] text-black rounded-lg py-3 pl-4 pr-10 text-sm outline-none"
        />
        <Search
          size={16}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#828282]"
        />
      </div>
      <section className="w-full">
        {/* Connect Section */}

        <p className="text-[#000000] text-[14px] lg:text-[16px] leading-[140%] sm:leading-[100%] tracking-[0%] font-medium text-center lg:text-left">
          Connect with top experts and get tailored advice via video call!
        </p>

        {/* Categories Grid */}

        <div className="mt-8 lg:mt-4 flex flex-wrap gap-[12px] md:justify-start ">
          {categoriesCard.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </section>
      <section className="w-full overflow-hidden">
        <p className="text-[#000000] text-[20px] lg:text-[24px] leading-[100%] tracking-[0%] font-bold">
          Top Experts
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {experts.map((expert) => (
            <ExpertCard key={expert.name} {...expert} />
          ))}
        </div>
      </section>
      {/* Bottom Chat Bar */}
      {/* <BottomChatBar /> */}

      {/* Floating Button: Show UP arrow when bar is hidden */}

      {/* Floating Toggle Button */}
      {!isOpen ? (
        // When session is closed — show "Upcoming Session" button (lower)
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-[#3A393CDB] backdrop-blur-[10px]  cursor-pointer text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <span className="text-sm font-medium">Upcoming Session</span>
            <ChevronUp size={18} />
          </button>
        </div>
      ) : (
        <div className="fixed bottom-[100px] right-[50%] z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center cursor-pointer rounded-full text-white p-2 hover:scale-105 transition-all"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      )}

      {/* Bottom Chat Bar with DOWN arrow */}
      {isOpen && <BottomChatBar />}
    </div>
  );
}
