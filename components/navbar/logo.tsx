import logo from "@/public/logo.png";
import Image from "next/image";
import DrawOutlineButton from "../ui/draw-outline-button";

export default function Logo() {
  return (
    <DrawOutlineButton className="w-10 h-10">
      {/* <Image
        alt="white liebe logo"
        src={logo}
        className="h-[20px] w-[20px]"
        priority
      /> */}
      {/* <div className="text-white text-center text-xs font-bold">
        LIEBE
        <br />
        동물병원
      </div> */}
      hello
    </DrawOutlineButton>
  );
}
