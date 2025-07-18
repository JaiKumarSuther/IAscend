"use client";

import { Camera, Clock } from "lucide-react";
import Image from "next/image";
import profile from "../../../public/assets/bottom-image.png";

export function BottomChatBar() {
  return (
    <section className="fixed bottom-0 left-0 right-0 z-40 bg-[#3A393CDB] backdrop-blur-[10px] px-4 lg:px-[53px] py-5 rounded-t-[20px]">
      {/* Label: Upcoming Sessions */}
      <div className="flex flex-row justify-between">
        <span className="text-[#BABABA] text-[14px] font-medium leading-[100%] ">
          Upcoming sessions
        </span>
        <span className="text-[#BABABA] text-[14px] font-medium leading-[100%] flex flex-row justify-center align-middle items-center">
          <Clock size={24} className="mr-2" /> in 10 mins
        </span>
      </div>

      <div className="flex items-center justify-between mt-5">
        {/* Expert Info */}
        <div className="flex items-center gap-3">
          <div className="w-[62px] h-[59px] rounded-[3px] overflow-hidden">
            <Image
              src={profile}
              alt="Expert"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[14px] lg:text-[16px] text-[#E7E7E7] font-semibold leading-[100%] font-['Plus_Jakarta_Sans'] truncate max-w-[180px]">
              Elevate Your Fitness Journey
            </span>
            <span className="text-[12px] lg:text-[14px] text-[#BABABA] font-medium leading-[100%] font-['Plus_Jakarta_Sans']">
              By Jane Doe
            </span>
          </div>
          {/* Join Now Button */}
          <button className="cursor-pointer flex items-center gap-[4px] lg:gap-[10px] bg-[#0ABA6E] text-white lg:text-[14px] text-[12px] font-medium px-2 lg:px-[9px] py-[2px] rounded-[6px] hover:bg-[#099a5d] transition-colors">
            Join Now
            <Camera className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
