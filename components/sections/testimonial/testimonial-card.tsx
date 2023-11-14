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
      className="absolute left-0 top-0 flex min-h-full w-full cursor-pointer flex-col justify-between p-8 shadow lg:p-12"
    >
      <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-64 lg:w-64">
        <Image
          placeholder="blur"
          alt="testimonials"
          src={img}
          fill
          className="rounded-full object-cover"
          sizes='(max-width: 345px) 50vw, (max-width: 1024px) 25vw, 20vw"'
        />
      </div>
      <p className="my-8 text-base font-light italic leading-7 lg:text-xl">
        &#34;{description}&#34;
      </p>
      <div className="space-y-1">
        <span className="block text-base font-semibold">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
}
