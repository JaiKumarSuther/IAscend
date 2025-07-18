'use client';
import React from "react";
import bg from "../../../public/assets/bg.png";
import logoIcon from "../../../public/assets/logo_text.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SplashScreen = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/register')
  }
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Full background image - fixed positioning and sizing */}
        <div className="fixed inset-0 w-full h-full -z-10">
          <Image
            src={bg}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Blur overlay circle - positioned to center the logo */}
        <div
          className="absolute w-[280px] h-[280px] lg:w-[342px] lg:h-[342px] top-[50px] lg:top-[140px] left-1/2 -translate-x-1/2 rounded-full z-10"
          style={{
            background: `
              radial-gradient(circle, rgba(174, 107, 255, 0.15) 0%, transparent 20%),
              radial-gradient(circle, rgba(174, 107, 255, 0.1) 20%, transparent 35%),
              radial-gradient(circle, rgba(174, 107, 255, 0.08) 35%, transparent 50%),
              radial-gradient(circle, rgba(174, 107, 255, 0.06) 50%, transparent 65%),
              radial-gradient(circle, rgba(174, 107, 255, 0.04) 65%, transparent 80%),
              radial-gradient(circle, rgba(174, 107, 255, 0.02) 80%, transparent 100%)
            `,
            backdropFilter: "blur(40px)",
          }}
        />
        <div
          className="absolute w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] top-[50px] lg:top-[140px] left-1/2 -translate-x-1/2 rounded-full z-10"
          style={{
            background: `
              radial-gradient(circle, rgba(174, 107, 255, 0.05) 0% 10%, transparent 10%),
              radial-gradient(circle, rgba(174, 107, 255, 0.04) 25% 35%, transparent 35%),
              radial-gradient(circle, rgba(174, 107, 255, 0.03) 50% 60%, transparent 60%),
              radial-gradient(circle, rgba(174, 107, 255, 0.02) 70% 80%, transparent 80%)
            `,
            backdropFilter: "blur(20px)",
          }}
        />

        {/* Content wrapper */}
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start z-20 px-4 lg:px-20">
          {/* Logo - centered within the blur circle */}
          <div className="absolute top-[125px] lg:top-[240px] left-1/2 -translate-x-1/2 z-30">
            <div className="w-[103px] h-[106px] relative">
              <Image
                src={logoIcon}
                alt="Logo Icon"
                width={103}
                height={106}
                className="drop-shadow-sm"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-[360px] lg:mt-[500px] w-full max-w-[404px] text-center">
            <h1 className="text-[32px] lg:text-[42px] leading-[130%] tracking-[1%] font-[300] text-[#341070]" >
              Step Into a World <br />
              of <span className="font-[400]">Mindfulness</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="mt-[50px] flex flex-col md:flex-row gap-6 w-full max-w-[737px] py-4 lg:py-4" onClick={handleClick}>
            {/* Card 1 */}
            <div className="w-full  md:w-[356.5px] h-[178px] rounded-[6px] p-5 flex flex-col justify-between gap-4 bg-gradient-to-br from-white/0 to-white/80 shadow-[0_4px_14px_0px_rgba(0,0,0,0.05)] transition-none hover:scale-[1.01] hover:shadow-md duration-0 cursor-pointer">
              <div className="flex flex-col gap-[12px]">
                <p className="text-[24px] font-[600] text-[#18151A] leading-none tracking-[100%]">
                  I&apos;m a Seeker
                </p>
                <p className="text-[16px] text-[#1B181D] leading-[24px] tracking-[0%] font-[400]">
                  Looking for guidance and support on my wellness journey
                </p>
                <div className="w-[28px] cursor-pointer h-[28px] p-[2px] flex items-center justify-center border rounded-full border-[#5E1CC91F] text-[#5E1CC9]">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[356.5px] h-[178px] rounded-[6px] p-5 flex flex-col justify-between gap-4 bg-gradient-to-br from-white/0 to-white/80 shadow-[0_4px_14px_0px_rgba(0,0,0,0.05)] transition-none hover:scale-[1.01] hover:shadow-md duration-0 cursor-pointer" onClick={handleClick}>
              <div className="flex flex-col gap-[12px]">
                <p className="text-[24px] font-[600] text-[#18151A] leading-none tracking-[100%]">
                  I&apos;m an Expert
                </p>
                <p className="text-[16px] text-[#1B181D] leading-[24px] tracking-[0%] font-[400]">
                  Ready to share my knowledge and help others thrive.
                </p>
                <div className="w-[28px] cursor-pointer h-[28px] p-[2px] flex items-center justify-center border rounded-full border-[#5E1CC91F] text-[#5E1CC9]">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
