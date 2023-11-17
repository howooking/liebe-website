"use client";

import React, { useMemo, useState } from "react";

import Banner from "@/components/common/banner";
import Section from "@/components/common/section";
import Tabs from "@/components/common/tab";

import infoBanner from "@/public/info/info-banner.jpg";
import { INFO_TABS } from "@/constants/info-page";
import TimeTab from "./time-tab";
import VisitTab from "./visit-tab";

export default function InfoPage() {
  const tabs = useMemo(() => Object.keys(INFO_TABS), []);
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <Section id="info">
      <Banner
        imageSrc={infoBanner}
        title="진료 안내"
        subTitle="진료시간 및 면회 안내"
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
      <div className="bg-stone-100">
        {selected === "진료시간" ? <TimeTab /> : <VisitTab />}
      </div>
    </Section>
  );
}
