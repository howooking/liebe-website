"use client";

import { motion } from "framer-motion";

import Title from "@/components/common/title";
import ProcedureCard from "./procedure-card";

import { PROCEDURES } from "@/constants/procedures";

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
              image={procedure.image}
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
