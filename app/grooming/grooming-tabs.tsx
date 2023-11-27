import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { GROOMING_TABS } from "./cost-info";

type GroomingTabsProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function GroomingTabs({
  selected,
  setSelected,
}: GroomingTabsProps) {
  return (
    <div className="flex h-12 w-full flex-wrap items-center justify-center gap-2 bg-gradient-to-tr from-slate-700 to-slate-950 px-4">
      {GROOMING_TABS.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
}

const Tab = ({
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
      } relative rounded-md px-1.5 py-2 transition-colors`}
    >
      <span className="relative z-10">{text}</span>
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
