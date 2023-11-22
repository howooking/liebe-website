import Link from "next/link";

import { SheetClose } from "@/components/ui/sheet";

type MobileDrawerLinkProps = {
  section: {
    label: string;
    href: string;
  };
};

export default function MobileDrawerLink({
  section: { label, href },
}: MobileDrawerLinkProps) {
  return (
    <li>
      <SheetClose asChild>
        {label === "오시는길" || label === "진료과목" ? (
          <a href={href} className="px-1.5 py-3">
            {label}
          </a>
        ) : (
          <Link
            href={href}
            className="px-1.5 py-3"
            target={label === "보호자안내서" ? "_blank" : "_self"}
            rel={label === "보호자안내서" ? "noopener noreferrer" : undefined}
          >
            {label}
          </Link>
        )}
      </SheetClose>
    </li>
  );
}
