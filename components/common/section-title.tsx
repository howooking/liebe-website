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
      <h2
        className={cn(
          testimonial
            ? "text-2xl sm:text-4xl md:text-4xl lg:text-5xl"
            : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
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
            ? "lg:text-lg text-sm sm:text-base"
            : "lg:text-lg text-sm sm:text-base",
          "text-slate-500",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
