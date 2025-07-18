import React from "react";
import { AutoSlider } from "./AutoSlider";
import logoIcon from "../../../public/assets/logo.png";
import slider1 from "../../../public/assets/s1.png";
import slider2 from "../../../public/assets/s2.png";
import slider3 from "../../../public/assets/s3.png";
import slider4 from "../../../public/assets/s4.png";
import slider5 from "../../../public/assets/s5.png";
import slider6 from "../../../public/assets/s6.png";
import slider7 from "../../../public/assets/s7.png";

import Image from "next/image";

const SliderPage = () => {
  const sliderImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-[266px] h-[266px]  backdrop-blur-[164px] flex items-center justify-center rounded-full">
            <div className="w-[65px] h-[64px]">
              <Image src={logoIcon} alt="Logo Icon" width={64} height={64} />
            </div>
          </div>
          {/* Heading */}
          <div className=" w-full max-w-[939px] text-center h-full px-2 lg:px-0">
            <h1 className="text-[32px] lg:text-[42px] leading-[60px] tracking-[-2%] font-[400] text-[#18151A]">
              We aim to help you connect with your inner self and embrace your
              best life.
            </h1>
          </div>
        </div>

        {/* Auto-running Image Slider */}
        <div>
          <AutoSlider images={sliderImages} speed={25} />
        </div>

        {/* Optional bottom spacing */}
        <div className="h-16 lg:h-24" />
      </div>
    </section>
  );
};

export default SliderPage;
