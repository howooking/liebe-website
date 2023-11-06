import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TimeTable from "./time-table";
import type { Staff } from "@/constants/staff";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type StaffCardProps = {
  staff: Staff;
  selected: string;
};

export default function StaffCard({ staff, selected }: StaffCardProps) {
  return (
    <motion.li
      key={staff.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-4 sm:p-8">
        <div className="flex flex-col-reverse items-center justify-between md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div>
              <span className="md:3xl text-xl font-bold sm:text-2xl">
                {staff.name}
              </span>
              <span className="md:2xl ml-1 text-lg font-thin sm:text-xl">
                {staff.title}
              </span>
            </div>

            <ul className="my-4">
              {staff.history.map((his) => (
                <li key={his} className="text-xs md:text-sm">
                  - {his}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[250px] w-[250px]">
            <Image
              src={staff.image}
              alt={staff.name}
              placeholder="blur"
              className="rounded-full"
              fill
              sizes="(min-width: 1380px) 250px, (min-width: 1040px) calc(20.31vw - 26px), (min-width: 780px) calc(24.58vw - 59px), 250px"
            />
          </div>
        </div>
        <div>{selected === "수의사" && <TimeTable off={staff.off} />}</div>
      </Card>
    </motion.li>
  );
}
