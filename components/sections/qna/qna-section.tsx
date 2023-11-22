"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import { QNAS } from "@/constants/qna";
import BackgroundCircles from "@/components/common/background-circles";

export default function QnaSection() {
  return (
    <Section>
      <motion.div
        className="px-3 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-3xl divide-y-[1px] divide-slate-200">
          <SectionTitle title="자주 묻는 질문" />
          {QNAS.map((qna) => (
            <Question title={qna.question} key={qna.question}>
              <p>{qna.answer}</p>
            </Question>
          ))}
        </div>
      </motion.div>
      <BackgroundCircles />
    </Section>
  );
}

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div animate={open ? "open" : "closed"}>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="text-lg bg-primary bg-clip-text text-left font-semibold"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(240	141	71)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
