import Section from "@/components/common/section";
import ContainerWide from "@/components/common/container-wide";
import GoogleMap from "./google-map";
import Contact from "./contact";
import BackgroundCircles from "@/components/common/background-circles";

export default function MapSection() {
  return (
    <Section id="map">
      <ContainerWide>
        <div className="flex flex-col gap-12 py-12 sm:py-24 md:flex-row">
          <GoogleMap />
          <Contact />
        </div>
      </ContainerWide>
      <BackgroundCircles opposite />
    </Section>
  );
}
