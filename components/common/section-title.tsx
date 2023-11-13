"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="relative inline text-2xl tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="text-sm text-slate-500 sm:text-base md:text-xl">
        {subtitle}
      </p>
    </div>
  );
}
