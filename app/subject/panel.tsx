"use client";

import { AnimatePresence, motion } from "framer-motion";

import type { IconType } from "react-icons";
import { Dispatch, SetStateAction } from "react";
import Image, { StaticImageData } from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

type PanelProps = {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: StaticImageData;
  description: string;
};

export default function Panel({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}: PanelProps) {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="group relative flex flex-row-reverse items-center justify-end gap-4 border-b-[1px] border-r-[1px] border-slate-200 bg-white p-3 transition-colors hover:bg-slate-50 lg:flex-col"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden text-xl font-bold lg:block"
        >
          {title}
        </span>
        <span className="block text-xl font-bold lg:hidden">{title}</span>
        <div className="grid aspect-square w-6 place-items-center bg-slate-600 text-white lg:w-full">
          <Icon />
        </div>
        <span className="absolute bottom-0 right-[50%] z-20 h-4 w-4 translate-x-[50%] translate-y-[50%] rotate-45 border-b-[1px] border-r-[1px] border-slate-200 bg-white transition-colors group-hover:bg-slate-50 lg:bottom-[50%] lg:right-0 lg:border-b-0 lg:border-t-[1px]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="relative flex h-full w-full items-end overflow-hidden bg-black"
          >
            <Image
              alt={title}
              src={imgSrc}
              fill
              placeholder="blur"
              quality={50}
              className="object-cover object-center"
              sizes="(min-width: 1040px) calc(83.32vw - 427px), (min-width: 780px) calc(83.33vw - 72px), 79.78vw"
            />
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-black/40 px-4 py-2 text-[10px] text-white backdrop-blur-sm md:text-xs lg:text-sm"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};
