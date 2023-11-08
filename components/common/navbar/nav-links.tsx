import DrawOutlineButton from "@/components/ui/draw-outline-button";
import { SECTIONS } from "@/constants/sections";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
        <li key={section.label}>
          <Link
            target={section.label === "보호자안내서" ? "_blank" : "_self"}
            href={section.href}
            className={cn(
              path === section.href && "text-primary",
              "px-2 py-1 transition hover:text-primary",
            )}
          >
            {section.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
