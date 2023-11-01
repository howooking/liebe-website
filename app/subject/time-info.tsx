"use client";
console.warn("시간 수정");

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TIME_INFOS } from "@/constants/time";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function TimeInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="rounded-xl bg-gradient-to-br from-amber-300 to-orange-300 p-2 shadow-xl sm:p-4"
    >
      <Table className="overflow-hidden rounded-lg">
        <TableCaption>
          <p>* 심야 응급진료시 응급진료비용이 청구됩니다</p>
        </TableCaption>
        <TableHeader className="bg-stone-800">
          <TableRow>
            <TableHead className="py-2 text-center text-xl">분류</TableHead>
            <TableHead className="py-2 text-center text-xl">시간</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden rounded-lg">
          {TIME_INFOS.map((info, index) => (
            <TableRow
              className={cn(
                index % 2 === 1 ? "bg-stone-100" : "bg-stone-50",
                "text-center",
              )}
              key={info.label}
            >
              <TableCell className="py-2 text-lg">{info.label}</TableCell>
              <TableCell className="py-2 text-lg">{info.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
