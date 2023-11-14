"use client";

import { SOCIALS } from "@/constants/socials";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import IconButton from "./icon-button";

export default function FixedSocials() {
  const scrollY = useScroll();
  const scrollDown = useMemo(() => scrollY > 50, [scrollY]);

  const path = usePathname();
  const isRoot = useMemo(() => path === "/", [path]);

  return (
    <div
      className={
        "fixed bottom-0 z-50 flex w-full items-center justify-around border-t text-white lg:hidden"
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
          className="flex items-center"
        >
          <IconButton Icon={social.icon} naver={social.label === "naver"} />
          <p className="hidden sm:block">{social.desc}</p>
        </Link>
      ))}
    </div>
  );
}
