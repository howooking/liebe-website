import Image from "next/image";

import { SLIDES } from "@/constants/slides";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";

export default function Slider() {
  return (
    <Carousel
      autoplay
      autoplayInterval={7000}
      wrapAround
      pauseOnHover={false}
      withoutControls
      dragging={false}
      speed={2000}
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
          <div className="absolute left-0 top-0 z-50 w-screen">
            <motion.div
              key={index}
              className="flex h-screen w-full flex-col items-center justify-center "
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index === 2 || index === 3 ? 5.5 : 0.5,
              }}
              viewport={{ once: false }}
            >
              <div className="relative p-4 text-center tracking-tight text-white sm:space-y-6 md:space-y-8 lg:space-y-10">
                <p className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.title}
                </p>
                <p className="text-sm sm:text-xl lg:text-3xl">
                  {slide.subtitle}
                </p>
                <div className="absolute inset-0 -z-10 bg-black/50 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
