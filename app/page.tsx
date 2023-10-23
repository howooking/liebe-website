import Section from "@/components/section";
import Facility from "@/components/sections/facility/facility";
import Main from "@/components/sections/main/main";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";
import Staff from "@/components/sections/staff/staff";
import Subject from "@/components/sections/subject/subject";

export default function Home() {
  return (
    <div className="h-[1350vh]">
      <Main />
      {/* <Section hash="salute">
        <Salute />
      </Section>
      <Section hash="subject">
        <Subject />
      </Section>
      <Section hash="staff">
        <Staff />
      </Section>
      <Section hash="facility">
        <Facility />
      </Section>
      <Section hash="map">
        <Map />
      </Section> */}
    </div>
  );
}
