import React from "react";
import Footer from "../footer/footer";
import { MAP_LINKS } from "@/constants/map-links";
import MapLink from "./map-link";
import GoogleMap from "./google-map";
import Section from "@/components/section";

export default function Map() {
  return (
    <Section id="map">
      <div className="relative flex h-[calc(100vh-72px)] flex-col">
        <GoogleMap />
        <div className="absolute right-2 top-2 flex flex-col gap-1 md:right-10 md:top-10 md:gap-4">
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
      </div>
    </Section>
  );
}
