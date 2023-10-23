"use client";

import Slider from "./slider";
import Typography from "./typography";
import ArrowDown from "./arrow-down";
import Silhouette from "./silhouette";
import Contact from "./contact";
import { motion } from "framer-motion";
import Hero from "./hero";
import Section from "@/components/section";

export default function Main() {
  return (
    <Section hash="main">
      {/* <Contact /> */}
      {/* <Typography /> */}
      {/* <Silhouette /> */}
      {/* <Slider /> */}
      <Hero />
      {/* <ArrowDown /> */}
    </Section>
  );
}
