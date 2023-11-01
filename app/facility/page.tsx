"use client";

import Banner from "@/components/banner";
import Tabs from "@/components/tab";
import { FACILITY_IMAGES } from "@/constants/facility";

import facilityBanner from "@/public/facility/ficility_banner.jpg";
import { useMemo, useState } from "react";
import CardCarousel from "./carousel";
import SectionTitle from "@/components/sectionTitle";
import LevelInfo from "./level-info";
import Section from "@/components/section";

export default function Facility() {
  const tabs = useMemo(() => Object.keys(FACILITY_IMAGES), []);

  const [selected, setSelected] = useState(tabs[0]);
  return (
    <Section id="facility">
      <div className="pt-[72px]">
        <Banner
          imageSrc={facilityBanner}
          title="리베 시설을 소개합니다"
          subTitle="최첨단 장비들과 반려가족들을 위한 공간들"
        />
        <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
        <SectionTitle>
          병원 <span className="text-primary">둘러보기</span>
        </SectionTitle>
        <CardCarousel items={FACILITY_IMAGES[selected]} />
        <LevelInfo />
      </div>
    </Section>
  );
}
