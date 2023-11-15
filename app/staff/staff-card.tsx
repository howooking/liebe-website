import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TimeTable from "./time-table";
import type { Staff } from "@/constants/staff";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type StaffCardProps = {
  staff: Staff;
  selected: string;
  index: number;
};

export default function StaffCard({ staff, selected, index }: StaffCardProps) {
  return (
    <motion.li
      key={staff.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <div className="flex flex-col-reverse  items-center justify-between gap-2 md:flex-row md:items-start">
          <div className="flex flex-col items-center  gap-4 md:items-start">
            <div className="space-x-1">
              <span className="text-xl font-bold">{staff.name}</span>
              <span className="text-xl font-thin">{staff.title}</span>
            </div>

            <ul className="my-4">
              {staff.history.map((his) => (
                <li key={his}>- {his}</li>
              ))}
            </ul>
          </div>

          <Image
            src={staff.image}
            alt={staff.name}
            width={200}
            height={200}
            placeholder="blur"
            className="rounded-full"
            sizes="(min-width: 1380px) 250px, (min-width: 1040px) calc(20.31vw - 26px), (min-width: 780px) calc(24.58vw - 59px), 250px"
          />
        </div>
        <div>
          {selected === "수의사" ? <TimeTable off={staff.off} /> : null}
        </div>
      </Card>
    </motion.li>
  );
}
