"use client";

import { SECTIONS } from "@/constants/sections";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function NavLinks({ scrollDown }: { scrollDown: boolean }) {
  const path = usePathname();
  return (
    <ul
      className="hidden items-center justify-center gap-4 text-sm md:text-base lg:flex"
      style={{
        color: scrollDown ? "#0f172a" : "#fff",
        transition: "color 200ms ease",
      }}
    >
      {SECTIONS.map((section) => (
        <NavLink key={section.href} section={section} path={path} />
      ))}
    </ul>
  );
}
