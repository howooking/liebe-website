import Section from "@/components/common/section";
import Slider from "./slider";
import ScrollDown from "./scroll-down";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function HeroSection() {
  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Slider />
      </Suspense>
      <ScrollDown />
    </Section>
  );
}
