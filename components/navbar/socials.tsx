import { SOCIALS } from "@/constants/socials";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex md:flex-col items-center">
      {SOCIALS.map((social) => (
        <Link
          href={social.href}
          key={social.label}
          className="h-[90px] w-[90px] flex justify-center items-center hover:opacity-50 transition"
        >
          <social.icon size={social.size} />
        </Link>
      ))}
    </div>
  );
}
