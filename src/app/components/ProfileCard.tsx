"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileCard() {
  const router = useRouter();
  return (
    <div className="relative bg-white mt-20 pt-20 rounded-xl p-6 w-full mx-auto text-center shadow-sm">
      {/* Profile Image */}
     

      {/* Name & Title */}
      <h2 className="font-semibold text-lg text-black">Maria Miller</h2>
      <p className="text-sm text-[#969696] font-semibold mb-6">Doctor of Oriental Medicine</p>

      {/* Stats */}
      <div className="flex justify-center text-black gap-8 text-sm font-semibold mb-6">
        <div>
          <p className="text-2xl font-semibold">500</p>
          <p className="font-semibold">Sessions</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">120</p>
          <p className="font-semibold">Questions</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">100+</p>
          <p className="font-semibold">Services</p>
        </div>
      </div>

      {/* Buttons */}
      <button className="w-full border border-pink-500 text-pink-500 rounded-md py-2 text-sm font-medium mb-3 hover:bg-pink-50 transition"
      onClick={() => router.push('/chat')}>
        Ask Question
      </button>
      <button className="w-full bg-gradient-to-r from-[#D42066] to-[#D12498] text-white rounded-md py-2 text-sm font-medium" >
        Book
      </button>
       <div className="absolute top-0 translate-[-50%] left-[50%] w-30 h-30 mx-auto mb-4">
        <Image
          src="/assets/profile.png" // Replace with your actual profile image
          alt="Maria Miller"
          fill
          className="rounded-full object-cover"
        />
        {/* Rating Badge */}
        <div className="absolute -bottom-1 right-0 bg-black text-white rounded-full px-1 py-0.5 text-xs flex items-center gap-1">
          <span>4.6</span>
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>
    </div>
  );
}
