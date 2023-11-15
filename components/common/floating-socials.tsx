"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { SOCIALS } from "@/constants/socials";
import Link from "next/link";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function FloatingSocials() {
  const { isScrollBottom } = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-10 right-10 z-50"
      style={{
        opacity: isScrollBottom ? 0 : 100,
        transition: "opacity 500ms ease",
      }}
    >
      <motion.div animate={open ? "open" : "closed"}>
        <Button
          size="icon"
          onClick={() => setOpen((pv) => !pv)}
          className="hidden items-center gap-2 rounded-full bg-orange-500 px-3 py-2 text-white shadow-2xl transition hover:bg-orange-600 lg:flex"
        >
          <motion.span variants={iconVariants}>
            {open ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
          </motion.span>
        </Button>

        <motion.div
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "bottom", translateX: "-50%" }}
          className="absolute -right-[70px] bottom-[120%] flex w-44 flex-col-reverse gap-2 overflow-hidden rounded-md bg-white p-2 shadow-2xl"
        >
          {SOCIALS.map((social) => (
            <Option
              size={social.size}
              href={social.href}
              setOpen={setOpen}
              Icon={social.icon}
              text={social.desc}
              key={social.label}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const Option = ({
  text,
  Icon,
  setOpen,
  href,
  size,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  href: string;
  size: number;
}) => {
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
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

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
