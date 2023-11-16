"use client";

import { useMemo, useState } from "react";

import Banner from "@/components/common/banner";
import facilityBanner from "@/public/facility/ficility-banner.png";
import Tabs from "@/components/common/tab";
import Container2 from "@/components/common/container2";
import Section from "@/components/common/section";
import FacilitySwiper from "./facility-swiper";
import LevelInfo from "./level-info";

import { FACILITY_IMAGES } from "@/constants/facility";

export default function Facility() {
  const tabs = useMemo(() => Object.keys(FACILITY_IMAGES), []);
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
        <Container2>
          <div className="py-12">
            <FacilitySwiper
              items={FACILITY_IMAGES[selected]}
              selected={selected}
            />
            <LevelInfo selected={selected} setSelected={setSelected} />
          </div>
        </Container2>
      </div>
    </Section>
  );
}
