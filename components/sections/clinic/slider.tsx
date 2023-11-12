"use client";

import { CLINICS } from "@/constants/clinic";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useCallback, useState } from "react";

export default function Slider() {
  const { width } = useWindowSize();
  const [isGrabbed, setIsGrabbed] = useState(false);

  const getImageSize = useCallback(() => {
    if (!width) {
      return "h-[10] w-[100px]";
    }
    if (width >= 1024) {
      return "h-[600px] w-[450px]";
    }
    if (width < 1024 && width >= 768) {
      return "h-[520px] w-[390px]";
    }
    if (width < 768 && width >= 640) {
      return "h-[440px] w-[330px]";
    }
    if (width < 640) {
      return "h-[360px] w-[270px]";
    }
  }, [width]);

  const slidesToShow = useCallback(() => {
    if (!width) {
      return 1;
    }
    if (width >= 1280) {
      return 3.1;
    }
    if (width < 1280 && width >= 1024) {
      return 2.1;
    }
    if (width < 1024 && width >= 768) {
      return 1.8;
    }
    if (width < 768 && width >= 640) {
      return 1.7;
    }
    if (width < 640) {
      return 1.15;
    }
  }, [width]);

  return (
    <div
      className={cn(isGrabbed ? "cursor-grabbing" : "cursor-grab")}
      onMouseDown={() => setIsGrabbed(true)}
      onMouseUp={() => setIsGrabbed(false)}
    >
      <Carousel
        withoutControls
        slidesToShow={slidesToShow()}
        cellAlign="center"
        slideIndex={width! < 1280 ? 0 : 1}
      >
        {CLINICS.map((slide, index) => (
          <div key={index} className={cn("relative", getImageSize())}>
            <Image
              key={slide.title}
              quality={70}
              src={slide.imgSrc}
              alt={`slide-${index + 1}`}
              placeholder="blur"
              fill
              priority
              className="object-cover object-center"
              sizes='(max-width: 345px) 90vw, (max-width: 691px) 50vw, 25vw"'
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-black/50 via-black/20 to-black/0 p-4 text-white">
              <div className="flex items-center gap-1 text-xl">
                <slide.Icon />
                <p>{slide.title}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {slide.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border px-2 py-1 text-sm md:text-sm"
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
