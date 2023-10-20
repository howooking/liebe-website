import Section from "@/components/section";
import Hero from "@/components/sections/home";

export default function Home() {
  return (
    <div>
      <Section hash="home">
        <Hero />
      </Section>
      <Section hash="subject">Hero</Section>
      <Section hash="staff">Hero</Section>
      <Section hash="facility">Hero</Section>
      <Section hash="map">Hero</Section>
    </div>
  );
}
