"use client";

import Container from "@/components/common/container";
import Highlight from "@/components/common/highlight";
import Section from "@/components/common/section";
import { motion } from "framer-motion";

import { FaHeart, FaHandshakeSimple, FaRoad } from "react-icons/fa6";

export default function ValueSection() {
  return (
    <div className="bg-stone-100">
      <Section>
        <Container>
          <div className="py-12 lg:py-24">
            <ul className="grid grid-cols-1 justify-center gap-12 lg:grid-cols-3 lg:gap-24">
              {VALUES.map((value, index) => (
                <motion.li
                  key={index}
                  className="space-y-2 lg:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: (index + 1) * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-white">
                      <value.Icon size={24} />
                    </div>
                    <div className="text-base font-semibold xl:text-xl">
                      {value.title}
                    </div>
                  </div>
                  <div className="break-keep leading-5">{value.subtitle}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </div>
  );
}

const VALUES = [
  {
    title: (
      <>
        고객과의 <Highlight>신뢰</Highlight>를 우선으로 하는
      </>
    ),
    subtitle: (
      <>
        최고 수준의 전문 의료진과 정성스러운 친절 서비스로, 보호자님에게{" "}
        <Highlight className="font-semibold">신뢰</Highlight>를 안겨드립니다.
      </>
    ),
    Icon: FaHandshakeSimple,
  },
  {
    title: (
      <>
        환자를 내자식과 같이 <Highlight>사랑</Highlight>하는
      </>
    ),
    subtitle: (
      <>
        <Highlight className="font-semibold">사랑</Highlight>과 전문 의료로
        당신의 반려동물을 책임지고 지켜드립니다. 함께하는 따뜻한 치료, 언제나
        당신과 함께합니다.
      </>
    ),
    Icon: FaHeart,
  },
  {
    title: (
      <>
        <Highlight>원칙</Highlight>과 타협하지 않는
      </>
    ),
    subtitle: (
      <>
        <Highlight className="font-semibold">원칙</Highlight>을 바탕으로 하는
        전문 의료로, 당신의 반려동물을 안전하게 돌봐 드립니다. 높은 기술과
        인간적인 손길로 편안한 치료를 약속합니다.
      </>
    ),
    Icon: FaRoad,
  },
];
