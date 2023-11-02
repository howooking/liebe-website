"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
  children: React.ReactNode;
  subTitle?: React.ReactNode;
};

export default function SectionTitle({
  children,
  subTitle,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="my-4 flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold sm:text-3xl">{children}</h2>
        <p className={cn(!subTitle && "hidden", "text-sm")}>{subTitle}</p>
      </div>
    </motion.div>
  );
}
