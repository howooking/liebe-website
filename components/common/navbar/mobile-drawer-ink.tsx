import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

type MobileDrawerLinkProps = {
  section: {
    label: string;
    href: string;
  };
  path: string;
};

export default function MobileDrawerLink({
  section,
  path,
}: MobileDrawerLinkProps) {
  return (
    <li>
      <SheetClose asChild>
        {section.label === "오시는길" || section.label === "진료과목" ? (
          <a href={section.href} className="px-1.5 py-3">
            {section.label}
          </a>
        ) : (
          <Link href={section.href} className="px-1.5 py-3">
            {section.label}
          </Link>
        )}
      </SheetClose>
    </li>
  );
}
