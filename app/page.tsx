"use client";

import Facility from "@/components/sections/facility/facility";
import Main from "@/components/sections/main/main";
import Map from "@/components/sections/map/map";
import Salute from "@/components/sections/salute/salute";
import Staff from "@/components/sections/staff/staff";
import Subject from "@/components/sections/subject/subject";
import { useEffect, useState } from "react";
import ClientLoading from "./client-loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      <ClientLoading loading={loading} />
      <Main />
      <Salute />
      {/* <Subject /> */}
      {/* <Facility /> */}
      {/* <Staff /> */}
      <Map />
    </div>
  );
}
