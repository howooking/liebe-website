"use client";

import Image from "next/image";

import { SLIDES } from "@/constants/slides";
import Carousel from "nuka-carousel";
import Copy from "./copy";
import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function Slider() {
  const [loading, setLoading] = useState(true);

  const { width } = useWindowSize();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Carousel
      autoplay
      autoplayInterval={7000}
      wrapAround
      pauseOnHover={false}
      withoutControls
      dragging={false}
      swiping={false}
      speed={width! < 640 ? 1000 : 2000}
    >
      {SLIDES.map((slide, index) => (
        <div key={index} className="relative inset-0 z-40">
          <Image
            quality={70}
            src={slide.src}
            alt={slide.title}
            placeholder="blur"
            priority
            className="h-screen w-full object-cover object-center"
          />
          <Copy title={slide.title} subtitle={slide.subtitle} />
        </div>
      ))}
    </Carousel>
  );
}
