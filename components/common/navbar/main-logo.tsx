import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/public/main-logo.png";
import useWindowSize from "@/hooks/useWindowSize";

export default function MainLogo({
  scrollDown,
  width,
}: {
  scrollDown: boolean;
  width?: number;
}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition hover:scale-[0.98]"
    >
      <Image
        src={mainLogo}
        alt="main logo"
        width={width! > 640 ? 30 : 20}
        className="h-auto"
      />
      <h1 className="text-base font-semibold sm:text-xl">
        <span
          style={{
            color: scrollDown ? "#f08d47" : "#fff",
            transition: "color 500ms ease",
          }}
        >
          리베
        </span>
        <span
          style={{
            color: scrollDown ? "#8eb62f" : "#fff",
            transition: "color 500ms ease",
          }}
        >
          동물메디컬센터
        </span>
      </h1>
    </Link>
  );
}
