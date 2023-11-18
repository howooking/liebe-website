"use client";

import Image, { StaticImageData } from "next/image";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import Cover from "./cover";

import useWindowSize from "@/hooks/useWindowSize";

export default function FacilitySwiper({
  items,
  selected,
}: {
  items: { image: StaticImageData; title: string; id: number }[];
  selected: string;
}) {
  const { width } = useWindowSize();

  return (
    <Swiper
      key={selected}
      modules={[Navigation, Scrollbar]}
      spaceBetween={24}
      navigation={width! <= 640 ? false : true}
      scrollbar={{ draggable: true }}
    >
      {items.map((item) => (
        <SwiperSlide
          key={`${item.title}-${item.id}`}
          className="hover:cursor-grab active:cursor-grabbing"
        >
          <Image
            quality={100}
            src={item.image}
            alt={item.title}
            placeholder="blur"
            priority
            className="rounded-2xl"
          />
          <Cover title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
