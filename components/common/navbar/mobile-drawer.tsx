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

      <SheetContent side="right" className="bg-slate-900">
        <ul className="flex h-full flex-col items-center justify-center gap-4 text-xl text-white">
          <li>
            <SheetClose asChild>
              <Link href="/">
                <div
                  className={cn(
                    path === "/" && "text-primary",
                    "transition hover:opacity-50",
                  )}
                >
                  홈으로
                </div>
              </Link>
            </SheetClose>
          </li>
          {SECTIONS.map((section) => (
            <li key={section.label}>
              <SheetClose asChild>
                <Link href={section.href}>
                  <div
                    className={cn(
                      path === section.href && "text-primary",
                      "transition hover:opacity-50",
                    )}
                  >
                    {section.label}
                  </div>
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
