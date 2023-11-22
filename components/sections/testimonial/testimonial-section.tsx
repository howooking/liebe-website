"use client";

import { useState } from "react";

import Section from "@/components/common/section";
import SectionTitle from "@/components/common/section-title";
import Container from "@/components/common/container";
import SelectButton from "./select-button";
import TestimonialCards from "./testimonial-cards";
import { TESTIMONIALS } from "@/constants/testimonials";

export default function TestimonialSection() {
  const [selected, setSelected] = useState(0);

  return (
    <Section bgStone>
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 overflow-hidden pb-20 pt-12 sm:pb-40 sm:pt-24 lg:grid-cols-2 lg:gap-24 ">
          <div>
            <SectionTitle
              title="CUSTOMER REVIEWS"
              subtitle={
                <div>
                  리베는 반려동물의 건강은 최우선으로합니다.
                  <br /> 수많은 고객분들이 리베와 함께 여정을 나아가고 있습니다.
                </div>
              }
            />
            <SelectButton
              numTracks={TESTIMONIALS.length}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          <TestimonialCards
            testimonials={TESTIMONIALS}
            setSelected={setSelected}
            selected={selected}
          />
        </div>
      </Container>
    </Section>
  );
}
