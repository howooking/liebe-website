"use client";

import { SOCIALS } from "@/constants/socials";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function FixedSocials() {
  const scrollY = useScroll();
  const scrollDown = useMemo(() => scrollY > 50, [scrollY]);

  const path = usePathname();
  const isRoot = useMemo(() => path === "/", [path]);

  return (
    <div
      className={
        "fixed bottom-0 z-50 flex h-12 w-full items-center justify-around border-t text-white lg:hidden"
      }
      style={{
        color: scrollDown || !isRoot ? "#1f2937" : "#fff",
        background: scrollDown || !isRoot ? "white" : "transparent",
        transition: "background 500ms ease",
      }}
    >
      {SOCIALS.map((social) => (
        <Link
          href={social.href}
          key={social.label}
          target="_blank"
          className="flex items-center gap-1 p-2"
        >
          <social.icon size={social.size} />
          <p className="hidden sm:block">{social.desc}</p>
        </Link>
      ))}
    </div>
  );
}
