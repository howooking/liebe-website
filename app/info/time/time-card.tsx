import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";

type InfoCardType = {
  title: string;
  children: React.ReactNode;
  Icon: IconType;
  footer?: React.ReactNode;
};

export default function TimeCard({
  children,
  title,
  Icon,
  footer,
}: InfoCardType) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex items-center">
        <div className="flex items-center gap-2 text-base font-semibold md:text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-center text-white md:h-10 md:w-10">
            <Icon />
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1">{children}</CardContent>

      <CardFooter className="text-sm text-slate-500">{footer}</CardFooter>
    </Card>
  );
}
