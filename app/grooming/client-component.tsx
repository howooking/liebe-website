"use client";

import Banner from "@/components/common/banner";
import ContainerNarrow from "@/components/common/container-narrow";
import Section from "@/components/common/section";
import Title from "@/components/common/title";
import groomingBanner from "@/public/grooming/grooming-banner.jpg";
import GroomingSwiper from "./grooming-swiper";
import GroomingInfo from "./grooming-info";

export default function GroomingClient() {
  return (
    <Section>
      <Banner
        imageSrc={groomingBanner}
        title="미용 안내"
        subTitle="미용 시간 및 미용 사진"
      />
      <div className="bg-stone-100">
        <ContainerNarrow>
          <div className="py-12">
            <GroomingInfo />
            <GroomingSwiper />
          </div>
        </ContainerNarrow>
      </div>
    </Section>
  );
}
