console.log("not using");

("use client");

import { GoDot, GoDotFill } from "react-icons/go";

import { SECTIONS } from "@/constants/sections";
import { useCurrSectionStore } from "@/lib/store";

export default function Dots() {
  const { currSection } = useCurrSectionStore();

  return (
    <div className="hidden flex-col gap-2 md:flex">
      {SECTIONS.map((section) => (
        <a href={section.href} key={section.label} title={section.label}>
          {`/#${currSection}` === section.href ? (
            <GoDotFill className="transition hover:opacity-50" />
          ) : (
            <GoDot className="transition hover:opacity-50" />
          )}
        </a>
      ))}
    </div>
  );
}
