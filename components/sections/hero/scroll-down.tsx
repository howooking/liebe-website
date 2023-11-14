"use client";

import Lottie from "react-lottie-player";
import scrollDownLottie from "@/public/hero/scroll-down-lottie.json";

const LOTTIE_SIZE = 32;

export default function ScrollDown() {
  return (
    <Lottie
      className="absolute bottom-[61px] left-[calc(50%-16px)] z-10 lg:bottom-3"
      loop
      animationData={scrollDownLottie}
      play
      style={{ width: LOTTIE_SIZE, height: LOTTIE_SIZE }}
    />
  );
}
