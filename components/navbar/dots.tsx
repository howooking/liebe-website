"use client";
import { GoDot, GoDotFill } from "react-icons/go";

import { SECTIONS } from "@/constants/sections";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCurrSectionStore } from "@/lib/store";

export default function Dots() {
  const { currSection } = useCurrSectionStore();

  return (
    <div className="md:flex flex-col gap-2 hidden">
      {SECTIONS.map((section) => (
        <a href={section.href} key={section.label}>
          {`/#${currSection}` === section.href ? (
            <GoDotFill className="hover:opacity-50 transition" />
          ) : (
            <GoDot className="hover:opacity-50 transition" />
          )}
        </a>
      ))}
    </div>
  );
}
