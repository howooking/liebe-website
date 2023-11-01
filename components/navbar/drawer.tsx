"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { SECTIONS } from "@/constants/sections";
import DrawOutlineButton from "../ui/draw-outline-button";
import { useCurrSectionStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import spinner from "@/public/spinner.svg";

export default function Drawer() {
  const { currSection, setCurrSection } = useCurrSectionStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Image src={spinner} alt="spinner" width={35} />;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="p-0">
          <AiOutlineMenu size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-stone-800">
        <ul className="flex h-full flex-col items-center justify-center gap-5 text-3xl font-bold text-stone-50">
          {SECTIONS.map((section) => (
            <li key={section.label}>
              <SheetClose asChild>
                <Link
                  href={section.href}
                  onClick={() => setCurrSection(section.href.replace(/#/g, ""))}
                >
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
