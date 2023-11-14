"use client";

import Image from "next/image";

import { SLIDES } from "@/constants/slides";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Copy from "./copy";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function Slider() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 6000 }}>
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.title}>
          <Image
            src={slide.src}
            alt={slide.title}
            placeholder="blur"
            priority
            quality={70}
            className="h-[100dvh] object-cover"
          />
          <Copy subtitle={slide.title} title={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
