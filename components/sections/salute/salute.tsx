"use client";

import salute from "@/public/profile/salute.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Message from "./message";
import SectionTitle from "@/components/sectionTitle";

export default function Salute() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <SectionTitle title="인사말" />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Message />
      </motion.div>
      <motion.div>
        <Image
          src={salute}
          alt="salute"
          width={400}
          className="absolute right-10 -bottom-[90px]"
        />
      </motion.div>
    </div>
  );
}
