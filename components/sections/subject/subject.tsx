import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";
import React from "react";
import Accordion from "./arccodion";

export default function Subject() {
  return (
    <Section id="subject">
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <SectionTitle>진료과목</SectionTitle>
        <Accordion />
      </div>
    </Section>
  );
}
