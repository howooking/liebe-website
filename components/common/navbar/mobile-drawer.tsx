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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MobileDrawer({ scrollDown }: { scrollDown: boolean }) {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AiOutlineMenu
          size={24}
          style={{
            color: scrollDown ? "#6b7280" : "#fff",
            transition: "color 200ms ease",
          }}
        />
      </SheetTrigger>

      <SheetContent side="right" className="bg-slate-800">
        <ul className="flex h-full flex-col items-center justify-center gap-5 text-3xl font-bold text-slate-50">
          <li>
            <SheetClose asChild>
              <Link href="/">
                <div
                  className={cn(
                    path === "/" && "text-primary",
                    "px-4 py-2 transition-colors hover:text-primary",
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
                      "px-4 py-2 transition-colors hover:text-primary",
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
