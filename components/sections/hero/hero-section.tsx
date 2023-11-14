import Section from "@/components/common/section";
import Slider from "./slider";
import ScrollDown from "./scroll-down";

export default function HeroSection() {
  return (
    <Section id="home">
      <Slider />
      <ScrollDown />
    </Section>
  );
}
