"use client";

import { AiOutlineMenu } from "react-icons/ai";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SECTIONS } from "@/constants/sections";

import { usePathname } from "next/navigation";
import MobileDrawerLink from "./mobile-drawer-ink";

type MobileDrawerProps = {
  isScrollTop: boolean;
  width?: number;
};

export default function MobileDrawer({
  isScrollTop,
  width,
}: MobileDrawerProps) {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AiOutlineMenu
          size={width! > 640 ? 24 : 18}
          style={{
            color: isScrollTop ? "#fff" : "#6b7280",
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
