"use client";

import { AiOutlineMenu } from "react-icons/ai";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SECTIONS } from "@/constants/sections";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MobileDrawerLink from "./mobile-drawer-ink";

export default function MobileDrawer({
  scrollDown,
  width,
}: {
  scrollDown: boolean;
  width?: number;
}) {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AiOutlineMenu
          size={width! > 640 ? 24 : 18}
          style={{
            color: scrollDown ? "#6b7280" : "#fff",
            transition: "color 200ms ease",
          }}
        />
      </SheetTrigger>

      <SheetContent side="right">
        <ul className="flex h-full flex-col items-center justify-center gap-4 text-xl">
          {SECTIONS.map((section) => (
            <MobileDrawerLink
              key={section.href}
              path={path}
              section={section}
            />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
