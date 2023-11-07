import { useState } from "react";
import Section from "@/components/common/section";
import SelectButton from "./select-button";
import TestimonialCards from "./testimonial-cards";
import { TESTIMONIALS } from "@/constants/testimonial";
import SectionTitle from "@/components/common/section-title";

export default function Testimonial() {
  const [selected, setSelected] = useState(0);

  return (
    <Section id="testimonial">
      <section className="grid h-screen grid-cols-1 items-center gap-8 overflow-hidden bg-slate-100 px-4 py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="lg:space-y-20">
          <SectionTitle
            title="CUSTOMER REVIEWS"
            testimonial
            subtitle={
              <>
                리베는 고객의 행복과 반려동물의 건강은 최우선으로합니다.
                <br /> 수많은 고객분들이 리베와 함께 여정을 나아가고 있습니다.
              </>
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
      </section>
    </Section>
  );
}
