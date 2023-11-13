import Section from "@/components/common/section";
import Slider from "./slider";
import SectionTitle from "@/components/common/section-title";
import Video from "../videoes/video";
import Container from "@/components/common/container";

export default function ClinicSection() {
  return (
    <Section id="clinic">
      <Container>
        <div className="flex py-24">
          <Slider />
          <div className="text-center">
            <SectionTitle
              title="LIEBE CLINIC"
              subtitle="전문의가 함께하는 리베동물메디컬센터의 클리닉을 소개합니다"
            />
            <Video src="https://www.youtube.com/embed/eDavx8akNfw?si=KxNdOmWbdExPY4FC" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
