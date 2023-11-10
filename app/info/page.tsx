import Banner from "@/components/common/banner";
import Section from "@/components/common/section";
import React from "react";
import infoBanner from "@/public/info/info-banner.jpg";

export default function Info() {
  return (
    <Section id="info">
      <Banner
        imageSrc={infoBanner}
        title="진료 안내"
        subTitle="진료 예약 및 시간 안내"
      />
    </Section>
  );
}
