"use client";

import { Navigation, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import Image, { StaticImageData } from "next/image";
import Cover from "./cover";
import useWindowSize from "@/hooks/useWindowSize";

export default function FacilitySwiper({
  items,
  selected,
}: {
  items: { image: StaticImageData; title: string }[];
  selected: string;
}) {
  const { width } = useWindowSize();

  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={24}
      navigation={width! <= 640 ? false : true}
      scrollbar={{ draggable: true }}
    >
      {items.map((item) => (
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
            sizes="50vw"
          />
          <Cover title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
