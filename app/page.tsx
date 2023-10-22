import Section from "@/components/section";
import Main from "@/components/sections/main/main";
import Staff from "@/components/sections/staff/staff";
import Subject from "@/components/sections/subject/subject";

export default function Home() {
  return (
    <div>
      <Section hash="main">
        <Main />
      </Section>
      <Section hash="subject">
        <Subject />
      </Section>
      <Section hash="staff">
        <Staff />
      </Section>
      <Section hash="facility">시설소개</Section>
      <Section hash="map">오시는길</Section>
    </div>
  );
}
