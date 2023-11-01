"use client";

import { useCurrSectionStore } from "@/lib/store";
import { motion } from "framer-motion";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { setCurrSection } = useCurrSectionStore();
  return (
    <motion.section
      id={id}
      onViewportEnter={() => setCurrSection(id)}
      className="scroll-mt-[72px]"
    >
      {children}
    </motion.section>
  );
}
