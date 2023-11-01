"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";
import Image from "next/image";
import sample from "@/public/subjects/internal.jpg";

export default function SubjcetsScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className="grid place-items-center bg-black p-4 text-white">
        <FiArrowUp className="text-xl" />
      </div>
    </>
  );
}

const Content = ({ content }: { content: typeof items }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`flex h-screen flex-col justify-between p-8 ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="w-full max-w-md font-light">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({
  content,
  scrollYProgress,
}: {
  content: typeof items;
  scrollYProgress: MotionValue<number>;
}) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"],
  );

  return (
    <div className="sticky top-0 h-[calc(100vh-200px)] w-24 overflow-hidden md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <Image
            key={id}
            alt={title}
            className="h-[calc(100vh-200px)] w-full object-cover"
            src={sample}
            width={200}
            height={300}
          />
        ))}
      </motion.div>
    </div>
  );
};

const items = [
  {
    id: 1,
    title: "Black Nike w white check",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80",
  },
  {
    id: 2,
    title: "Bunch of black and white shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
  },
  {
    id: 3,
    title: "White shoes in the rain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  },
  {
    id: 4,
    title: "White shoes with black heel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80",
  },
];
