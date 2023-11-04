import { MAP_LINKS } from "@/constants/map-links";
import Link from "next/link";

export default function MapLink() {
  return (
    <div className="flex  flex-col gap-2">
      {MAP_LINKS.map((link) => (
        <Link
          key={link.title}
          target="_blank"
          href={link.href}
          style={{
            backgroundColor: link.bgColor,
            color: link.textColor,
          }}
          className="z-20 flex items-center justify-center rounded-md px-2 py-2 text-xs font-bold transition hover:scale-[0.98] md:text-sm"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
