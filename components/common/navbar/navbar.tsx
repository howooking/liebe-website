"use client";

import NavLinks from "./nav-links";
import MainLogo from "../main-logo";
import MobileDrawer from "@/components/common/navbar/mobile-drawer";

import useScrollPosition from "@/hooks/useScrollPosition";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();

  return (
    <header
      className="fixed z-50 w-full"
      style={{
        background: isScrollTop ? "transparent" : "white",
        transition: "background 500ms ease-in-out",
        boxShadow: isScrollTop ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <nav className="mx-auto flex h-12 max-w-[1440px] items-center justify-between">
        <MainLogo isScrollTop={isScrollTop} />
        <NavLinks isScrollTop={isScrollTop} />
        <MobileDrawer isScrollTop={isScrollTop} />
      </nav>
    </header>
  );
}
