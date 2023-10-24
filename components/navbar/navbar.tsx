import dynamic from "next/dynamic";
import Socials from "./socials";
import Logo from "./logo";
import Drawer from "@/components/navbar/drawer";

export default function Navbar() {
  return (
    <div className="fixed z-40 flex h-14 w-full items-center justify-between bg-transparent">
      <Drawer />
      {/* <Socials /> */}
    </div>
  );
}
