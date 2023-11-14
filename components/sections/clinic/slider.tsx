"use client";

import { CLINICS } from "@/constants/clinic";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useCallback, useState } from "react";

export default function Slider() {
  const [isGrabbed, setIsGrabbed] = useState(false);

  return (
    <div
      className={cn(isGrabbed ? "cursor-grabbing" : "cursor-grab", "w-1/2")}
      onMouseDown={() => setIsGrabbed(true)}
      onMouseUp={() => setIsGrabbed(false)}
    >
      <Carousel withoutControls dragging swiping>
        {CLINICS.map((slide, index) => (
          <div key={index}>
            <Image
              key={slide.title}
              quality={70}
              src={slide.imgSrc}
              alt={`slide-${index + 1}`}
              placeholder="blur"
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-1  p-4 text-white">
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
