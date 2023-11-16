import Image, { StaticImageData } from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProcedureCardProps = {
  title: string;
  desc: string;
  index: number;
  image: StaticImageData;
};

export default function ProcedureCard({
  title,
  desc,
  index,
  image,
}: ProcedureCardProps) {
  return (
    <Card>
      <div className="absolute flex h-12 w-12 items-center justify-center rounded-tl-[2px] bg-primary/80 text-xl font-bold text-white ">
        {index}
      </div>
      <Image src={image} alt={`${title} image`} placeholder="blur" />
      <CardHeader className="p-0">
        <CardTitle className="pt-6 text-center text-base font-semibold md:text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-28 items-center leading-6 md:h-32 ">
        {desc}
      </CardContent>
    </Card>
  );
}
