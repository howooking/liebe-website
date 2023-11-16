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
      key={selected}
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
            sizes="(min-width: 1080px) 1000px, (min-width: 460px) 94vw, (min-width: 360px) calc(75vw + 66px), calc(50vw + 126px)"
          />
          <Cover title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
