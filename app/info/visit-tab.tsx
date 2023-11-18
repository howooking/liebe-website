"use client";

import { motion } from "framer-motion";
import { FaBowlFood, FaCamera, FaEye, FaDog, FaCheck } from "react-icons/fa6";

import Container2 from "@/components/common/container2";
import Title from "@/components/common/title";
import Highlight from "@/components/common/highlight";
import TimeCard from "./time-card";
import CheckLine from "@/components/common/check-line";

export default function VisitTab() {
  return (
    <Container2>
      <section className="py-24">
        <div className="text-center">
          <Title>입원 및 면회 안내</Title>
        </div>
        <div className="grid grid-cols-1 gap-6 break-keep pt-6 leading-6 md:grid-cols-2">
          {VISIT_INFOS.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimeCard Icon={info.Icon} title={info.title}>
                {info.contents}
              </TimeCard>
            </motion.div>
          ))}
        </div>
      </section>
    </Container2>
  );
}

const VISIT_INFOS = [
  {
    Icon: FaDog,
    title: "면회시간 / 장소",
    contents: (
      <div className="space-y-2">
        <CheckLine>
          면회시간은{" "}
          <Highlight className="font-bold">오전 10시 ~ 오후 9시</Highlight>
          입니다.
        </CheckLine>
        <CheckLine>
          중환자가 아닌 경우 <Highlight className="font-bold">면회실</Highlight>
          에서도 면회가 가능합니다.
        </CheckLine>
        <CheckLine>
          중환자의 경우 <Highlight className="font-bold">입원장</Highlight>에서
          면회가 가능합니다.
        </CheckLine>
        <CheckLine>
          <Highlight className="font-bold">수의사 상담</Highlight>이 필요할 경우
          프론트에 말씀해주세요.
        </CheckLine>
      </div>
    ),
  },
  {
    Icon: FaBowlFood,
    title: "처방식 급여",
    contents: (
      <div className="space-y-2">
        <CheckLine>
          식사는 <Highlight className="font-bold">오전 5시, 오후 5시</Highlight>
          2회 급여하고 있습니다.
        </CheckLine>
        <CheckLine>
          환자 상태에 맞는 <Highlight className="font-bold">처방식</Highlight>을
          급여하고 있습니다.
        </CheckLine>
        <CheckLine>
          아이의 <Highlight className="font-bold">식습관</Highlight>을
          말씀해주시면 큰 도움이 됩니다.
        </CheckLine>
      </div>
    ),
  },
  {
    Icon: FaCamera,
    title: "사진발송",
    contents: (
      <div className="space-y-2">
        <CheckLine>
          리베동물메디컬센터는 아이를 걱정하는 보호자의 마음을 누구보다 잘
          알기에 입원기간동안 아이사진을{" "}
          <Highlight className="font-bold">카카오톡</Highlight>으로
          보내드립니다.
        </CheckLine>
        <CheckLine>
          리베동물메디컬센터{" "}
          <Highlight className="font-bold">카카오 채널</Highlight>을
          친구추가해주세요.
        </CheckLine>
      </div>
    ),
  },
  {
    Icon: FaEye,
    title: "모니터링 및 처치",
    contents: (
      <div className="space-y-2">
        <CheckLine>
          소중한 우리 아이들을{" "}
          <Highlight className="font-bold">24시간</Highlight> 수의사와 간호사가
          모니터링을 하고있습니다.
        </CheckLine>
        <CheckLine>정해진 시간에 추가적인 처차 및 검사를 실시합니다.</CheckLine>
      </div>
    ),
  },
];
