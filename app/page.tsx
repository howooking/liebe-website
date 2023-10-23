import Section from "@/components/section";
import Facility from "@/components/sections/facility/facility";
import Main from "@/components/sections/main/main";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";
import Staff from "@/components/sections/staff/staff";
import Subject from "@/components/sections/subject/subject";

export default function Home() {
  return (
    <div>
      <Main />
      <Salute />
      <Subject />
      <Facility />
      <Staff />
      <Map />
    </div>
  );
}
