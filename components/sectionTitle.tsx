import { motion } from "framer-motion";

type SectionTitleProps = {
  children: React.ReactNode;
  subTitle?: string;
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
      className="mb-10"
    >
      <div className="my-4 flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">{children}</h2>
        <p>{subTitle}</p>
      </div>
    </motion.div>
  );
}
