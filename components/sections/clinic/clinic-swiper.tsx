"use client";

// Import Swiper React components

import { Navigation, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { CLINICS } from "@/constants/clinics";
import Image from "next/image";
import SwiperCardCover from "./swiper-card-cover";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { useCallback } from "react";

export default function ClinicSwiper() {
  const { width } = useWindowSize();
  const slidesPerView = useCallback(() => {
    if (!width) {
      return 3.2;
    }
    // sm
    if (width <= 640) {
      return 1.1;
    }
    // md
    if (width > 640 && width <= 768) {
      return 2.15;
    }
    // lg
    if (width > 768) {
      return 3.2;
    }
  }, [width]);

  const delay = useCallback(
    (index: number) => {
      if (!width) {
        return 0.5;
      }
      // sm
      if (width <= 640) {
        return 0.5;
      }
      // md
      if (width > 640 && width <= 768) {
        if (index <= 2) {
          return 0.5 * index;
        }
        return 0;
      }
      // lg
      if (width > 768) {
        if (index <= 3) {
          return 0.5 * index;
        }
        return 0;
      }
    },
    [width],
  );

  const spaceBetween = useCallback(() => {
    if (!width) {
      return 24;
    }
    // sm
    if (width <= 640) {
      return 12;
    }
  }, [width]);

  return (
    <Swiper
      modules={[Navigation, Scrollbar]}
      spaceBetween={spaceBetween()}
      slidesPerView={slidesPerView()}
      navigation={width! <= 640 ? false : true}
      scrollbar={{ draggable: true }}
    >
      {CLINICS.map((clinic, index) => (
        <SwiperSlide
          key={clinic.id}
          className="hover:cursor-grab active:cursor-grabbing"
        >
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
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 43vw, 30vw"
            />
            <SwiperCardCover clinic={clinic} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
