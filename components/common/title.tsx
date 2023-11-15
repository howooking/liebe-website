"use client";

import { motion } from "framer-motion";

type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <h2 className="relative inline text-xl font-semibold md:text-2xl">
      {children}
      <motion.span
        className="absolute bottom-1 left-0 h-1/3 w-full bg-primary/20"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      />
    </h2>
  );
}
