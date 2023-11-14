"use client";

// Import Swiper React components

import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { CLINICS } from "@/constants/clinic";
import Image from "next/image";
import SwiperCardCover from "./swiper-card-cover";

export default function ClinicSwiper() {
  return (
    <Swiper
      // className="cursor-grab active:cursor-grabbing"
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {CLINICS.map((clinic) => (
        <SwiperSlide key={clinic.id}>
          <Image src={clinic.imgSrc} alt={clinic.title} />
          <SwiperCardCover clinic={clinic} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
