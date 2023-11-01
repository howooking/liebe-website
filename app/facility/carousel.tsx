import Container from "@/components/container";
import Section from "@/components/section";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

type ItemType = {
  image: StaticImageData;
  title: string;
};

const CARD_WIDTH = 800;
const CARD_HEIGHT = 450;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

export default function CardCarousel({ items }: { items: ItemType[] }) {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER + 1);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section ref={ref}>
      <div className="relative overflow-hidden py-8">
        <Container>
          {/* CARDS */}
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </motion.div>
        </Container>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-primary/40 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-primary/40 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
}

const Card = ({ image, title }: ItemType) => {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl  shadow-md"
      style={{
        width: "50vw",
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Image
        quality={50}
        alt={title}
        src={image}
        placeholder="blur"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/40 via-black/20 to-black/0 p-4 text-white">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};
