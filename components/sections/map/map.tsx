import React from "react";
import Footer from "./footer";
import { MAP_LINKS } from "@/constants/map-links";
import MapLink from "./map-link";
import GoogleMap from "./google-map";
import Section from "@/components/section";

export default function Map() {
  return (
    <Section hash="map">
      <div className="flex flex-col h-screen relative">
        <GoogleMap />
        <div className="absolute right-10 top-10 flex flex-col gap-4">
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
        <Footer />
      </div>
    </Section>
  );
}
