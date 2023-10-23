"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import Link from "next/link";
import { SECTIONS } from "@/constants/sections";
import DrawOutlineButton from "../ui/draw-outline-button";
import { useCurrSectionStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function Drawer() {
  const { currSection, setCurrSection } = useCurrSectionStore();
  console.log(currSection);
  return (
    <Sheet>
      <SheetTrigger className="h-[50px] w-[50px] md:h-[90px] md:w-[90px]">
        <DrawOutlineButton>
          <AiOutlineMenu size={20} />
        </DrawOutlineButton>
      </SheetTrigger>
      <SheetContent side="left" className="bg-foreground">
        <ul className="text-background text-center text-3xl font-bold h-full flex flex-col justify-center gap-5">
          {SECTIONS.map((section) => (
            <li key={section.label}>
              <SheetClose asChild>
                <a
                  href={section.href}
                  onClick={() => setCurrSection(section.href.slice(2))}
                >
                  <DrawOutlineButton>
                    <div
                      className={cn(
                        `/#${currSection}` === section.href && "text-secondary",
                        "px-4 py-2"
                      )}
                    >
                      {section.label}
                    </div>
                  </DrawOutlineButton>
                </a>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
