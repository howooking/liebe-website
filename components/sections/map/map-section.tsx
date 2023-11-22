import Section from "@/components/common/section";
import Container from "@/components/common/container";
import GoogleMap from "./google-map";
import Contact from "./contact";
import BackgroundCircles from "@/components/common/background-circles";

export default function MapSection() {
  return (
    <Section id="map">
      <Container>
        <div className="flex flex-col gap-12 py-12 sm:py-24 md:flex-row">
          <GoogleMap />
          <Contact />
        </div>
      </Container>
      <BackgroundCircles opposite />
    </Section>
  );
}
