"use client";

import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import Section from "@/components/common/section";
import subjectBanner from "@/public/subjects/subject-banner.jpg";
import TimeInfo from "./time-info";
import Accordion from "@/app/subject/arccodion";
import SectionTitle from "@/components/common/sectionTitle";
import { Separator } from "@/components/ui/separator";
import CallCard from "./call-card";

export default function Subject() {
  return (
    <Section id="subject">
      <div className="pt-[72px]">
        <Banner
          imageSrc={subjectBanner}
          title="병원 진료 안내"
          subTitle="진료 예약 / 진료 시간 / 진료과목"
        />
        <Container>
          <CallCard />
          <Separator className="my-14" />
          <div>
            <SectionTitle>
              진료 <span className="text-primary">시간</span>
            </SectionTitle>
            <TimeInfo />
          </div>
          <Separator className="my-14" />
          <div>
            <SectionTitle>
              진료 <span className="text-primary">과목</span>
            </SectionTitle>
            <Accordion />
          </div>
        </Container>
      </div>
    </Section>
  );
}
