import { Dispatch, SetStateAction } from "react";
import TestimonialCard from "./testimonial-card";
import { Testimonial } from "./testimonial.type";

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
    <div className="relative h-[450px] p-4 lg:h-[500px]">
      {testimonials.map((testimonial, i) => {
        return (
          <TestimonialCard
            {...testimonial}
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
