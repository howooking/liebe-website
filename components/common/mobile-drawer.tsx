"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import DrawOutlineButton from "@/components/ui/draw-outline-button";
import { SECTIONS } from "@/constants/sections";

import Link from "next/link";
import useScroll from "@/hooks/useScroll";

export default function MobileDrawer({}: {}) {
  const scrollY = useScroll();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <AiOutlineMenu
          size={24}
          style={{
            color: scrollY > 50 ? "#0f172a" : "white",
            transition: "color 200ms ease",
          }}
        />
      </SheetTrigger>

      <SheetContent side="right" className="bg-slate-900">
        <ul className="flex h-full flex-col items-center justify-center gap-5 text-3xl font-bold text-slate-50">
          <li>
            <SheetClose asChild>
              <Link href="/">
                <DrawOutlineButton>
                  <div className="px-4 py-2">홈으로</div>
                </DrawOutlineButton>
              </Link>
            </SheetClose>
          </li>
          {SECTIONS.map((section) => (
            <li key={section.label}>
              <SheetClose asChild>
                <Link href={section.href}>
                  <DrawOutlineButton>
                    <div className="px-4 py-2">{section.label}</div>
                  </DrawOutlineButton>
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
