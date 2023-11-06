"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-4 space-y-4 pt-10 text-center md:pt-20">
      <h2 className="font-eng relative inline text-4xl tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
        <motion.div
          className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </h2>
      <p className="text-xs sm:text-base md:text-xl lg:text-2xl">{subtitle}</p>
    </div>
  );
}
