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
      <div className="absolute flex h-12 w-12 items-center justify-center rounded-tl-md bg-primary/80 text-xl font-bold text-white">
        {index}
      </div>
      <Image
        src={image}
        alt={`${title} image`}
        placeholder="blur"
        quality={100}
        className="overflow-hidden rounded-t-md"
        sizes="(min-width: 1100px) 316px, (min-width: 780px) calc(27vw + 24px), calc(100vw - 25px)"
      />
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
