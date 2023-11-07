import { StaticImageData } from "next/image";

export interface Testimonial {
  img: StaticImageData;
  title: string;
  name: string;
  description: string;
}
