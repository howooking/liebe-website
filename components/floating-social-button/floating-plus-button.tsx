"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import SnsButton from "./sns-button";
import { Button } from "../ui/button";

import useScrollPosition from "@/hooks/useScrollPosition";
import { SOCIALS } from "@/constants/socials";

export default function FloatingPlusButton() {
  const { isScrollBottom } = useScrollPosition();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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

  return (
    <div
      className="fixed bottom-10 right-10 z-40"
      style={{
        opacity: isScrollBottom ? 0 : 100,
        pointerEvents: isScrollBottom ? "none" : "auto",
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <motion.div animate={open ? "open" : "closed"}>
        <Button
          id="al"
          aria-label="floating button to show buttons linked to sns"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((pv) => !pv);
          }}
          className="hidden items-center gap-2 rounded-full bg-orange-500 px-3 py-2 text-white shadow-2xl transition hover:bg-orange-600 lg:flex"
        >
          <motion.span variants={iconVariants}>
            {open ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
          </motion.span>
        </Button>

        <motion.div
          ref={dropdownRef}
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "bottom", translateX: "-50%" }}
          className="absolute -right-[70px] bottom-[120%] flex w-44 flex-col-reverse gap-2 overflow-hidden rounded-md bg-white p-2 shadow-2xl"
        >
          {SOCIALS.map((social) => (
            <SnsButton
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
