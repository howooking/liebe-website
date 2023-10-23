"use client";

import { motion } from "framer-motion";

export default function Typography() {
  return (
    <motion.div
      className="text-white text-6xl z-20 absolute flex flex-col gap-4 tracking-tighter bottom-2 left-2 font-bold"
      animate={{ y: 0 }}
      initial={{ y: 150 }}
      transition={{ duration: 1 }}
    >
      <p>사랑과 케어로 함께하는</p>
      <p>건강한 반려생활의 길로 안내합니다</p>
      <h1 className="text-8xl">
        <span className="text-secondary">리베</span>
        <span className="text-primary">동물메디컬센터</span>
      </h1>
    </motion.div>
  );
}
