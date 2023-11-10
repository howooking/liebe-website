"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  testimonial?: boolean;
};
export default function SectionTitle({
  title,
  subtitle,
  testimonial,
}: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="relative inline font-eng text-2xl tracking-tight sm:text-3xl md:text-4xl">
        {title}
        <motion.div
          className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </h2>
      <p className="text-sm text-slate-500 sm:text-base md:text-xl">
        {subtitle}
      </p>
    </div>
  );
}
