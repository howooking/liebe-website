import Section from "@/components/common/section";
import GoogleMap from "./google-map";
import Contact from "./contact";
import Container from "@/components/common/container";
import Circles2 from "@/components/common/circles2";

export default function MapSection() {
  return (
    <Section id="map">
      <Container>
        <div className="flex flex-col gap-12 py-12 sm:py-24 md:flex-row">
          <GoogleMap />
          <Contact />
        </div>
      </Container>
      <Circles2 />
    </Section>
  );
}
