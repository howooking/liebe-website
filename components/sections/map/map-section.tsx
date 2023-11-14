import Section from "@/components/common/section";
import GoogleMap from "./google-map";
import Contact from "./contact";
import Container from "@/components/common/container";

export default function MapSection() {
  return (
    <Section id="map">
      <Container>
        <div className="flex flex-col gap-6 px-0 py-12 sm:py-24 md:flex-row md:gap-12 md:px-3">
          <GoogleMap />
          <Contact />
        </div>
      </Container>
    </Section>
  );
}
