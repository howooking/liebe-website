"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  bgStone?: boolean;
};

export default function Section({ children, id, bgStone }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id={id}
      className={cn(
        "relative scroll-mt-[48px] overflow-hidden",
        bgStone ? "bg-stone-100" : "",
      )}
    >
      {children}
    </motion.section>
  );
}
