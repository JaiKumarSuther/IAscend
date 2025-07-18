"use client";

import React from "react";
import Image from "next/image";
import image1 from "../../../public/assets/image1.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 px-4 py-4 lg:px-10 lg:py-10">
      {/* Ellipse Decoration */}
      <div
        className="absolute -top-[137px] -left-[137px] w-[368px] h-[368px] rounded-full opacity-30 backdrop-blur-[284px] z-0"
        style={{
          background: "radial-gradient(circle, #A126E8CC 0%, transparent 60%)",
        }}
      />

      <main className="relative z-10 min-h-[884px] flex flex-col lg:flex-row">
        {/* Left: Form content */}
        <section className="flex-1 flex items-center justify-start">
          <div className="w-full max-w-[361px] mx-auto space-y-5">
            {children}
          </div>
        </section>

        {/* Right: Image */}
        <section className="hidden lg:block flex-1">
          <div className="h-full max-w-[693px] rounded-[30px] overflow-hidden">
            <Image
              src={image1}
              alt="Decorative"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
