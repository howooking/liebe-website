"use client";

import salute from "@/public/profile/salute.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Message from "./message";

export default function Salute() {
  return (
    <div className="relative w-full bg-foreground h-screen overflow-hidden flex items-center justify-center">
      <Message />
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
