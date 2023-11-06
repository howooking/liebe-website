import Clinic from "@/components/sections/clinic/clinic";
import Hero from "@/components/sections/hero/hero";
import Map from "@/components/sections/map/map";

export default async function Home() {
  return (
    <>
      <Hero />
      <Clinic />
      <Map />
    </>
  );
}
