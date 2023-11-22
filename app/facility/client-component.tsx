"use client";

import { useMemo, useState } from "react";

import Banner from "@/components/common/banner";
import facilityBanner from "@/public/facility/facility-banner.jpg";
import Tabs from "@/components/common/tab";
import ContainerNarrow from "@/components/common/container-narrow";
import Section from "@/components/common/section";
import FacilitySwiper from "./facility-swiper";
import LevelInfo from "./level-info";

import { FACILIES } from "@/constants/facilities";

export default function FacilityClient() {
  const tabs = useMemo(() => Object.keys(FACILIES), []);
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <Section id="facility">
      <Banner
        imageSrc={facilityBanner}
        title="리베 시설을 소개합니다"
        subTitle="최첨단 장비들과 반려가족들을 위한 공간들"
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
      <div className="bg-stone-100">
        <ContainerNarrow>
          <div className="py-12">
            <FacilitySwiper items={FACILIES[selected]} selected={selected} />
            <LevelInfo selected={selected} setSelected={setSelected} />
          </div>
        </ContainerNarrow>
      </div>
    </Section>
  );
}
