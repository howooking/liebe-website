import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TIME_INFOS } from "@/constants/time";
import { cn } from "@/lib/utils";

export default function TimeInfo({ detail }: { detail?: boolean }) {
  const mappedInfos = detail ? TIME_INFOS : TIME_INFOS.slice(0, 4);
  return (
    <Table className="overflow-hidden rounded-md">
      <TableHeader className="bg-slate-100">
        <TableRow>
          <TableHead className="h-auto p-2 text-center text-slate-900">
            분류
          </TableHead>
          <TableHead className="h-auto p-2 text-center text-slate-900">
            시간
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-hidden rounded-md">
        {mappedInfos.map((info, index) => (
          <TableRow
            className={cn(
              index % 2 === 1 ? "bg-slate-50" : "bg-white",
              "text-center",
            )}
            key={info.label}
          >
            <TableCell>{info.label}</TableCell>
            <TableCell>{info.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
