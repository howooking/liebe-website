"use client";

import Tabs from "@/components/common/tab";
import { STAFFS } from "@/constants/staff";
import { useMemo, useState } from "react";

import Container from "@/components/common/container";
import StaffCard from "./staff-card";
import Banner from "@/components/common/banner";

import staffBanner from "@/public/staff/staff-banner.jpg";
import Section from "@/components/common/section";

export default function Staff() {
  const tabs = useMemo(() => Object.keys(STAFFS), []);
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <Section id="staff">
      <div className="pt-[72px]">
        <Banner
          imageSrc={staffBanner}
          title="리베 의료진을 소개합니다"
          subTitle={
            <div className="text-center">
              석·박사급 분야별 전문 의료진으로 구성된{" "}
              <br className="sm:hidden" />
              의료진들을 소개합니다
            </div>
          }
        />
        <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
        <Container>
          <ul className="grid-col-1 my-8 grid gap-8 md:grid-cols-2">
            {STAFFS[selected].map((staff) => (
              <StaffCard key={staff.name} staff={staff} selected={selected} />
            ))}
          </ul>
        </Container>
      </div>
    </Section>
  );
}
