import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GROOMING_COSTS } from "@/constants/grooming-costs";
import CatTable from "./cat-table";

export default function CostTable({ selected }: { selected: string }) {
  const catSelected = selected === "고양이";
  return (
    <>
      {!catSelected ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-4 text-center font-semibold">
                체중
              </TableHead>
              <TableHead>
                <TableHeadChild title="목욕" description="기본정리+목욕" />
              </TableHead>
              <TableHead>
                <TableHeadChild
                  title="부분미용"
                  description="목욕+부분+얼굴컷"
                />
              </TableHead>
              <TableHead>
                <TableHeadChild title="전체미용" description="전체클리핑" />
              </TableHead>
              <TableHead>
                <TableHeadChild title="전체미용" description="몸+얼굴컷" />
              </TableHead>
              <TableHead>
                <TableHeadChild title="스포팅" description="스포팅+몸" />
              </TableHead>
              <TableHead>
                <TableHeadChild title="가위컷" description="전체가위컷" />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Object.keys(GROOMING_COSTS[selected].cost).map((weight) => (
              <TableRow key={weight}>
                <TableCell className="text-center">{weight}</TableCell>
                {GROOMING_COSTS[selected].cost[weight].map((cost) => (
                  <TableCell className="text-center" key={cost}>
                    {cost}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <CatTable />
      )}
    </>
  );
}

const TableHeadChild = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center font-semibold">
      {title}
      <br />
      <span className="hidden pt-1 text-sm sm:block">{description}</span>
    </div>
  );
};
