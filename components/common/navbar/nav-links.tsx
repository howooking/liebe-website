"use client";

import { SECTIONS } from "@/constants/sections";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import FloatingSocials from "../floating-socials";

type NavLinksProps = {
  isScrollTop: boolean;
};

export default function NavLinks({ isScrollTop }: NavLinksProps) {
  const path = usePathname();
  return (
    <ul
      className="hidden items-center justify-center gap-4 text-sm md:text-base lg:flex"
      style={{
        color: isScrollTop ? "#fff" : "#0f172a",
        transition: "color 200ms ease",
      }}
    >
      {SECTIONS.map((section) => (
        <NavLink key={section.href} section={section} path={path} />
      ))}
    </ul>
  );
}
