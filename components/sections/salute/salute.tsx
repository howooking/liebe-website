"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import salute from "@/public/profile/salute.png";
import Message from "@/components/sections/salute/message";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/sectionTitle";
import Container from "@/components/container";
import useWindowSize from "@/hooks/useWindowSize";

export default function Salute() {
  const { width } = useWindowSize();

  return (
    <Section id="salute">
      <div className="bg-stone-100 py-8 lg:py-0">
        <Container>
          <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center">
            <SectionTitle
              subTitle={
                <>
                  반려동물과 반려동물 가족에 대한 편안한 응대와
                  <br className="lg:hidden" />
                  안정적인 진료 환경을 위해 최선을 다하겠습니다
                </>
              }
            >
              대표원장 <span className="text-primary">인사말</span>
            </SectionTitle>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col-reverse items-center gap-2 md:flex-row"
            >
              <div className="flex max-w-xl flex-col gap-4">
                <Message />
                <Separator className="md:my-4" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size={(width as number) < 830 ? "sm" : "default"}
                    >
                      <Link href="/staff" className="text-[9px] sm:text-base">
                        읜료진 소개
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      size={(width as number) < 830 ? "sm" : "default"}
                    >
                      <Link
                        href="/facility"
                        className="text-[9px] sm:text-base"
                      >
                        시설 안내
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm sm:text-2xl">대표원장</span>
                    <span className="font-script text-2xl sm:text-4xl">
                      김홍석
                    </span>
                  </div>
                </div>
              </div>
              <Image src={salute} alt="salute" width={200} />
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
