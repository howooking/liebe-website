"use client";

import Container from "@/components/container";
import { useEffect, useState } from "react";
import { DarkmodeSwitch } from "./darkmode-switch";
import Link from "next/link";
import SOCIALS from "@/constants/socials";
import { AiOutlineMenu } from "react-icons/ai";

// const NAV_ITEMS = [
//   {
//     label: "진료과목",
//     href: "/#subject",
//   },
//   {
//     label: "직원소개",
//     href: "/#staff",
//   },
//   {
//     label: "시설안내",
//     href: "/#facility",
//   },
//   {
//     label: "오시는길",
//     href: "/#map",
//   },
// ];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0); // 첫 접속시 중간으로 스크롤이 이동하는 오류 발생
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className="fixed w-full h-[50px] flex items-center bg-muted">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <AiOutlineMenu />
            <Link className="flex items-center gap-2" href="/#home">
              <h1>리베동물메디컬센터</h1>
            </Link>
          </div>
          <div className="flex gap-20">
            <ul className="flex items-center gap-10">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <social.icon
                    size={social.size}
                    className="hover:text-primary transition cursor-pointer"
                  />
                </li>
              ))}
            </ul>
            <DarkmodeSwitch />
          </div>
        </div>
      </Container>
    </header>
  );
}
