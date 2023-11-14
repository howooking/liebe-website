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
      <CardHeader className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-center text-white">
            <Icon size={24} />
          </div>
          <CardTitle className="text-base font-semibold xl:text-xl">
            {title}
          </CardTitle>
        </div>
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
