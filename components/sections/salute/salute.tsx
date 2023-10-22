"use client";

import salute from "@/public/profile/salute.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Salute() {
  return (
    <div className="relative w-full bg-slate-200 h-screen overflow-hidden flex items-center">
      <motion.div>
        <Image
          src={salute}
          alt="salute"
          width={400}
          className="absolute right-10 -bottom-[70px]"
        />
      </motion.div>
    </div>
  );
}
