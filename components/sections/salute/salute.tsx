"use client";

import salute from "@/public/profile/salute.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Message from "./message";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/sectionTitle";

export default function Salute() {
  return (
    <Section hash="salute">
      <Container>
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
          <SectionTitle
            title={
              <>
                대표원장 <span className="text-primary">인사말</span>
              </>
            }
            subTitle="반려동물과 반려동물 가족에 대한 편안한 응대와 안정적인 진료
            환경을 위해 최선을 다하겠습니다."
          />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-10"
          >
            <div className="flex max-w-xl flex-col gap-4">
              <Message />
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button asChild>
                    <Link href="/staff">읜료진 소개</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/facility">시설 안내</Link>
                  </Button>
                </div>
                <p className="text-end text-2xl">대표원장 김홍석</p>
              </div>
            </div>
            <Image src={salute} alt="salute" width={250} />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
