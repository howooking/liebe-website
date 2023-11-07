"use client";

import { motion } from "framer-motion";

type TitleProps = {
  children: React.ReactNode;
};

export default function title({ children }: TitleProps) {
  return (
    <h2 className="relative mb-4 inline text-lg font-bold">
      {children}

      <motion.span
        className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </h2>
  );
}
