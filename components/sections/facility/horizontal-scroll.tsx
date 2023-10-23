"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import outter from "@/public/facility/outter.jpg";
import Subject from "../subject/subject";

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={card.src}
          alt={card.title}
          fill
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  src: StaticImageData;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    src: outter,
    title: "Title 1",
    id: 1,
  },
  {
    src: outter,
    title: "Title 2",
    id: 2,
  },
  {
    src: outter,
    title: "Title 3",
    id: 3,
  },
  {
    src: outter,
    title: "Title 4",
    id: 4,
  },
  {
    src: outter,
    title: "Title 5",
    id: 5,
  },
  {
    src: outter,
    title: "Title 6",
    id: 6,
  },
  {
    src: outter,
    title: "Title 7",
    id: 7,
  },
];
