import logo from "@/public/logo.png";
import Image from "next/image";
import DrawOutlineButton from "../ui/draw-outline-button";

export default function Logo() {
  return (
    <DrawOutlineButton>
      <Image alt="white liebe logo" src={logo} className="w-11" priority />
      <div className="text-white text-center text-xs font-bold">
        LIEBE
        <br />
        동물병원
      </div>
    </DrawOutlineButton>
  );
}
