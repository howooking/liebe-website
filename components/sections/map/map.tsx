import Section from "@/components/common/section";
import GoogleMap from "./google-map";
import Contact from "./contact";

export default function Map() {
  return (
    <Section id="map">
      <div className="flex flex-col sm:flex-row">
        <GoogleMap />
        <Contact />
      </div>
    </Section>
  );
}
