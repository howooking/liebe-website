import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type MapLinkProps = {
  title: string;
  href: string;
  bgColor: string;
  textColor: string;
};

export default function MapLink({
  title,
  href,
  bgColor,
  textColor,
}: MapLinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `2px solid ${textColor}`,
      }}
      className="z-20 flex items-center justify-center rounded-md px-2 py-2 text-xs font-bold transition hover:scale-110"
    >
      {title}
    </Link>
  );
}
