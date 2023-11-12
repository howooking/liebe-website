import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import logoFilled from "@/public/logo-filled.png";

export default function MainLogo({
  isScrollTop,
  width,
}: {
  isScrollTop: boolean;
  width?: number;
}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition hover:scale-[0.98]"
    >
      <Image
        src={isScrollTop ? logo : logoFilled}
        alt="main logo"
        width={width! > 640 ? 30 : 20}
        className="h-auto"
      />
      <h1 className="text-base font-semibold sm:text-xl">
        <span
          style={{
            color: isScrollTop ? "#fff" : "#f08d47",
            transition: "color 500ms ease",
          }}
        >
          리베
        </span>
        <span
          style={{
            color: isScrollTop ? "#fff" : "#8eb62f",
            transition: "color 500ms ease",
          }}
        >
          동물메디컬센터
        </span>
      </h1>
    </Link>
  );
}
