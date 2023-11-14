import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/logo.png";
import logoFilled from "@/public/logo-filled.png";
import { cn } from "@/lib/utils";

type MainLogoProps = { isScrollTop?: boolean; footer?: boolean };

export default function MainLogo({ isScrollTop, footer }: MainLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <div className={cn(footer ? "p-0" : "py-3 pl-3")}>
        <Image
          src={isScrollTop || footer ? logoWhite : logoFilled}
          alt="main logo"
          height={24}
          className="h-6 w-auto"
        />
      </div>
      <h1 className="text-xl font-semibold">
        <span
          style={{
            color: isScrollTop || footer ? "#fff" : "#f08d47",
            transition: "color 500ms ease",
          }}
        >
          리베
        </span>
        <span
          style={{
            color: isScrollTop || footer ? "#fff" : "#8eb62f",
            transition: "color 500ms ease",
          }}
        >
          동물메디컬센터
        </span>
      </h1>
    </Link>
  );
}
