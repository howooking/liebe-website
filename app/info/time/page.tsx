"use client";

import { motion } from "framer-motion";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";
import { MdLunchDining } from "react-icons/md";

import Container2 from "@/components/common/container2";
import Title from "@/components/common/title";
import { Badge } from "@/components/ui/badge";
import TimeCard from "./time-card";
import Procedure from "./procedure";

export default function TimeTab() {
  return (
    <Container2>
      <section className="pt-12">
        <div className="text-center">
          <Title>진료시간 안내</Title>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
          {TIME_INFOS.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimeCard
                Icon={info.Icon}
                title={info.title}
                footer={info.footer}
              >
                {info.contents}
              </TimeCard>
            </motion.div>
          ))}
        </div>
      </section>

      <Procedure />
    </Container2>
  );
}

const Time = ({ title, time }: { title: string; time: string }) => (
  <div className="flex items-center gap-1">
    <Badge className="rounded-full bg-slate-800 px-2 py-1 text-sm font-normal">
      {title}
    </Badge>
    <p className="text-base">{time}</p>
  </div>
);

const TIME_INFOS = [
  {
    Icon: FaBriefcaseMedical,
    title: "일반진료",
    contents: (
      <>
        <div className="mb-4 font-semibold">365일 / 연중무휴</div>
        <div className="flex flex-col gap-2">
          <Time time="오전 10시 - 오후 8시" title="주간진료" />
          <Time time="오후 8시 - 자정" title="야간진료" />
        </div>
      </>
    ),
    footer: <p>* 예약환자가 우선적으로 진료를 받습니다.</p>,
  },
  {
    Icon: FaTruckMedical,
    title: "심야응급",
    contents: (
      <>
        <div className="mb-4 font-semibold">365일 / 연중무휴</div>
        <Time time="자정 - 오전 10시" title="심야야간" />
      </>
    ),
    footer: (
      <div className="space-y-1 break-keep leading-4">
        <p>* 심야응급진료 비용이 발생합니다.</p>
      </div>
    ),
  },
  {
    Icon: MdLunchDining,
    title: "식사/회진시간",
    contents: (
      <div className="flex flex-col gap-2">
        <Time time="오후 12시 - 오후 1시" title="점심시간" />
        <Time time="오후 1시 - 오후 1시 30분" title="회진시간" />
        <Time time="오후 5시 - 오후 6시" title="저녁시간" />
      </div>
    ),
    footer: (
      <p className="leading-4">* 입원환자는 5시, 17시 처방식이 급여됩니다.</p>
    ),
  },
];
