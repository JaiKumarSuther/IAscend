"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface AutoSliderProps {
  images: (string | StaticImageData)[];
  speed?: number;
}

export function AutoSlider({ images, speed = 30 }: AutoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      slider.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, speed);
    return () => clearInterval(interval);
  }, [speed]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden mt-20 lg:mt-12">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[210px] h-[210px] rounded-[12px] overflow-hidden"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Wellness activity ${index + 1}`}
              width={210}
              height={210}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
