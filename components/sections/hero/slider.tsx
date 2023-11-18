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
      {SLIDES.map((slide, index) => (
        <SwiperSlide key={slide.title}>
          <Image
            src={slide.image}
            alt={slide.title}
            placeholder="blur"
            className="h-[100dvh] object-cover"
            priority
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 80vw, 90vw"
          />
          <Copy subtitle={slide.subtitle} title={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
