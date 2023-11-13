import Section from "@/components/common/section";
import Slider from "./slider";
import SectionTitle from "@/components/common/section-title";

export default function ClinicSection() {
  return (
    <Section id="clinic">
      <div className="flex h-screen flex-col justify-center gap-10">
        <div className="text-center">
          <SectionTitle
            title="LIEBE CLINIC"
            subtitle="전문의가 함께하는 리베동물메디컬센터의 클리닉을 소개합니다"
          />
        </div>
        <Slider />
      </div>
    </Section>
  );
}
