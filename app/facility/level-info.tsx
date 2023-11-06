import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import SingleInfo from "./single-info";
import { LEVELS_INFO } from "@/constants/facility";

type LevelInfoProps = {
  setSelected: Dispatch<SetStateAction<string>>;
  selected: string;
};

export default function LevelInfo({ setSelected, selected }: LevelInfoProps) {
  return (
    <motion.div
      className="px-4 py-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl divide-y-[1px] divide-slate-200">
        {Object.keys(LEVELS_INFO).map((level) => (
          <Level
            selected={selected}
            setSelected={setSelected}
            level={level}
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
  selected,
  level,
  children,
}: {
  selected: string;
  level: string;
  children: JSX.Element;
  defaultOpen?: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setOpen(selected === level);
  }, [level, selected]);
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"}>
      <button
        onClick={() => setOpen((prev) => !prev)}
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
          className="bg-primary bg-clip-text text-left text-lg"
        >
          {level} 안내
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
