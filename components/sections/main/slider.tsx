"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  MAIN_SLIDE_IMAGES,
  MAIN_SLIDE_INTERVAL,
  MAIN_SLIDE_TRANSITION,
} from "@/constants/main-slider";

export default function Slider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={MAIN_SLIDE_INTERVAL}
      autoFocus
      useKeyboardArrows
      transitionTime={0}
      showArrows={false}
      showStatus={false}
      emulateTouch={false}
      stopOnHover={false}
      showThumbs={false}
    >
      {MAIN_SLIDE_IMAGES.map((image) => (
        <Image
          key={image.label}
          alt={image.label}
          src={image.src}
          width={1400}
          height={787}
          priority
        />
      ))}
    </Carousel>
  );
}
