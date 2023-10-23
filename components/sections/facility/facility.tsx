import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";
import HorizontalScroll from "./horizontal-scroll";

export default function Facility() {
  return (
    <Section hash="facility">
      <div className="">
        <SectionTitle title="시설소개" />
        <HorizontalScroll />
      </div>
    </Section>
  );
}
