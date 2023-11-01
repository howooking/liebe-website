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
import { useMemo } from "react";

export default function TimeTable({ off }: { off?: number[] }) {
  const schedules = useMemo(() => {
    let arr = new Array(7).fill("근무");
    off?.forEach((index) => {
      if (index < arr.length) {
        arr[index] = "휴무";
      }
    });
    return arr;
  }, [off]);

  return (
    <Table className="w-full">
      <TableCaption className="text-xs">
        * 일정 변동이 있을 수 있습니다.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-stone-800">일</TableHead>
          <TableHead className="text-center text-stone-800">월</TableHead>
          <TableHead className="text-center text-stone-800">화</TableHead>
          <TableHead className="text-center text-stone-800">수</TableHead>
          <TableHead className="text-center text-stone-800">목</TableHead>
          <TableHead className="text-center text-stone-800">금</TableHead>
          <TableHead className="text-center text-stone-800">토</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {schedules.map((schedule, index) => (
            <TableCell key={index} className="text-center">
              <Badge
                variant={schedule === "휴무" ? "destructive" : "outline"}
                className="px-1 py-0.5 text-xs"
              >
                {schedule}
              </Badge>
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
