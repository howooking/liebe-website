import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id={id}
      className="relative scroll-mt-[48px] sm:min-h-[calc(100vh-48px)]"
    >
      {children}
    </motion.section>
  );
}
