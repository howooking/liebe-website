import { SOCIALS } from "@/constants/socials";
import Link from "next/link";

export default function MobileFixedFooter() {
  return (
    <div className="fixed bottom-0 z-50 flex h-12 w-full items-center justify-around text-white sm:hidden">
      {SOCIALS.map((social) => (
        <Link href={social.href} key={social.label} target="_blank">
          <social.icon size={social.size} />
        </Link>
      ))}
    </div>
  );
}
