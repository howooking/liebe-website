"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import Link from "next/link";
import { SECTIONS } from "@/constants/sections";

export default function Drawer() {
  return (
    <Sheet>
      <SheetTrigger className="h-[40px] w-[40px] md:h-[90px] md:w-[90px] hover:opacity-50 transition">
        <Button size="icon" variant="ghost">
          <AiOutlineMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-foreground">
        <ul className="text-background text-center text-3xl font-bold h-full flex flex-col justify-center gap-10">
          {SECTIONS.map((section) => (
            <li key={section.label}>
              <SheetClose asChild>
                <a href={section.href} className="hover:opacity-50 transition">
                  {section.label}
                </a>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
