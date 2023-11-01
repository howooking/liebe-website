import Main from "@/components/sections/main/main";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";

export default async function Home() {
  return (
    <div>
      <Main />
      <Salute />
      <Map />
    </div>
  );
}
