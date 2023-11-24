import NavLink from "./nav-link";

import { NAV_LINKS } from "@/constants/nav-links";

type NavLinksProps = {
  isScrollTop: boolean;
};

export default function NavLinks({ isScrollTop }: NavLinksProps) {
  return (
    <ul
      className="mr-3 hidden items-center justify-center gap-6 lg:flex"
      style={{
        color: isScrollTop ? "#fff" : "#0f172a",
        transition: "color 200ms ease-in-out",
      }}
    >
      {NAV_LINKS.map((navLink) => (
        <NavLink key={navLink.href} section={navLink} />
      ))}
    </ul>
  );
}
