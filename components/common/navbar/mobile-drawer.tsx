import { HiOutlineMenu } from "react-icons/hi";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/nav-links";
import MobileDrawerLink from "./mobile-drawer-ink";
import IconButton from "../icon-button";

type MobileDrawerProps = {
  isScrollTop: boolean;
};

export default function MobileDrawer({ isScrollTop }: MobileDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <IconButton
          Icon={HiOutlineMenu}
          style={{
            color: isScrollTop ? "#fff" : "#0f172a",
            transition: "color 200ms ease-in-out",
          }}
        />
      </SheetTrigger>

      <SheetContent side="right">
        <ul className="flex h-full flex-col items-center justify-center text-xl">
          {NAV_LINKS.map((navLink) => (
            <MobileDrawerLink section={navLink} key={navLink.href} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
