"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const pathname = usePathname();

  const { replace } = useRouter();
  const replaceHash = () => {
    pathname === "/" ? replace(`#${id}`) : {};
  };

  return (
    <motion.section
      onViewportEnter={replaceHash}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id={id}
      className="scroll-mt-[48px]"
    >
      {children}
    </motion.section>
  );
}
