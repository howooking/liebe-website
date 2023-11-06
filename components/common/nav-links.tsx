import { SECTIONS } from "@/constants/sections";
import useScroll from "@/hooks/useScroll";

import Link from "next/link";
import React from "react";

export default function NavLinks() {
  const scrollY = useScroll();

  return (
    <ul
      className="hidden items-center justify-center gap-4 text-sm sm:flex md:text-base"
      style={{
        color: scrollY > 50 ? "#0f172a" : "",
        transition: "color 200ms ease",
      }}
    >
      {SECTIONS.map((section) => (
        <li key={section.label}>
          <Link
            target={section.label === "보호자안내서" ? "_blank" : "_self"}
            href={section.href}
            className="block transition hover:scale-105"
          >
            {section.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
