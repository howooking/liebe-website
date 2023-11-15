import { Badge } from "@/components/ui/badge";
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
import { useMemo } from "react";

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
      <TableCaption className="text-xs">
        * 일정 변동이 있을 수 있습니다.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="border-r text-center text-slate-900 ">
            일
          </TableHead>
          <TableHead className="border-r text-center text-slate-900 ">
            월
          </TableHead>
          <TableHead className="border-r text-center text-slate-900 ">
            화
          </TableHead>
          <TableHead className="border-r text-center text-slate-900 ">
            수
          </TableHead>
          <TableHead className="border-r text-center text-slate-900 ">
            목
          </TableHead>
          <TableHead className="border-r text-center text-slate-900 ">
            금
          </TableHead>
          <TableHead className="text-center text-slate-900 ">토</TableHead>
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
                className={cn(
                  schedule === "휴" ? "font-bold text-rose-500" : "hidden",
                )}
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

const invoices = [
  {
    invoice: "휴무",
    paymentStatus: "휴무",
  },
];
