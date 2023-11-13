"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Progress() {
  const [stepsComplete, setStepsComplete] = useState(0);
  const numSteps = 6;

  const handleSetStep = (num: -1 | 1) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return;
    }

    setStepsComplete((pv) => pv + num);
  };

  return (
    <div className="bg-white px-4 py-14">
      <div className="mx-auto w-full max-w-2xl rounded-md bg-white p-8 shadow-lg">
        <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
        <div className="my-6 h-48 rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-2">
          1212
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            className="rounded px-4 py-1 text-black hover:bg-gray-100"
            onClick={() => handleSetStep(-1)}
          >
            Prev
          </button>
          <button
            className="rounded bg-black px-4 py-1 text-white"
            onClick={() => handleSetStep(1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

const Steps = ({
  numSteps,
  stepsComplete,
}: {
  numSteps: number;
  stepsComplete: number;
}) => {
  const stepArray = Array.from(Array(numSteps).keys());

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map((num) => {
        const stepNum = num + 1;
        const isActive = stepNum <= stepsComplete;
        return (
          <React.Fragment key={stepNum}>
            <Step num={stepNum} isActive={isActive} />
            {stepNum !== stepArray.length && (
              <div className="relative h-1 w-full rounded-full bg-gray-200">
                <motion.div
                  className="absolute bottom-0 left-0 top-0 rounded-full bg-orange-600"
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Step = ({ num, isActive }: { num: number; isActive: boolean }) => {
  return (
    <div className="relative">
      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-300 ${
          isActive
            ? "border-orange-600 bg-orange-600 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute -inset-1.5 z-0 animate-pulse rounded-full bg-orange-100" />
      )}
    </div>
  );
};
