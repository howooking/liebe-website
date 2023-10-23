import Link from "next/link";
import Image from "next/image";

import Socials from "./socials";

import dynamic from "next/dynamic";
import Dots from "./dots";
import Logo from "./logo";
import PhoneNumber from "./phone-number";

const Drawer = dynamic(() => import("@/components/navbar/drawer"), {
  ssr: false,
});

export default function Sidebar() {
  return (
    <div className="w-[90px] bg-slate-100 fixed inset-0 md:flex flex-col items-center justify-between hidden">
      <div className="flex flex-col items-center ">
        <Link
          href="/#main"
          className="w-[90px] h-[90px] bg-primary flex justify-center items-center flex-col"
        >
          <Logo />
        </Link>
        <Drawer />
      </div>
      <PhoneNumber />
      {/* <Dots /> */}
      <Socials />
    </div>
  );
}
