"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function Banner({
  imageSrc,
  title,
  subTitle,
}: {
  imageSrc: StaticImageData;
  title: string;
  subTitle: React.ReactNode;
}) {
  return (
    <div className="relative flex h-[300px] items-center justify-center sm:h-[400px]">
      <Image
        quality={70}
        fill
        placeholder="blur"
        alt="staff banner"
        src={imageSrc}
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute h-full w-full bg-black/50" />
      <motion.div
        className="z-10 flex flex-col items-center gap-4 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold text-primary sm:text-3xl">{title}</h2>
        <div className="text-sm sm:text-base">{subTitle}</div>
      </motion.div>
    </div>
  );
}
