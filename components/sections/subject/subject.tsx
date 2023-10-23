import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";
import React from "react";
import Accordion from "./arccodion";

export default function Subject() {
  return (
    <Section hash="subject">
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <SectionTitle title="진료과목" />
        <Accordion />
      </div>
    </Section>
  );
}
