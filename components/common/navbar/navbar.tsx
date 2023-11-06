"use client";

import Container from "@/components/common/container";
import MobileDrawer from "@/components/common/navbar/mobile-drawer";

import useScroll from "@/hooks/useScroll";
import NavLinks from "./nav-links";
import MainLogo from "./main-logo";

export default function Navbar() {
  const scrollY = useScroll();

  return (
    <header
      className="fixed z-50 w-full transition"
      style={{
        background: scrollY > 50 ? "white" : "transparent",
        transition: "background 500ms ease",
        borderBottom: scrollY > 50 ? "solid #e2e8f0 1px" : "none",
      }}
    >
      <Container>
        <div className="flex h-12 items-center justify-between">
          <MainLogo />
          <NavLinks />
          <MobileDrawer />
        </div>
      </Container>
    </header>
  );
}
