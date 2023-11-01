import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import SingleInfo from "./single-info";
import { LEVELS_INFO } from "@/constants/facility";

export default function LevelInfo() {
  return (
    <motion.div
      className="px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="mx-auto max-w-3xl">
        {Object.keys(LEVELS_INFO).map((level) => (
          <Level
            title={`${level} 안내`}
            defaultOpen={level === "1층"}
            key={level}
          >
            <ul>
              {LEVELS_INFO[level].map((info) => (
                <SingleInfo kor={info.kor} eng={info.eng} key={info.kor} />
              ))}
            </ul>
          </Level>
        ))}
      </div>
    </motion.div>
  );
}

const Level = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-stone-300"
    >
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
          className="bg-primary bg-clip-text text-left text-lg font-bold"
        >
          {title}
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
        className="overflow-hidden text-slate-600"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
