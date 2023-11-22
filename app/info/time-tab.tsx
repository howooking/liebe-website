"use client";

import { motion } from "framer-motion";

import ContainerNarrow from "@/components/common/container-narrow";
import Title from "@/components/common/title";
import TimeCard from "./time-card";
import Procedure from "./procedure";
import { TIME_INFOS } from "./time-info";

export default function TimeTab() {
  return (
    <ContainerNarrow>
      <section className="pt-24">
        <div className="text-center">
          <Title>진료시간 안내</Title>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
          {TIME_INFOS.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              viewport={{ once: true }}
            >
              <TimeCard
                Icon={info.Icon}
                title={info.title}
                footer={info.footer}
              >
                {info.contents}
              </TimeCard>
            </motion.div>
          ))}
        </div>
      </section>

      <Procedure />
    </ContainerNarrow>
  );
}
