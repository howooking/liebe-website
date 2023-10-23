import { GiCat, GiRadioactive, GiTurtle } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { PiBirdBold } from "react-icons/pi";

import cat from "@/public/subjects/cat.jpg";
import dental from "@/public/subjects/dental.jpg";
import exotic from "@/public/subjects/exotic.jpg";
import internal from "@/public/subjects/internal.jpg";
import surgery from "@/public/subjects/surgery.jpg";
import radio from "@/public/subjects/radio.jpg";

export const SUBJECTS = [
  {
    id: 1,
    title: "내과",
    Icon: FaStethoscope,
    imgSrc: internal,
    description:
      "내과는 동물의 내부 기관에 대한 질병을 다루는 분야입니다. 심장, 폐, 간, 신장 등 주요 장기의 질환 및 내분비 장애를 포함합니다. 예방과 치료를 위해 정확한 진단과 적절한 치료법을 제공합니다.",
  },
  {
    id: 2,
    title: "외과",
    Icon: RiSurgicalMaskFill,
    imgSrc: surgery,
    description:
      "외과는 동물의 질병이나 손상을 수술로 치료하는 분야입니다. 골절, 종양 제거, 안과 수술 등 다양한 수술을 포함합니다. 또한 통증 관리와 수술 후 회복 과정도 중요하게 취급하여 동물의 건강을 증진시킵니다.",
  },
  {
    id: 3,
    title: "영상의학과 CT MRI",
    Icon: GiRadioactive,
    imgSrc: radio,
    description:
      "영상의학과는 동물의 질병 진단에 필요한 영상 자료를 생성하고 해석하는 분야입니다. X-레이, 초음파, CT, MRI 등 다양한 영상 기술을 사용하여 정확한 진단 정보를 제공합니다. 이 정보는 수술 계획 및 치료 전략 결정에 중요한 역할을 합니다.",
  },
  {
    id: 4,
    title: "특수동물진료",
    Icon: PiBirdBold,
    imgSrc: exotic,
    description:
      "특수동물 진료는 새, 파충류, 소형 포유류 등 비교적 흔하지 않은 애완 동물을 대상으로 합니다. 이들 동물의 특성과 생태를 이해하고, 그에 맞는 진료와 치료를 제공합니다. 예방접종, 영양 관리, 질병 치료 등 다양한 서비스를 포함합니다. 김홍석 대표원장님 진료",
  },
  {
    id: 5,
    title: "고양이친화진료",
    Icon: GiCat,
    imgSrc: cat,
    description:
      "수의학에서 고양이 진료는 특화된 접근 방식을 필요로 합니다. 고양이의 행동, 생리, 영양 요구 사항 등을 이해하고, 이에 맞춘 진료와 치료를 제공합니다. 예방접종, 내외부 기생충 관리, 영양 관리, 치아 관리 등을 포함하며, 필요시 수술 및 특별한 치료도 수행합니다.",
  },
  {
    id: 6,
    title: "치과 안과",
    Icon: FaRegEye,
    imgSrc: dental,
    description:
      "치과는 동물의 구강 및 치아 건강을 관리하는 분야입니다. 치석 제거, 치근 수술 등을 포함하며, 올바른 구강 관리를 통해 동물의 전반적인 건강을 증진시킵니다. 안과는 동물의 눈 질환을 진단하고 치료하는 분야입니다. 녹내장, 백내장 등 다양한 눈 질환을 다루며, 필요에 따라 수술적 접근법도 사용합니다.",
  },
];
