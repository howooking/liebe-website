"use client";

import { SOCIALS } from "@/constants/socials";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileFixedFooter() {
  const scrollY = useScroll();
  const path = usePathname();
  const isRoot = path === "/";
  const isScrollTop = scrollY === 0;

  return (
    <div
      className={
        "fixed bottom-0 z-50 flex h-12 w-full items-center justify-around border-t text-white"
      }
      style={{
        color: !isScrollTop || !isRoot ? "black" : "white",
        background: !isScrollTop || !isRoot ? "white" : "transparent",
      }}
    >
      {SOCIALS.map((social) => (
        <Link
          href={social.href}
          key={social.label}
          target="_blank"
          className="flex items-center gap-2 p-2 transition hover:scale-105"
        >
          <social.icon size={social.size} />
          <p className="hidden sm:block">{social.desc}</p>
        </Link>
      ))}
    </div>
  );
}
