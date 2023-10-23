import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

import dynamic from "next/dynamic";
import Dots from "./dots";
import Socials from "./socials";

const Drawer = dynamic(() => import("@/components/navbar/drawer"), {
  ssr: false,
});

export default function Topbar() {
  return (
    <div className="z-50 fixed w-full bg-muted flex items-center justify-between md:hidden">
      <div className="w-full flex">
        <Link
          href="/#main"
          className="w-[40px] h-[40px] bg-primary flex flex-col justify-center items-center hover:opacity-50 transition"
        >
          <Image alt="white liebe logo" src={logo} className="w-11" priority />
          <p className="text-white text-center text-xs font-bold md:block hidden">
            LIEBE
            <br />
            동물병원
          </p>
        </Link>
        <Drawer />
      </div>
      <Dots />
      <Socials />
    </div>
  );
}
