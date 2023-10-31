import { SOCIALS } from "@/constants/socials";
import Container from "../container";
import Link from "next/link";
import Drawer from "./drawer";

export default function Topbar() {
  return (
    <header className="fixed z-50 w-full bg-white">
      <div className="border-b">
        <Container>
          <div className="flex h-8 items-center justify-between">
            <p className="text-sm">
              연중무휴 <span className="font-bold text-rose-500">24시</span>진료
            </p>
            <ul className="flex h-full items-center text-xs">
              {SOCIALS.map((social) => (
                <li key={social.label} className="flex h-full border-x ">
                  <Link
                    target="_blank"
                    href={social.href}
                    className="flex items-center gap-1 px-2 hover:bg-stone-800 hover:text-white"
                  >
                    <social.icon size={social.size} />
                    {social.desc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <div className="border-b">
        <Container>
          <div className="flex h-10 items-center justify-between">
            <Link href="/" className="transition hover:opacity-50">
              <h1 className="text-xl font-extrabold">
                <span className="text-primary">리베</span>
                <span className="text-secondary">동물메디컬센터</span>
              </h1>
            </Link>
            <Drawer />
          </div>
        </Container>
      </div>
    </header>
  );
}
