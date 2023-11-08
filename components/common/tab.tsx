"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type TabsProps = {
  tabs: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export default function Tabs({ tabs, selected, setSelected }: TabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-800 px-4 py-4">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
}

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:bg-slate-700 hover:text-slate-200"
      } relative rounded-md px-2.5 py-0.5 text-sm transition-colors`}
    >
      <span className="relative z-10 text-base sm:text-lg">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-orange-600 to-amber-600"
        ></motion.span>
      )}
    </button>
  );
};
