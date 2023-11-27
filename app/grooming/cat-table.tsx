import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

export default function CatTable() {
  return (
    <>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead className="text-center font-semibold">목욕</TableHead>
            <TableHead className="text-center font-semibold">
              마취 미용
            </TableHead>
            <TableHead className="text-center font-semibold">
              무마취 미용
            </TableHead>
          </TableRow>
          <TableRow>
            <TableCell className="text-center">4.5</TableCell>
            <TableCell className="text-center">7.5</TableCell>
            <TableCell className="text-center">10.5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center font-semibold">
              마취전 검사
              <br />
              (혈청 10종)
            </TableCell>
            <TableCell className="text-center font-semibold">
              마취전 검사
              <br />
              (proBNP)
            </TableCell>
            <TableCell className="text-center font-semibold">
              마취 비용
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">3.3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="space-y-1.5 p-4 text-sm tracking-tight text-slate-500">
        <p>* 마취 시 수의사와 상담이 필요합니다</p>
        <p>* 6개월 이내 혈액검사기록 소지시 검사 제외</p>
        <p>* 무마취미용은 과거경험이 있어야 합니다</p>
      </div>
    </>
  );
}
