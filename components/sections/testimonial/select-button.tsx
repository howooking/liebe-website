import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function SelectButton({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) {
  return (
    <div className="mt-8 flex gap-1">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="relative h-1.5 w-full bg-slate-300"
          >
            {selected === n ? (
              <motion.span
                className="absolute bottom-0 left-0 top-0 bg-slate-900"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute bottom-0 left-0 top-0 bg-stone-900"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
