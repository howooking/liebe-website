"use client";

import Banner from "@/components/common/banner";
import ContainerNarrow from "@/components/common/container-narrow";
import Section from "@/components/common/section";
import Title from "@/components/common/title";
import groomingBanner from "@/public/grooming/grooming-banner.jpg";
import GroomingSwiper from "./grooming-swiper";
import GroomingInfo from "./grooming-info";
import Link from "next/link";

export default function GroomingClient() {
  return (
    <Section>
      <Banner
        imageSrc={groomingBanner}
        title="미용 안내"
        subTitle={
          <div className="flex flex-col gap-2 text-center">
            <div>미용시간 및 비용안내</div>
            <Link
              href="https://www.instagram.com/liebeamc_9room/"
              target="_blank"
              rel="noopener noreferrer"
            >
              미용 인스타 : liebeamc_9room
            </Link>
          </div>
        }
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

// <Link href="liebeamc_9room" target="_blank" rel="noopener noreferrer">
//   인스타 보러가기
// </Link>
