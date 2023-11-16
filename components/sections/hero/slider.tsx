"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SLIDES } from "@/constants/slides";
import Copy from "./copy";

export default function Slider() {
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 6000 }}>
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.title}>
          <Image
            src={slide.src}
            alt={slide.title}
            placeholder="blur"
            priority
            quality={50}
            className="h-[100dvh] object-cover"
          />
          <Copy subtitle={slide.subtitle} title={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
