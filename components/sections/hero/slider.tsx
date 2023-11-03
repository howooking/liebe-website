"use client";

import Image from "next/image";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

import { SLIDES } from "@/constants/slides";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider() {
  return (
    <AutoplaySlider
      play
      interval={6000}
      className="h-screen w-full overflow-hidden"
    >
      {SLIDES.map((slide, index) => (
        <div key={index}>
          <Image
            src={slide.src}
            alt={`slide-${index + 1}`}
            placeholder="blur"
            fill
            className="object-cover"
            priority
          />
          <div className="relative h-screen w-[100vw]">
            <motion.div
              key={index}
              className="absolute flex h-screen w-full flex-col items-center justify-center space-y-10 font-bold text-white"
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-7xl">{slide.title}</p>
              <p className="text-3xl">{slide.subtitle}</p>
            </motion.div>
          </div>
        </div>
      ))}
    </AutoplaySlider>
  );
}
