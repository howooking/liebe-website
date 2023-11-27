"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Copy from "./copy";
import { SLIDES } from "@/constants/slides";

export default function Slider() {
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 6000 }} speed={1000}>
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.title}>
          <Image
            src={slide.image}
            alt={slide.title}
            placeholder="blur"
            priority
            className="h-screen object-cover"
          />
          <Copy subtitle={slide.subtitle} title={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
