import ClinicSection from "@/components/sections/clinic/clinic-section";
import HeroSection from "@/components/sections/hero/hero-section";
import MapSection from "@/components/sections/map/map-section";
import TestimonialSection from "@/components/sections/testimonial/testimonial-section";
import VideosSection from "@/components/sections/videoes/videos-section";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      <HeroSection />
      <ClinicSection />
      <TestimonialSection />
      <MapSection />
      <VideosSection />
    </>
  );
}
