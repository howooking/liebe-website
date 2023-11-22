import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  section: {
    label: string;
    href: string;
  };
};

export default function NavLink({ section: { label, href } }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  const motionSpan = (
    <motion.span
      className="absolute bottom-0 left-0 h-1/2 w-full bg-primary/20"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: hovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );

  return (
    <li>
      {/* 홈화면에서 #로 이동하는 부분이므로 a태그 말고 Link컴포넌트 사용시 해당 부분까지 스크롤이동을 하지 않음 */}
      {label === "오시는길" || label === "진료과목" ? (
        <a
          href={href}
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {label}
          {motionSpan}
        </a>
      ) : (
        <Link
          target={label === "보호자안내서" ? "_blank" : "_self"}
          rel={label === "보호자안내서" ? "noopener noreferrer" : undefined}
          href={href}
          className={cn(label === "홈으로" ? "md:hidden" : "block", "relative")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {label}
          {motionSpan}
        </Link>
      )}
    </li>
  );
}
