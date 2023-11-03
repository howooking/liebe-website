import { SECTIONS } from "@/constants/sections";
import useScroll from "@/hooks/useScroll";

import Link from "next/link";
import React from "react";

export default function NavLinks({ isRoot }: { isRoot: boolean }) {
  const scrollY = useScroll();

  return (
    <ul
      className="flex items-center justify-center gap-5"
      style={{ color: scrollY > 50 || !isRoot ? "black" : "" }}
    >
      {SECTIONS.map((section) => (
        <li key={section.label}>
          <Link href={section.href} className="hover transition">
            {section.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
