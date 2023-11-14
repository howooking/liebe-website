"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="relative z-10 mb-6 space-y-2 text-center sm:mb-12 sm:space-y-4">
      <h2 className="relative inline text-2xl tracking-tight sm:text-3xl md:text-4xl">
        {title}
        <motion.div
          className="absolute bottom-2 left-0 h-1/3 w-full bg-primary/20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </h2>
      <div className="text-sm text-slate-500 sm:text-base md:text-xl">
        {subtitle}
      </div>
    </div>
  );
}
