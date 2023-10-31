"use client";

import Tabs from "@/components/tab";
import { STAFFS } from "@/constants/staff";
import { useMemo, useState } from "react";

import Container from "@/components/container";
import StaffCard from "./staff-card";
import Banner from "@/components/banner";

import staffBanner from "@/public/staff/staff_banner.jpg";

export default function Staff() {
  const tabs = useMemo(() => Object.keys(STAFFS), []);
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <div className="pt-[72px]">
      <Banner
        imageSrc={staffBanner}
        title="리베 의료진을 소개합니다"
        subTitle="석·박사급 분야별 전문 의료진으로 구성된 의료진들을 소개합니다"
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
      <Container>
        <ul className="my-8 grid grid-cols-2 gap-8">
          {STAFFS[selected].map((staff) => (
            <StaffCard key={staff.name} staff={staff} selected={selected} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
