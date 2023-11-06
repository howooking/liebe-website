"use client";

import Banner from "@/components/common/banner";
import Tabs from "@/components/common/tab";
import { FACILITY_IMAGES } from "@/constants/facility";

import facilityBanner from "@/public/facility/ficility-banner.png";
import { useEffect, useMemo, useState } from "react";
import CardCarousel from "./carousel";
import LevelInfo from "./level-info";
import Section from "@/components/common/section";
import Loading from "../loading";

export default function Facility() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const tabs = useMemo(() => Object.keys(FACILITY_IMAGES), []);
  const [selected, setSelected] = useState(tabs[0]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Section id="facility">
      <Banner
        imageSrc={facilityBanner}
        title="리베 시설을 소개합니다"
        subTitle="최첨단 장비들과 반려가족들을 위한 공간들"
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
      <CardCarousel items={FACILITY_IMAGES[selected]} selected={selected} />
      <LevelInfo selected={selected} setSelected={setSelected} />
    </Section>
  );
}
