import Section from "@/components/common/section";
import Slider from "./slider";
import SectionTitle from "@/components/common/section-title";

export default function Clinic() {
  return (
    <Section id="clinic">
      <SectionTitle
        title="LIEBE CLINIC"
        subtitle="전문의가 함께하는 리베동물메디컬센터의 클리닉을 소개합니다"
      />
      <Slider />
    </Section>
  );
}
