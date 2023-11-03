import { MAP_LINKS } from "@/constants/map-links";

import MapLink from "@/components/sections/map/map-link";
import GoogleMap from "@/components/sections/map/google-map";
import Section from "@/components/common/section";
import Container from "@/components/common/container";
import Footer from "../footer/footer";

export default function Map() {
  return (
    <Section id="map">
      <Container>
        <GoogleMap />
        <div className="absolute right-2 top-2 flex h-full flex-col gap-1 md:right-10 md:top-10 md:gap-4">
          {MAP_LINKS.map((link) => (
            <MapLink
              textColor={link.textColor}
              bgColor={link.bgColor}
              href={link.href}
              title={link.title}
              key={link.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
