"use client";

import salute from "@/public/profile/salute.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Message from "./message";
import SectionTitle from "@/components/sectionTitle";
import Section from "@/components/section";

export default function Salute() {
  return (
    <Section hash="salute">
      <div
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to left top, #e2ff9d, #efec8c, #f8d882, #fdc57e, #fdb37f)",
        }}
      >
        <SectionTitle title="인사말" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Message />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            src={salute}
            alt="salute"
            width={400}
            className="absolute right-10 -bottom-[90px]"
          />
        </motion.div>
      </div>
    </Section>
  );
}
