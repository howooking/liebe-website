import Link from "next/link";
import type { IconType } from "react-icons";

type SnsButtonProps = {
  text: string;
  Icon: IconType;
  href: string;
};

export default function SnsButton({ text, Icon, href }: SnsButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="text-xs flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 font-medium text-slate-900 transition-colors hover:bg-orange-100 hover:text-orange-500">
        <span>
          <Icon
            size={text === "네이버블로그" ? 13 : 20}
            className={text === "네이버블로그" ? "mx-1" : ""}
          />
        </span>
        <p>{text}</p>
      </div>
    </Link>
  );
}
