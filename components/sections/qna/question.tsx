import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Question({
  question,
  children,
}: {
  question: string;
  children: JSX.Element;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"}>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="text-lg bg-primary bg-clip-text text-left font-semibold"
        >
          {question}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(240	141	71)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
