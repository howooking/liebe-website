"use client";

import Container from "@/components/common/container";
import MobileDrawer from "@/components/common/navbar/mobile-drawer";

import useScroll from "@/hooks/useScroll";
import NavLinks from "./nav-links";
import MainLogo from "./main-logo";
import { useMemo } from "react";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

export default function Navbar() {
  const scrollY = useScroll();
  const scrollDown = useMemo(() => scrollY > 50, [scrollY]);
  const { width } = useWindowSize();

  return (
    <header
      className="fixed z-50 w-full"
      style={{
        background: scrollDown ? "white" : "transparent",
        transition: "background 500ms ease",
        borderBottom: scrollDown ? "solid #e2e8f0 1px" : "none",
      }}
    >
      <Container>
        <motion.div
          className="flex h-12 items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MainLogo scrollDown={scrollDown} width={width} />
          <NavLinks scrollDown={scrollDown} />
          <MobileDrawer scrollDown={scrollDown} width={width} />
        </motion.div>
      </Container>
    </header>
  );
}
