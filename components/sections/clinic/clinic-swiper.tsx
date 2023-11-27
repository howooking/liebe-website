"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import SwiperCardCover from "./swiper-card-cover";
import useWindowSize from "@/hooks/useWindowSize";
import { CLINICS } from "@/constants/clinics";

export default function ClinicSwiper() {
  const { width } = useWindowSize();
  const slidesPerView = useCallback(() => {
    if (!width) return 3.2;
    if (width <= 640) return 1.1;
    if (width <= 768) return 2.15;
    return 3.2;
  }, [width]);

  const delay = useCallback(
    (index: number) => {
      if (!width) return 0.5;
      if (width <= 640) return 0.5;
      if (width <= 768) return index <= 2 ? 0.5 * index : 0;
      return index <= 3 ? 0.5 * index : 0;
    },
    [width],
  );

  const spaceBetween = useCallback(() => {
    if (!width) return 24;
    if (width <= 640) return 12;
    return 24;
  }, [width]);

  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={spaceBetween()}
      slidesPerView={slidesPerView()}
      navigation={width! <= 640 ? false : true}
      scrollbar={{ draggable: true }}
      className="select-none hover:cursor-grab active:cursor-grabbing"
    >
      {CLINICS.map((clinic, index) => (
        <SwiperSlide key={clinic.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay(index) }}
            viewport={{ once: true }}
          >
            <Image
              quality={100}
              src={clinic.image}
              alt={clinic.title}
              className="overflow-hidden rounded-md"
              placeholder="blur"
              priority={index <= 3}
              sizes="(min-width: 1520px) 426px, (min-width: 780px) 28.61vw, (min-width: 660px) calc(46vw - 21px), (min-width: 440px) 82vw, calc(100vw - 24px)"
            />
            <SwiperCardCover clinic={clinic} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
