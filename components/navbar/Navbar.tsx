"use client";

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/container";
import MobileDrawer from "@/components/navbar/mobile-drawer";
import NavLinks from "@/components/navbar/nav-links";
import mainLogo from "@/public/main-logo.png";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const scrollY = useScroll();
  const path = usePathname();
  const isRoot = path === "/";
  console.log(isRoot);

  return (
    <header
      className="hover:text-stongroup-[]: group fixed z-50 w-full text-white shadow-sm transition"
      style={{ background: scrollY > 50 || !isRoot ? "white" : "transparent" }}
    >
      <Container>
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={mainLogo} alt="main logo" width={30} height={30} />
            <h1 className="text-xl font-semibold">
              <span
                className="group-hover:text-primary"
                style={{ color: scrollY > 50 || !isRoot ? "#f08d47" : "white" }}
              >
                리베
              </span>
              <span
                className="group-hover:text-secondary"
                style={{ color: scrollY > 50 || !isRoot ? "#8eb62f" : "white" }}
              >
                동물메디컬센터
              </span>
            </h1>
          </Link>
          <NavLinks isRoot={isRoot} />
          <MobileDrawer />
        </div>
      </Container>
    </header>
  );
}
