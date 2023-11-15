"use client";

import Banner from "@/components/common/banner";
import Section from "@/components/common/section";
import Tabs from "@/components/common/tab";
import React, { useMemo, useState } from "react";
import infoBanner from "@/public/info/info-banner.jpg";
import { INFO_TABS } from "@/constants/info-page";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = useMemo(() => Object.keys(INFO_TABS), []);
  const path = usePathname();
  const key = useMemo(
    () =>
      Object.keys(INFO_TABS).find(
        (key) => INFO_TABS[key] === path.split("/")[2],
      ),
    [path],
  );
  const [selected, setSelected] = useState(key ?? "진료시간");

  return (
    <Section id="info">
      <Banner
        imageSrc={infoBanner}
        title="진료 안내"
        subTitle="진료시간 및 면회 안내"
      />
      <Tabs tabs={tabs} selected={selected} setSelected={setSelected} info />
      <div className="bg-stone-100">{children}</div>
    </Section>
  );
}
