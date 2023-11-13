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
      className="flex items-center gap-1 transition hover:scale-[0.98]"
    >
      <div className="py-3 pl-3">
        <Image
          src={isScrollTop ? logo : logoFilled}
          alt="main logo"
          height={24}
          className="h-6 w-auto"
        />
      </div>
      <h1 className="text-xl font-semibold">
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
