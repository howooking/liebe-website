"use client";

import { CLINICS } from "@/constants/clinic";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useCallback } from "react";

export default function Slider() {
  const { width } = useWindowSize();
  const getImageSize = useCallback(() => {
    if (!width) {
      return "h-[600px] w-[450px]";
    }
    if (width >= 1280) {
      return "h-[600px] w-[450px]";
    }
    if (width < 1280 && width >= 1024) {
      return "h-[520px] w-[390px]";
    }
    if (width < 1024 && width >= 768) {
      return "h-[440px] w-[330px]";
    }
    if (width < 768) {
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

    if (width < 1280 && width >= 600) {
      return 2.1;
    }
    if (width < 600 && width >= 300) {
      return 1.1;
    }
    if (width < 300) {
      return 1;
    }
  }, [width]);

  return (
    <Carousel
      withoutControls
      slidesToShow={slidesToShow()}
      className="cursor-grab"
    >
      {CLINICS.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "relative my-10 transition duration-300 hover:scale-[1.01]",
            getImageSize(),
          )}
        >
          <Image
            key={slide.title}
            quality={70}
            src={slide.imgSrc}
            alt={`slide-${index + 1}`}
            placeholder="blur"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-t from-black/50 via-black/20 to-black/0 p-4 text-white md:gap-4 md:p-8 lg:gap-8">
            <div className="flex items-center gap-1 text-lg md:text-xl lg:gap-2 lg:text-3xl xl:text-4xl">
              <slide.Icon />
              <p>{slide.title}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {slide.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border px-2 py-1 text-xs md:text-sm"
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
