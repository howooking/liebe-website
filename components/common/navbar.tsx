"use client";

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/container";
import MobileDrawer from "@/components/common/mobile-drawer";
import mainLogo from "@/public/main-logo.png";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";

export default function Navbar() {
  const scrollY = useScroll();
  const path = usePathname();
  const isRoot = path === "/";
  const isScrollTop = scrollY === 0;

  return (
    <header
      className="fixed z-50 w-full text-white shadow transition"
      style={{ background: !isScrollTop || !isRoot ? "white" : "transparent" }}
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
                style={{ color: !isScrollTop || !isRoot ? "#f08d47" : "white" }}
              >
                리베
              </span>
              <span
                className="group-hover:text-secondary"
                style={{ color: !isScrollTop || !isRoot ? "#8eb62f" : "white" }}
              >
                동물메디컬센터
              </span>
            </h1>
          </Link>
          <NavLinks isRoot={isRoot} />
          <MobileDrawer isScrollTop={isScrollTop} isRoot={isRoot} />
        </div>
      </Container>
    </header>
  );
}
