import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ArrowDown() {
  return (
    <Link
      href="/#salute"
      className="absolute z-20 text-white bottom-4 text-3xl"
    >
      <FiChevronDown className="animate-bounce mt-10  transition cursor-pointer" />
    </Link>
  );
}
