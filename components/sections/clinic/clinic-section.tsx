import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import ContainerWide from "@/components/common/container-wide";
import ClinicSwiper from "./clinic-swiper";
import BackgroundCircles from "../../common/background-circles";

export default function ClinicSection() {
  return (
    <Section id="clinic">
      <ContainerWide>
        <div className="py-12 sm:py-24">
          <div className="text-center">
            <SectionTitle
              title="LIEBE CLINIC"
              subtitle={<>전문가와 함께하는 리베의 클리닉을 소개합니다</>}
            />
          </div>
          <ClinicSwiper />
        </div>
      </ContainerWide>
      <BackgroundCircles />
    </Section>
  );
}
