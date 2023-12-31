import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import type { Testimonial } from "@/constants/testimonials";

export default function TestimonialCard({
  image: img,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "#1c1917" : "white";
  const color = position % 2 ? "white" : "#0f172a";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute left-0 top-0 flex min-h-full w-full cursor-pointer flex-col justify-between rounded-md p-8 shadow lg:p-12"
    >
      <Image
        quality={100}
        placeholder="blur"
        alt="testimonials"
        src={img}
        className="mx-auto h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-64 lg:w-64"
      />

      <div className="my-8 text-base font-light italic leading-7 lg:text-xl">
        <div className="mb-2 flex justify-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        &#34;{description}&#34;
      </div>
      <div className="space-y-1">
        <span className="block text-base font-semibold">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
}
