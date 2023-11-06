"use client";

import Clinic from "@/components/sections/clinic/clinic";
import Hero from "@/components/sections/hero/hero";
import Map from "@/components/sections/map/map";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Hero />
      {/* <Clinic />
      <Map /> */}
    </>
  );
}
