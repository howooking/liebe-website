import testimonial1 from "@/public/testimonial/testimonial1.jpg";
import testimonial2 from "@/public/testimonial/testimonial2.jpg";
import testimonial3 from "@/public/testimonial/testimonial3.jpg";
import testimonial4 from "@/public/testimonial/testimonial4.jpg";
import testimonial5 from "@/public/testimonial/testimonial5.jpg";
import testimonial6 from "@/public/testimonial/testimonial6.jpg";

import { StaticImageData } from "next/image";

export interface Testimonial {
  image: StaticImageData;
  title: string;
  name: string;
  description: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    image: testimonial1,
    description:
      "우리 강아지는 이곳에서 최고의 치료를 받았습니다. 직원들은 항상 따뜻하게 대해 주시고, 신속하고 효과적인 치료를 제공해 주셨어요.",
    name: "똘이 보호자님",
    title: "골절 수술",
  },
  {
    image: testimonial2,
    description:
      "우리는 이 동물병원을 신뢰합니다. 그들은 항상 동물의 행복과 건강을 최우선으로 생각하며, 진짜 친구 같은 관계를 형성해 주십니다.",
    name: "백희 보호자님",
    title: "심장병 관리중",
  },
  {
    image: testimonial3,
    description:
      "감사합니다, 이 동물병원은 우리 가족의 일부처럼 다뤄 주셨어요. 그들은 항상 시간을 내주시고, 우리 애완동물을 위해 최선을 다해주셨습니다.",
    name: "라쿤이 보호자님",
    title: "슬개골 수술",
  },
  {
    image: testimonial4,
    description:
      "저희 강아지는 이 동물병원을 사랑합니다! 그들은 언제나 따뜻하고 친절하게 대해 주며, 최상의 치료를 제공해 줍니다.",
    name: "멍이 보호자님",
    title: "신부전 관리중",
  },
  {
    image: testimonial5,
    description:
      "이 동물병원의 전문성은 정말 놀랍습니다. 그들은 항상 최신 기술을 사용하며, 애완동물의 건강을 회복시키기 위해 최선을 다해 노력합니다.",
    name: "망고 보호자님",
    title: "쿠싱 관리중",
  },
  {
    image: testimonial6,
    description:
      "동물 치료의 전문가로서, 이 동물병원은 항상 동물들을 최우선으로 생각합니다. 그들에게 우리 애완동물을 맡길 수 있어서 행복합니다.",
    name: "마중이 보호자님",
    title: "당뇨 관리중",
  },
];
