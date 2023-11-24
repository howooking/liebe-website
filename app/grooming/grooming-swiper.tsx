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
import Title from "@/components/common/title";
import { motion } from "framer-motion";

export default function GroomingSwiper() {
  const { width } = useWindowSize();
  const slidesPerView = useCallback(() => {
    if (!width) return 2;
    if (width <= 640) return 1;
    return 2;
  }, [width]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="mt-12 md:mt-6"
    >
      <Swiper
        slidesPerView={slidesPerView()}
        modules={[Navigation, Scrollbar]}
        spaceBetween={24}
        navigation={width! <= 640 ? false : true}
        scrollbar={{ draggable: true }}
      >
        {GROOMINGS.map((grooming) => (
          <SwiperSlide
            key={grooming.id}
            className="hover:cursor-grab active:cursor-grabbing"
          >
            <Image
              quality={100}
              src={grooming.image}
              alt={grooming.title}
              placeholder="blur"
              priority
              className="rounded-md"
              sizes="(max-width: 1024px) calc(100vw - 24px), 1000px"
            />
            <Cover title={grooming.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
