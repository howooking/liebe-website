import Hero from "@/components/sections/hero/hero";
import Main from "@/components/sections/hero/main";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";

export default async function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Main />
      <Salute />
      <Map />
    </>
  );
}
