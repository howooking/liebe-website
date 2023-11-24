"use client";

import { motion } from "framer-motion";

import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import BackgroundCircles from "@/components/common/background-circles";
import Question from "./question";
import { QNAS } from "@/constants/qna";

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
            <Question question={qna.question} key={qna.question}>
              <div className="leading-6">{qna.answer}</div>
            </Question>
          ))}
        </div>
      </motion.div>
      <BackgroundCircles />
    </Section>
  );
}
