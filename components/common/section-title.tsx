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
    <div className="space-y-4 text-center">
      <h2
        className={cn(
          testimonial
            ? "text-3xl sm:text-5xl md:text-6xl lg:text-5xl"
            : "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
          "relative inline font-eng tracking-tighter",
        )}
      >
        {title}
        <motion.div
          className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </h2>
      <p
        className={cn(
          testimonial
            ? "text-xs sm:text-base lg:text-lg"
            : "text-xs sm:text-base lg:text-lg",
          "text-slate-500",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
