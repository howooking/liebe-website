import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type InfoCardType = {
  title: string;
  children: React.ReactNode;
  Icon: IconType;
  footer?: React.ReactNode;
};

export default function InfoCard({
  children,
  title,
  Icon,
  footer,
}: InfoCardType) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-center text-white">
          <Icon size={20} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator className="mb-6" />
        {children}
        <Separator className={cn(!!footer ? "" : "hidden", "mt-6")} />
      </CardContent>

      <CardFooter className="text-sm">{footer}</CardFooter>
    </Card>
  );
}
