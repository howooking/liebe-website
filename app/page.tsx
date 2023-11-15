import ClinicSection from "@/components/sections/clinic/clinic-section";
import HeroSection from "@/components/sections/hero/hero-section";
import MapSection from "@/components/sections/map/map-section";
import TestimonialSection from "@/components/sections/testimonial/testimonial-section";
import ValueSection from "@/components/sections/value/value-section";
import VideosSection from "@/components/sections/videoes/videos-section";

export default function Home() {

  return (
    <>
      <HeroSection />
      <ValueSection />
      <ClinicSection />
      <TestimonialSection />
      <MapSection />
      <VideosSection />
    </>
  );
}
