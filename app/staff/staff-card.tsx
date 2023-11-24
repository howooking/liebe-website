import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import TimeTable from "./time-table";

import type { Staff } from "@/constants/staffs";
import { Badge } from "@/components/ui/badge";

type StaffCardProps = {
  staff: Staff;
  selected: string;
  index: number;
};

export default function StaffCard({ staff, selected, index }: StaffCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <div className="flex flex-col-reverse items-center justify-between md:flex-row md:items-start">
          {/* Staff Information Section */}
          <div className="flex flex-col items-center  gap-4 md:items-start">
            <div className="mt-2 space-x-1">
              <span className="text-xl font-bold">{staff.name}</span>
              <span className="text-xl font-thin">{staff.title}</span>
            </div>
            <div>
              <ul className="flex gap-2">
                {staff.parts?.map((part) => (
                  <li key={part}>
                    <Badge className="rounded-full bg-slate-800 px-2 py-1 text-sm font-normal">
                      {part}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <ul>
                {staff.histories?.map((history) => (
                  <li key={history} className="leading-7">
                    {history}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Staff Image Section */}
          <Image
            quality={100}
            src={staff.image}
            alt={staff.name}
            placeholder="blur"
            className="h-[200px] w-[200px] rounded-full"
          />
        </div>
        <div>{selected === "수의사" && <TimeTable off={staff.off} />}</div>
      </Card>
    </motion.li>
  );
}
