import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "./testimonial.type";

export default function TestimonialCard({
  img,
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
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

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
      className="absolute left-0 top-0 flex min-h-full w-full cursor-pointer flex-col justify-between p-8 lg:p-12"
    >
      <div className="relative mx-auto aspect-square h-1/2 w-1/2 overflow-hidden rounded-full">
        <Image
          src={img}
          alt={name}
          placeholder="blur"
          fill
          className="object-cover"
        />
      </div>
      <p className="my-8 text-lg font-light italic lg:text-xl">
        &quot;{description}&quot;
      </p>
      <div>
        <span className="block text-lg font-semibold">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
}
