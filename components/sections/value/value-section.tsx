"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/container";
import { VALUES } from "../../../constants/values";
import Section from "@/components/common/section";

export default function ValueSection() {
  return (
    <Section bgStone>
      <Container>
        <div className="px-6 py-12 lg:py-24">
          <ul className="grid grid-cols-1 justify-center gap-12 lg:grid-cols-3 lg:gap-24">
            {VALUES.map((value, index) => (
              <motion.li
                key={index}
                className="space-y-2 lg:space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: (index + 1) * 0.5 }}
                viewport={{ once: false }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-white">
                    <value.Icon size={24} />
                  </div>
                  <div className="text-base font-semibold xl:text-xl">
                    {value.title}
                  </div>
                </div>
                <div className="break-keep leading-5">{value.subtitle}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
