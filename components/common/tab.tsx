"use client";

import { INFO_TABS } from "@/constants/info-page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type TabsProps = {
  tabs: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  info?: boolean;
};

export default function Tabs({ tabs, selected, setSelected, info }: TabsProps) {
  return (
    <div className="flex h-12 flex-wrap items-center justify-center gap-2 bg-gradient-to-tr from-slate-700 to-slate-950 px-4">
      {tabs.map((tab) => (
        <Chip
          info
          key={tab}
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

const Chip = ({
  text,
  selected,
  setSelected,
  info,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  info?: boolean;
}) => {
  const router = useRouter();
  const handleClickTab = () => {
    setSelected(text);
    info ? router.push(`/info/${INFO_TABS[text]}`) : null;
  };
  return (
    <div
      onClick={handleClickTab}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:bg-slate-900 hover:text-slate-200"
      } relative cursor-pointer rounded-md px-1.5 py-2 transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-orange-600 to-amber-600"
        />
      )}
    </div>
  );
};
