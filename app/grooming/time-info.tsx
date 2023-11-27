"use client";

import { IoIosTime } from "react-icons/io";
import { FaCut } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Time } from "../info/time-info";

export default function TimeInfo() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex items-center">
        <div className="flex items-center gap-2 text-base font-semibold md:text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-center text-white md:h-10 md:w-10">
            <IoIosTime />
          </div>
          <CardTitle>시간 안내</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <Time time="오전 10시 ~ 오후 6시" title="미용 시간" />
        <Time time="화요일, 금요일" title="휴무 요일" />
      </CardContent>

      <CardFooter className="text-sm text-slate-500">
        * 예약시 대기시간 없이 미용가능합니다.
      </CardFooter>
    </Card>
  );
}
