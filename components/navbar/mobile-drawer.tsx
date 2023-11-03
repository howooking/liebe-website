"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import DrawOutlineButton from "@/components/ui/draw-outline-button";
import { SECTIONS } from "@/constants/sections";

import spinner from "@/public/spinner.svg";
import Link from "next/link";

export default function MobileDrawer({
  isScrollTop,
}: {
  isScrollTop: boolean;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Image src={spinner} alt="spinner" width={35} />;
  }
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <AiOutlineMenu
          size={24}
          style={{ color: isScrollTop ? "white" : "black" }}
        />
      </SheetTrigger>

      <SheetContent side="right" className="bg-stone-900">
        <ul className="flex h-full flex-col items-center justify-center gap-5 text-3xl font-bold text-stone-50">
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
