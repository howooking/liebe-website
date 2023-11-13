"use client";

import Banner from "@/components/common/banner";
import Section from "@/components/common/section";
import Tabs from "@/components/common/tab";
import React, { useMemo, useState } from "react";
import infoBanner from "@/public/info/info-banner.jpg";
import { INFO_TABS } from "@/constants/info-page";

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = useMemo(() => Object.keys(INFO_TABS), []);
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <Section id="info">
      <Banner
        imageSrc={infoBanner}
        title="진료 안내"
        subTitle="진료시간 및 예약안내"
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} />
      {children}
    </Section>
  );
}
