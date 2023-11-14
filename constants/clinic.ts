import { GiCat, GiRadioactive, GiTurtle } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import { BsFillEarFill } from "react-icons/bs";
import { BiSolidLeaf } from "react-icons/bi";

import cat from "@/public/clinic/cat.jpg";
import opt from "@/public/clinic/opt.jpg";
import exotic from "@/public/clinic/exotic.jpg";
import internal from "@/public/clinic/internal.jpg";
import surgery from "@/public/clinic/surgery.jpg";
import skin from "@/public/clinic/skin.jpg";
import radio from "@/public/clinic/radio.jpg";
import oriental from "@/public/clinic/oriental.jpg";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

export type Clinic = {
  id: number;
  title: string;
  Icon: IconType;
  imgSrc: StaticImageData;
  tags: (string | undefined)[];
  description: string;
};

export const CLINICS: Clinic[] = [
  {
    id: 1,
    title: "내과클리닉",
    Icon: FaStethoscope,
    imgSrc: internal,
    tags: ["심혈관", "호르몬질환", "구토/설사"],
    description:
      "내과는 동물의 내부 기관에 대한 질병을 다루는 분야입니다. 심장, 폐, 간, 신장 등 주요 장기의 질환 및 내분비 장애를 포함합니다. 예방과 치료를 위해 정확한 진단과 적절한 치료법을 제공합니다.",
  },
  {
    id: 2,
    title: "외과클리닉",
    Icon: RiSurgicalMaskFill,
    imgSrc: surgery,
    tags: ["슬개골", "골절", "십자인대"],
    description:
      "외과는 동물의 질병이나 손상을 수술로 치료하는 분야입니다. 골절, 종양 제거, 안과 수술 등 다양한 수술을 포함합니다. 또한 통증 관리와 수술 후 회복 과정도 중요하게 취급하여 동물의 건강을 증진시킵니다.",
  },
  {
    id: 3,
    title: "특수동물클리닉",
    Icon: PiBirdFill,
    imgSrc: exotic,
    tags: ["앵무새", "도마뱀", "햄스터"],
    description:
      "특수동물 진료는 새, 파충류, 소형 포유류 등 비교적 흔하지 않은 애완 동물을 대상으로 합니다. 이들 동물의 특성과 생태를 이해하고, 그에 맞는 진료와 치료를 제공합니다. 예방접종, 영양 관리, 질병 치료 등 다양한 서비스를 포함합니다. 김홍석 대표원장님 진료",
  },
  {
    id: 4,
    title: "귀/피부클리닉 ",
    Icon: BsFillEarFill,
    imgSrc: skin,
    tags: ["외이염", "아토피", "탈모"],

    description:
      "특수동물 진료는 새, 파충류, 소형 포유류 등 비교적 흔하지 않은 애완 동물을 대상으로 합니다. 이들 동물의 특성과 생태를 이해하고, 그에 맞는 진료와 치료를 제공합니다. 예방접종, 영양 관리, 질병 치료 등 다양한 서비스를 포함합니다. 김홍석 대표원장님 진료",
  },
  {
    id: 5,
    title: "영상진단클리닉",
    Icon: GiRadioactive,
    imgSrc: radio,
    tags: ["X-RAY", "초음파", "CT", "MRI"],
    description:
      "영상의학과는 동물의 질병 진단에 필요한 영상 자료를 생성하고 해석하는 분야입니다. X-레이, 초음파, CT, MRI 등 다양한 영상 기술을 사용하여 정확한 진단 정보를 제공합니다. 이 정보는 수술 계획 및 치료 전략 결정에 중요한 역할을 합니다.",
  },

  {
    id: 6,
    title: "고양이클리닉",
    Icon: GiCat,
    imgSrc: cat,
    tags: [, "고양이진료실", "고양이입원실"],
    description:
      "수의학에서 고양이 진료는 특화된 접근 방식을 필요로 합니다. 고양이의 행동, 생리, 영양 요구 사항 등을 이해하고, 이에 맞춘 진료와 치료를 제공합니다. 예방접종, 내외부 기생충 관리, 영양 관리, 치아 관리 등을 포함하며, 필요시 수술 및 특별한 치료도 수행합니다.",
  },
  {
    id: 7,
    title: "안과/치과클리닉",
    Icon: FaRegEye,
    imgSrc: opt,
    tags: ["백내장", "발치", "스케일링"],
    description:
      "치과는 동물의 구강 및 치아 건강을 관리하는 분야입니다. 치석 제거, 치근 수술 등을 포함하며, 올바른 구강 관리를 통해 동물의 전반적인 건강을 증진시킵니다. 안과는 동물의 눈 질환을 진단하고 치료하는 분야입니다. 녹내장, 백내장 등 다양한 눈 질환을 다루며, 필요에 따라 수술적 접근법도 사용합니다.",
  },
  {
    id: 8,
    title: "한방침구클리닉",
    Icon: BiSolidLeaf,
    imgSrc: oriental,
    tags: ["침술", "전침술", "한방"],
    description:
      "치과는 동물의 구강 및 치아 건강을 관리하는 분야입니다. 치석 제거, 치근 수술 등을 포함하며, 올바른 구강 관리를 통해 동물의 전반적인 건강을 증진시킵니다. 안과는 동물의 눈 질환을 진단하고 치료하는 분야입니다. 녹내장, 백내장 등 다양한 눈 질환을 다루며, 필요에 따라 수술적 접근법도 사용합니다.",
  },
];
