"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SLIDES } from "@/constants/slides";
import Copy from "./copy";
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
            quality={50}
            className="h-[100dvh] object-cover"
          />
          <Copy subtitle={slide.subtitle} title={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
