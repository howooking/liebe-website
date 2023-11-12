"use client";

import Container from "@/components/common/container";
import MobileDrawer from "@/components/common/navbar/mobile-drawer";

import NavLinks from "./nav-links";
import MainLogo from "./main-logo";
import useWindowSize from "@/hooks/useWindowSize";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();
  const { width } = useWindowSize();

  return (
    <header
      className="fixed z-50 w-full"
      style={{
        background: isScrollTop ? "transparent" : "white",
        transition: "background 500ms ease",
        borderBottom: isScrollTop ? "none" : "solid #e2e8f0 1px",
      }}
    >
      <Container>
        <div className="flex h-12 items-center justify-between px-2 sm:px-0">
          <MainLogo isScrollTop={isScrollTop} width={width} />
          <NavLinks isScrollTop={isScrollTop} />
          <MobileDrawer isScrollTop={isScrollTop} width={width} />
        </div>
      </Container>
    </header>
  );
}
