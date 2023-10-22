import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import Socials from "./socials";

import dynamic from "next/dynamic";
import Dots from "./dots";

const Drawer = dynamic(() => import("@/components/navbar/drawer"), {
  ssr: false,
});

export default function Sidebar() {
  return (
    <div className="w-[90px] bg-white fixed inset-0 md:flex flex-col items-center justify-between hidden">
      <div className="flex flex-col items-center ">
        <Link
          href="/#main"
          className="w-[90px] h-[90px] bg-primary flex justify-center items-center flex-col hover:opacity-50 transition"
        >
          <Image alt="white liebe logo" src={logo} className="w-11" priority />
          <h1 className="text-white text-center text-xs font-bold">
            LIEBE
            <br />
            동물병원
          </h1>
        </Link>
        <Drawer />
      </div>
      <Dots />
      <Socials />
    </div>
  );
}
