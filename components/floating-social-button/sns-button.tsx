import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type SnsButtonProps = {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  href: string;
};

export default function SnsButton({
  text,
  Icon,
  setOpen,
  href,
}: SnsButtonProps) {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: 15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  return (
    <Link href={href} target="_blank">
      <motion.div
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="text-xs flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 font-medium text-slate-900 transition-colors hover:bg-orange-100 hover:text-orange-500"
      >
        <motion.span variants={actionIconVariants}>
          <Icon
            size={text === "네이버블로그" ? 13 : 20}
            className={text === "네이버블로그" ? "mx-1" : ""}
          />
        </motion.span>
        <p>{text}</p>
      </motion.div>
    </Link>
  );
}
