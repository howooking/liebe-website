"use client";

import Title from "@/components/common/title";
import ProcedureCard from "./procedure-card";
import { motion } from "framer-motion";

export default function Procedure() {
  return (
    <section className="py-12">
      <div className="text-center">
        <Title>진료절차 안내</Title>
      </div>
      <ol className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
        {PROCEDURES.map((procedure, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
            viewport={{ once: true }}
          >
            <ProcedureCard
              title={procedure.title}
              desc={procedure.desc}
              index={index + 1}
            />
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

const PROCEDURES = [
  { title: "내원 접수", desc: "초진 시 신규등록 과정이 필요합니다." },
  {
    title: "대기",
    desc: "예약없이 내원하신 경우 대기시간이 길어질 수 있습니다.",
  },
  {
    title: "문진",
    desc: "문진과 상담을 토대로 진료계획을 수립합니다.",
  },
  {
    title: "검사/처치",
    desc: "의심 질환에 대한 검사와 처치를 진행합니다.",
  },
  {
    title: "상담",
    desc: "검사결과과 나오면 주치의와 상댐을 통해 추가적인 검사나 치료계획을 상의합니다.",
  },
  {
    title: "약처방/수납",
    desc: "약이 있을 경우 처방을 받고 수납 및 재진을 예약합니다.",
  },
];
