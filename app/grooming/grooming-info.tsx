import { IoIosTime } from "react-icons/io";
import { FaCut } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TimeTable from "../staff/time-table";
import { motion } from "framer-motion";

export default function GroomingInfo() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-0 space-y-6 md:grid-cols-3 md:gap-6 md:space-y-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="flex h-full flex-col">
        <CardHeader className="flex items-center">
          <div className="flex items-center gap-2 text-base font-semibold md:text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-center text-white md:h-10 md:w-10">
              <IoIosTime />
            </div>
            <CardTitle>시간 안내</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p>오전 10시 ~ 오후 6시</p>
          <TimeTable off={[2, 5]} />
        </CardContent>

        <CardFooter className="text-sm text-slate-500">
          * 예약시 대기시간 없이 미용가능합니다.
        </CardFooter>
      </Card>

      <Card className="col-span-2 flex h-full flex-col">
        <CardHeader className="flex items-center">
          <div className="flex items-center gap-2 text-base font-semibold md:text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-center text-white md:h-10 md:w-10">
              <FaCut />
            </div>
            <CardTitle>비용 안내</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1">비용안내 추가 예정</CardContent>

        <CardFooter className="text-sm text-slate-500">
          * 몸무게에 따라 비용이 증가합니다.
        </CardFooter>
      </Card>
    </motion.div>
  );
}
