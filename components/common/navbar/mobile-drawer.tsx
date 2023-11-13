"use client";

import { HiOutlineMenu } from "react-icons/hi";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SECTIONS } from "@/constants/sections";

import { usePathname } from "next/navigation";
import MobileDrawerLink from "./mobile-drawer-ink";
import IconButton from "../icon-button";

type MobileDrawerProps = {
  isScrollTop: boolean;
  width?: number;
};

export default function MobileDrawer({ isScrollTop }: MobileDrawerProps) {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <IconButton
          Icon={HiOutlineMenu}
          style={{
            color: isScrollTop ? "#fff" : "#0f172a",
            transition: "color 200ms ease",
          }}
        />
      </SheetTrigger>

      <SheetContent side="right">
        <ul className="flex h-full flex-col items-center justify-center text-xl">
          {SECTIONS.map((section) => (
            <MobileDrawerLink
              path={path}
              section={section}
              key={section.href}
            />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
