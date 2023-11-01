import Facility from "@/components/sections/facility/facility";
import Footer from "@/components/sections/footer/footer";
import Main from "@/components/sections/main/main";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";
import Staff from "@/components/sections/staff/staff";
import Subject from "@/components/sections/subject/subject";
import { Suspense, useEffect, useState } from "react";

export default async function Home() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      {/* <ClientLoading loading={loading} /> */}
      <Main />
      <Salute />
      <Map />
    </div>
  );
}
