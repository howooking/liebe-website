"use client";

import { motion } from "framer-motion";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section id={id} className="scroll-mt-[72px]">
      {children}
    </motion.section>
  );
}
