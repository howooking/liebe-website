import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/public/main-logo.png";

export default function MainLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={mainLogo} alt="main logo" width={30} height={30} />
      <h1 className="text-xl font-semibold">
        <span
          className="group-hover:text-primary"
          style={{
            color: scrollY > 50 ? "#f08d47" : "#fff",
            transition: "color 500ms ease",
          }}
        >
          리베
        </span>
        <span
          className="group-hover:text-secondary"
          style={{
            color: scrollY > 50 ? "#8eb62f" : "#fff",
            transition: "color 500ms ease",
          }}
        >
          동물메디컬센터
        </span>
      </h1>
    </Link>
  );
}
