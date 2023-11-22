import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import Container from "@/components/common/container";
import ClinicSwiper from "./clinic-swiper";
import BackgroundCircles from "../../common/background-circles";

export default function ClinicSection() {
  return (
    <Section id="clinic">
      <Container>
        <div className="py-12 sm:py-24">
          <div className="text-center">
            <SectionTitle
              title="LIEBE CLINIC"
              subtitle={<>전문의가 함께하는 리베의 클리닉을 소개합니다</>}
            />
          </div>
          <ClinicSwiper />
        </div>
      </Container>
      <BackgroundCircles />
    </Section>
  );
}
