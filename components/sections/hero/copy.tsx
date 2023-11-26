import { motion } from "framer-motion";
import React from "react";

type CopyProps = {
  title: string;
  subtitle: string;
};

export default function Copy({ subtitle, title }: CopyProps) {
  return (
    <div className="absolute inset-0 z-50 w-screen select-none">
      <motion.div
        key={title}
        className="flex h-screen w-full flex-col items-center justify-center "
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        viewport={{ once: false }}
      >
        <div className="relative flex flex-col items-center gap-2 text-white sm:gap-4 lg:gap-6">
          <p className="text-xl font-bold sm:text-3xl lg:text-5xl">{title}</p>
          <p className="text-base tracking-tight sm:text-xl lg:text-3xl">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
