import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type CursorProps = {
  isHovered: boolean;
};

export default function Cursor({ isHovered }: CursorProps) {
  const { x, y } = useMousePosition();
  const size = 100;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: isHovered ? 1 : 0,
      x: x! - size / 2,
      y: y! - size / 2,
      transition: { duration: 0.1 },
    });
  }, [controls, isHovered, x, y]);

  return (
    <motion.div
      className={cn(
        "fixed left-0 top-0 z-50 flex items-center justify-between rounded-full bg-primary/30 p-4 text-xl text-white",
      )}
      style={{
        width: size,
        height: size,
        pointerEvents: isHovered ? "none" : "auto",
        display: isHovered ? "flex" : "none",
      }}
      transition={{ type: "tween", ease: "backOut" }}
      animate={controls}
    >
      <BsChevronLeft />
      <BsChevronRight />
    </motion.div>
  );
}
