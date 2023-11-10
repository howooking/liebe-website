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
  const [hovered, setHovered] = useState(false);

  return (
    <li key={section.label}>
      <SheetClose asChild>
        <Link
          href={section.href}
          className={cn(path === section.href && "text-primary", "relative")}
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
      </SheetClose>
    </li>
  );
}
