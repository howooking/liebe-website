import { SOCIALS } from "@/constants/socials";
import Link from "next/link";
import DrawOutlineButton from "../ui/draw-outline-button";

export default function Socials() {
  return (
    <div className="flex items-center">
      {SOCIALS.map((social) => (
        <Link
          target="_blank"
          href={social.href}
          key={social.label}
          className="h-[50px] w-[50px] md:h-[40px] md:w-[40px] flex justify-center items-center"
        >
          <DrawOutlineButton>
            <social.icon size={social.size} />
          </DrawOutlineButton>
        </Link>
      ))}
    </div>
  );
}
