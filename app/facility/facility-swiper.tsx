"use client";

// Import Swiper React components

import { Navigation, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { useCallback } from "react";
import SwiperCardCover from "@/components/sections/clinic/swiper-card-cover";

export default function FacilitySwiper({
  items,
  selected,
}: {
  items: { image: StaticImageData; title: string }[];
  selected: string;
}) {
  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={24}
      navigation
      scrollbar={{ draggable: true }}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={item.title}
          className="hover:cursor-grab active:cursor-grabbing"
        >
          <Image
            quality={50}
            src={item.image}
            alt={item.title}
            placeholder="blur"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
