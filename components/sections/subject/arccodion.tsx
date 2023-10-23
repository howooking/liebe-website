"use client";

import { useState } from "react";
import Panel from "./panel";
import { SUBJECTS } from "@/constants/subjects";

export default function Accordion() {
  const [open, setOpen] = useState(SUBJECTS[0].id);

  return (
    <section className="p-4 bg-slate-100">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[650px] w-full max-w-7xl mx-auto shadow overflow-hidden">
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
    </section>
  );
}
