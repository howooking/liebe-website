"use client";

import Image from "next/image";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import useWindowSize from "@/hooks/useWindowSize";
import { GROOMINGS } from "@/constants/groomings";
import Cover from "./cover";
import { useCallback } from "react";

export default function GroomingSwiper() {
  const { width } = useWindowSize();
  const slidesPerView = useCallback(() => {
    if (!width) return 2;
    if (width <= 640) return 1;
    return 2;
  }, [width]);

  return (
    <Swiper
      slidesPerView={slidesPerView()}
      modules={[Navigation, Scrollbar]}
      spaceBetween={24}
      navigation={width! <= 640 ? false : true}
      scrollbar={{ draggable: true }}
      className="col-span-2 w-full select-none hover:cursor-grab active:cursor-grabbing"
    >
      {GROOMINGS.map((grooming) => (
        <SwiperSlide key={grooming.id}>
          <Image
            quality={100}
            src={grooming.image}
            alt={grooming.title}
            placeholder="blur"
            sizes="(min-width: 1060px) 318px, (min-width: 800px) 376px, (min-width: 660px) 306px, 276px"
            priority
            className="rounded-md"
          />
          <Cover title={grooming.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
