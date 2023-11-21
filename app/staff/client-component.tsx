"use client";

import { useMemo, useState } from "react";
import Tabs from "@/components/common/tab";
import Banner from "@/components/common/banner";
import Section from "@/components/common/section";
import Container2 from "@/components/common/container2";
import StaffCard from "./staff-card";

import { STAFFS } from "@/constants/staffs";
import staffBanner from "@/public/staff/staff-banner.jpg";

export default function StaffClientComponent() {
  const tabs = useMemo(() => Object.keys(STAFFS), []);
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <Section id="staff">
      <Banner
        imageSrc={staffBanner}
        title="리베 의료진을 소개합니다"
        subTitle={
          <div className="text-center">
            석·박사급 분야별 전문 의료진으로 구성된 <br className="sm:hidden" />
            의료진들을 소개합니다
          </div>
        }
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
      <div className="bg-stone-100">
        <Container2>
          <ul className="grid-col-1 grid gap-6 py-12 md:grid-cols-2">
            {STAFFS[selected].map((staff, index) => (
              <StaffCard
                key={staff.name}
                staff={staff}
                selected={selected}
                index={index}
              />
            ))}
          </ul>
        </Container2>
      </div>
    </Section>
  );
}
