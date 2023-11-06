"use client";

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/container";
import MobileDrawer from "@/components/common/mobile-drawer";
import mainLogo from "@/public/main-logo.png";
import useScroll from "@/hooks/useScroll";
import NavLinks from "./nav-links";

export default function Navbar() {
  const scrollY = useScroll();

  return (
    <header
      className="fixed z-50 w-full text-white transition"
      style={{
        background: scrollY > 50 ? "white" : "transparent",
        transition: "background 500ms ease",
        borderBottom: scrollY > 50 ? "solid #e2e8f0 1px" : "none",
      }}
    >
      <Container>
        <div className="flex h-12 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:scale-105"
          >
            <Image src={mainLogo} alt="main logo" width={30} height={30} />
            <h1 className="text-xl font-semibold">
              <span
                className="group-hover:text-primary"
                style={{
                  color: scrollY > 50 ? "#f08d47" : "white",
                  transition: "color 500ms ease",
                }}
              >
                리베
              </span>
              <span
                className="group-hover:text-secondary"
                style={{
                  color: scrollY > 50 ? "#8eb62f" : "white",
                  transition: "color 500ms ease",
                }}
              >
                동물메디컬센터
              </span>
            </h1>
          </Link>
          <NavLinks />
          <MobileDrawer />
        </div>
      </Container>
    </header>
  );
}
