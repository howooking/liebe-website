import { useMemo } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";

export default function TimeTable({ off }: { off?: number[] }) {
  const schedules = useMemo(() => {
    let arr = new Array(7).fill("");
    off?.forEach((index) => {
      if (index < arr.length) {
        arr[index] = "휴";
      }
    });
    return arr;
  }, [off]);

  return (
    <Table className="mt-3 w-full overflow-hidden rounded-lg">
      <TableHeader>
        <TableRow>
          {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
            <TableHead
              key={index}
              className={cn(
                "text-center text-slate-900",
                index === 6 ? "" : "border-r",
              )}
            >
              {day}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {schedules.map((schedule, index) => (
            <TableCell
              key={index}
              className={cn(
                "overflow-hidden  rounded-lg text-center",
                index === 6 ? "" : "border-r",
              )}
            >
              <div
                className={cn(schedule === "휴" && "font-bold text-rose-500")}
              >
                {schedule}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
