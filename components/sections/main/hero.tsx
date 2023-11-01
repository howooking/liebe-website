"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import cat from "@/public/hero/cat.jpg";
import round from "@/public/hero/round.jpg";
import surgery from "@/public/hero/surgery.jpg";
import seoClient from "@/public/hero/seo-client.jpg";
import kimClient from "@/public/hero/kim-client.jpg";
import infoClient from "@/public/hero/info-client.jpg";

import Typography from "@/components/sections/main/typography";
import Circles from "@/components/sections/main/circles";
import Section from "@/components/section";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <Section id="/">
      <section ref={targetRef} className="h-[350vh] ">
        <div className="sticky top-[73px] grid h-[calc(100vh-73px)] w-full grid-cols-3 grid-rows-3 gap-4 overflow-hidden p-4">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <Circles />
        </div>
      </section>
    </Section>
  );
}

const Copy = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute z-20 flex h-screen w-full flex-col items-center justify-center px-8"
    >
      <Typography />
    </motion.div>
  );
};

const Images = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="relative z-10 col-span-2"
        style={{
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      >
        <Image
          src={cat}
          alt="cat"
          fill
          priority
          placeholder="blur"
          quality={70}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <motion.div
        className="relative z-10 row-span-2"
        style={{
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      >
        <Image
          src={round}
          alt="round"
          fill
          priority
          placeholder="blur"
          quality={50}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <motion.div
        className="relative z-10 row-span-2"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      >
        <Image
          src={surgery}
          alt="round"
          fill
          priority
          placeholder="blur"
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <motion.div
        className="relative z-10"
        style={{
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      >
        <Image
          src={kimClient}
          alt="round"
          fill
          priority
          placeholder="blur"
          quality={50}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <motion.div
        className="relative z-10"
        style={{
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      >
        <Image
          src={seoClient}
          alt="round"
          fill
          priority
          placeholder="blur"
          quality={50}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <motion.div
        className="relative z-10"
        style={{
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      >
        <Image
          src={infoClient}
          alt="round"
          fill
          priority
          placeholder="blur"
          quality={70}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </>
  );
};
