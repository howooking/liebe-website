"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useScrollPosition from "@/hooks/useScrollPosition";
import IconButton from "./icon-button";

import { SOCIALS } from "@/constants/socials";

export default function FixedSocials() {
  const { isScrollTop } = useScrollPosition();

  const path = usePathname();
  const isRoot = path === "/";

  return (
    <div
      className={
        "fixed bottom-0 z-50 flex w-full items-center justify-around border-t text-white lg:hidden"
      }
      style={{
        color: isScrollTop && isRoot ? "#fff" : "#1f2937",
        background: isScrollTop && isRoot ? "transparent" : "white",
        transition: "background 500ms ease-in-out",
      }}
    >
      {SOCIALS.map((social) => (
        <Link
          href={social.href}
          key={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <IconButton Icon={social.icon} naver={social.label === "naver"} />
          <p className="hidden sm:block">{social.desc}</p>
        </Link>
      ))}
    </div>
  );
}
