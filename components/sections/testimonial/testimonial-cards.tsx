import { Dispatch, SetStateAction } from "react";
import TestimonialCard from "./testimonial-card";
import type { Testimonial } from "./Testimonial.type";

export default function TestimonialCards({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="relative h-[450px] p-4 shadow-xl lg:h-[500px]">
      {testimonials.map((t, i) => {
        return (
          <TestimonialCard
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
}
