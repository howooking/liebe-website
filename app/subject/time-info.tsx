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

export default function TimeInfo({ front }: { front: boolean }) {
  const mappedInfos = front ? TIME_INFOS.slice(0, 4) : TIME_INFOS;
  return (
    <div>
      <Table className="overflow-hidden rounded-lg">
        <TableHeader className="bg-slate-600">
          <TableRow>
            <TableHead className="text-center text-lg">분류</TableHead>
            <TableHead className="text-center text-lg">시간</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden rounded-lg">
          {mappedInfos.map((info, index) => (
            <TableRow
              className={cn(
                index % 2 === 1 ? "bg-slate-200" : "bg-slate-100",
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
    </div>
  );
}
