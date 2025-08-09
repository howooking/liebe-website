"use client";

import Banner from "@/components/common/banner";
import Section from "@/components/common/section";
import Tabs from "@/components/common/tab";
import { INFOS_TABS_DIC, InfosTab } from "@/constants/info-tabs";
import infoBanner from "@/public/info/info-banner.jpg";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CostTab from "./cost-tab";
import TimeTab from "./time-tab";
import VisitTab from "./visit-tab";

export default function InfoClient() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(INFOS_TABS_DIC.time);

  useEffect(() => {
    const tab = searchParams.get("tab") as InfosTab;
    if (tab && Object.keys(INFOS_TABS_DIC).includes(tab)) {
      setSelected(INFOS_TABS_DIC[tab]);
    }
  }, [searchParams]);

  return (
    <Section>
      <Banner
        imageSrc={infoBanner}
        title="진료 안내"
        subTitle="진료시간/절차, 입원/면회, 진료비용"
      />

      <Tabs
        tabs={Object.values(INFOS_TABS_DIC)}
        selected={selected}
        setSelected={(tab) => {
          setSelected(tab as InfosTab);
        }}
      />
      <div className="bg-stone-100">
        {selected === INFOS_TABS_DIC.time && <TimeTab />}
        {selected === INFOS_TABS_DIC.visit && <VisitTab />}
        {selected === INFOS_TABS_DIC.cost && <CostTab />}
      </div>
    </Section>
  );
}
