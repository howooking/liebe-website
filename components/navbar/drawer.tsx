"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { SECTIONS } from "@/constants/sections";
import DrawOutlineButton from "../ui/draw-outline-button";
import { useCurrSectionStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Drawer() {
  const { currSection, setCurrSection } = useCurrSectionStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>loading</>;
  }
  return (
    <Sheet>
      <SheetTrigger className="h-[50px] w-[50px]">
        <Button size="icon" className="bg-secondary hover:bg-neutral-900">
          <AiOutlineMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-foreground">
        <ul className="flex h-full flex-col justify-center gap-5 text-center text-3xl font-bold text-background">
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
                        "px-4 py-2",
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
