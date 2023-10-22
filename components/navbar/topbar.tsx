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
    <div className="fixed w-full bg-muted flex items-center justify-between md:hidden">
      <div className="w-full flex">
        <Link
          href="/#main"
          className="w-[90px] h-[90px] bg-primary flex flex-col justify-center items-center hover:opacity-50 transition"
        >
          <Image alt="white liebe logo" src={logo} className="w-11" priority />
          <div className="text-white text-center text-xs font-bold">
            LIEBE
            <br />
            동물병원
          </div>
        </Link>
        <Drawer />
      </div>
      <Dots />
      <Socials />
    </div>
  );
}
