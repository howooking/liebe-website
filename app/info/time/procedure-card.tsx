import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProcedureCardProps = {
  title: string;
  desc: string;
  index: number;
};

export default function ProcedureCard({
  title,
  desc,
  index,
}: ProcedureCardProps) {
  return (
    <Card>
      <div className="absolute flex h-[62px] w-[62px] items-center justify-center rounded-tl-[2px] bg-primary/80 text-xl font-bold text-white  md:h-[68px] md:w-[68px]">
        0{index}
      </div>
      <CardHeader>
        <CardTitle className="text-center text-base font-semibold md:text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-28 items-center p-6 leading-6 md:h-32 ">
        {desc}
      </CardContent>
    </Card>
  );
}
