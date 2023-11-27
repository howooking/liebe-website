import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function AdditionalCost() {
  return (
    <div className="pb-1">
      <div className="mt-1 flex h-12 w-full flex-wrap items-center justify-center gap-2 bg-gradient-to-tr from-slate-700 to-slate-950 text-white">
        추가요금
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-center font-semibold">
              엉킴 추가
            </TableCell>
            <TableCell>0.5~</TableCell>
            <TableCell className="text-center font-semibold">
              라이언컷
            </TableCell>
            <TableCell>0.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center font-semibold">
              기장 추가
            </TableCell>
            <TableCell>0.5~</TableCell>
            <TableCell className="text-center font-semibold">
              다리 나팔
            </TableCell>
            <TableCell>0.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center font-semibold">
              약욕 추가
            </TableCell>
            <TableCell>1~</TableCell>
            <TableCell className="text-center font-semibold">
              다리 방울
            </TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center font-semibold">
              노령견, 염색
            </TableCell>
            <TableCell>상담</TableCell>
            <TableCell className="text-center font-semibold">라인컷</TableCell>
            <TableCell>1.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center font-semibold">
              미용길이 6mm
            </TableCell>
            <TableCell>0.5</TableCell>
            <TableCell className="text-center font-semibold">
              슬리퍼/장화
            </TableCell>
            <TableCell>0.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center font-semibold">
              미용길이 1cm
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell className="text-center font-semibold">
              브로콜리/하이바
            </TableCell>
            <TableCell>1.5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
