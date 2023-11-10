import Container from "@/components/common/container";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Card from "./card";

export default function CardCarousel({
  items,
  selected,
}: {
  items: { image: StaticImageData; title: string }[];
  selected: string;
}) {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_WIDTH = width > 990 ? 800 : 300;
  const CARD_HEIGHT = width > 990 ? 450 : 225;
  const MARGIN = 20;
  const CARD_SIZE = CARD_WIDTH + MARGIN;

  useEffect(() => {
    setOffset(0);
  }, [selected]);

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (items.length - 1);

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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative overflow-hidden py-8">
        <Container>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => (
              <Card
                key={item.title}
                {...item}
                CARD_HEIGHT={CARD_HEIGHT}
                CARD_WIDTH={CARD_WIDTH}
                MARGIN={MARGIN}
              />
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
            className="absolute left-0 top-[55%] z-30 rounded-r-xl bg-primary/20 p-3 pl-2 text-xl text-white backdrop-blur-sm transition-[padding] hover:pl-3 lg:text-4xl"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[55%] z-30 rounded-l-xl bg-primary/40 p-3 pr-2 text-xl text-white backdrop-blur-sm transition-[padding] hover:pr-3 lg:text-4xl"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </motion.section>
  );
}
