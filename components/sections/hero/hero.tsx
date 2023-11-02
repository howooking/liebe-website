"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Typography from "@/components/sections/hero/typography";
import Circles from "@/components/sections/hero/circles";
import Section from "@/components/common/section";

import cat from "@/public/hero/cat.jpg";
import round from "@/public/hero/round.jpg";
import surgery from "@/public/hero/surgery.jpg";
import seoClient from "@/public/hero/seo-client.jpg";
import kimClient from "@/public/hero/kim-client.jpg";
import infoClient from "@/public/hero/info-client.jpg";
import Loading from "@/app/loading";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: loading ? undefined : targetRef,
  });

  if (loading) {
    return <Loading />;
  }

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
          quality={50}
          className="object-cover object-center"
          sizes="calc(66.67vw - 27px)"
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
          sizes="calc(33.33vw - 21px)"
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
          alt="surgery"
          fill
          priority
          placeholder="blur"
          quality={100}
          className="object-cover object-center"
          sizes="calc(33.33vw - 21px)"
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
          alt="kim client"
          fill
          priority
          placeholder="blur"
          quality={50}
          className="object-cover object-center"
          sizes="calc(33.33vw - 21px)"
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
          alt="seo client"
          fill
          priority
          placeholder="blur"
          quality={50}
          className="object-cover object-center"
          sizes="calc(33.33vw - 21px)"
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
          alt="info client"
          fill
          priority
          placeholder="blur"
          quality={70}
          className="object-cover object-center"
          sizes="calc(33.33vw - 21px)"
        />
      </motion.div>
    </>
  );
};
