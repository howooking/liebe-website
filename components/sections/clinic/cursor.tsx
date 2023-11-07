import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type CursorProps = {
  isHovered: boolean;
  isGrabbed: boolean;
  setIsGrabbed: Dispatch<SetStateAction<boolean>>;
};

export default function Cursor({ isHovered }: CursorProps) {
  const { x, y } = useMousePosition();
  const size = 100;

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
      variants={{
        default: {
          x: x! - size / 2,
          y: y! - size / 2,
        },
      }}
      transition={{ type: "tween", ease: "backOut" }}
      animate="default"
    >
      <BsChevronLeft />
      <BsChevronRight />
    </motion.div>
  );
}
