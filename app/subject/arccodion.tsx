"use client";

import { useState } from "react";
import { SUBJECTS } from "@/constants/subjects";
import Panel from "./panel";
import { motion } from "framer-motion";

export default function Accordion() {
  const [open, setOpen] = useState(SUBJECTS[0].id);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="mb-10 rounded-xl bg-gradient-to-br from-amber-300 to-orange-300 p-2 shadow-xl sm:p-4"
    >
      <div className="mx-auto flex h-fit w-full flex-col overflow-hidden rounded-lg shadow lg:h-[650px] lg:flex-row">
        {SUBJECTS.map((subject) => {
          return (
            <Panel
              key={subject.id}
              open={open}
              setOpen={setOpen}
              id={subject.id}
              Icon={subject.Icon}
              title={subject.title}
              imgSrc={subject.imgSrc}
              description={subject.description}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
