import Hero from "@/components/sections/hero/hero";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";

export default async function Home() {
  return (
    <>
      <Hero />
      <Salute />
      <Map />
    </>
  );
}
