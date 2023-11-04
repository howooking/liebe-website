import { Button } from "@/components/ui/button";
import { MAP_LINKS } from "@/constants/map-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MapLink() {
  return (
    <div className="flex gap-2">
      {MAP_LINKS.map((link) => (
        <Link key={link.title} target="_blank" href={link.href}>
          <Button
            className={cn(`text-${link.textColor}`)}
            style={{
              backgroundColor: link.bgColor,
              color: link.textColor,
            }}
          >
            {link.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
