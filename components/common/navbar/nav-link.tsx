"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";

type NavLinkProps = {
  section: {
    label: string;
    href: string;
  };
  path: string;
};

export default function NavLink({ section, path }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <li>
      {section.label === "오시는길" || section.label === "진료과목" ? (
        <a
          href={section.href}
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {section.label}
          <motion.span
            className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      ) : (
        <Link
          target={section.label === "보호자안내서" ? "_blank" : "_self"}
          href={section.href}
          className={cn(section.href === "/" && "md:hidden", "relative")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {section.label}
          <motion.span
            className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      )}
    </li>
  );
}
