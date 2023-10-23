"use client";

import ArrowDown from "./arrow-down";
import Contact from "./contact";
import { motion } from "framer-motion";
import Hero from "./hero";
import Section from "@/components/section";

export default function Main() {
  return (
    <Section hash="main">
      {/* <Contact /> */}
      <Hero />
      {/* <ArrowDown /> */}
    </Section>
  );
}
