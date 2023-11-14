import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import Container from "@/components/common/container";
import ClinicSwiper from "./clinic-swiper";
import Circles from "../../common/circles";

export default function ClinicSection() {
  return (
    <Section id="clinic">
      <Container>
        <div className="px-3 py-24">
          <div className="text-center">
            <SectionTitle
              title="LIEBE CLINIC"
              subtitle="전문의가 함께하는 리베동물메디컬센터의 클리닉을 소개합니다"
            />
          </div>
          <ClinicSwiper />
        </div>
      </Container>
      <Circles />
    </Section>
  );
}
