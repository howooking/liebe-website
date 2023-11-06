import Image from "next/image";

import { SLIDES } from "@/constants/slides";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";

export default function Slider() {
  return (
    <Carousel
      autoplay
      autoplayInterval={6000}
      wrapAround
      pauseOnHover={false}
      withoutControls
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
              className="absolute flex h-screen w-full flex-col items-center justify-center space-y-10 text-white/90"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index === 2 || index === 3 ? 6 : 0.5,
              }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
            >
              <p className="text-2xl md:text-5xl lg:text-7xl">{slide.title}</p>
              <p className="text-sm md:text-xl lg:text-3xl">{slide.subtitle}</p>
            </motion.div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
