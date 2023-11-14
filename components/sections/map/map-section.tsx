import Section from "@/components/common/section";
import GoogleMap from "./google-map";
import Contact from "./contact";
import Container from "@/components/common/container";

export default function MapSection() {
  return (
    <Section id="map">
      <Container>
        <div className="flex flex-col md:flex-row">
          <GoogleMap />
          <Contact />
        </div>
      </Container>
    </Section>
  );
}
