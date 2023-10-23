import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

import dynamic from "next/dynamic";
import Dots from "./dots";
import Socials from "./socials";
import Logo from "./logo";

const Drawer = dynamic(() => import("@/components/navbar/drawer"), {
  ssr: false,
});

export default function Topbar() {
  return (
    <div className="z-50 fixed w-full bg-slate-100 flex items-center justify-between md:hidden">
      <Drawer />
      <Socials />
    </div>
  );
}
