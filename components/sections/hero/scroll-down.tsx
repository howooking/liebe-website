"use client";

import Lottie from "react-lottie-player";
import scrollDownLottie from "@/public/hero/scroll-down-lottie.json";
import { cn } from "@/lib/utils";

const LOTTIE_SIZE = 32;

export default function ScrollDown() {
  return (
    <Lottie
      className={cn(
        `left-[calc(50%-${LOTTIE_SIZE / 2}px)]`,
        "absolute bottom-6 z-10 lg:bottom-3",
      )}
      loop
      animationData={scrollDownLottie}
      play
      style={{ width: LOTTIE_SIZE, height: LOTTIE_SIZE }}
    />
  );
}
