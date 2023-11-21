import HeroSection from "@/components/sections/hero/hero-section";
import ValueSection from "@/components/sections/value/value-section";
import ClinicSection from "@/components/sections/clinic/clinic-section";
import TestimonialSection from "@/components/sections/testimonial/testimonial-section";
import MapSection from "@/components/sections/map/map-section";
import VideosSection from "@/components/sections/videoes/videos-section";
import QnaSection from "@/components/sections/qna/qna-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <ClinicSection />
      <TestimonialSection />
      <MapSection />
      <VideosSection />
      <QnaSection />
    </>
  );
}
