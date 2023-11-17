import { GiCat, GiRadioactive, GiTurtle } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import { BsFillEarFill } from "react-icons/bs";
import { FaYinYang } from "react-icons/fa6";

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
  image: StaticImageData;
  tags: (string | undefined)[];
};

export const CLINICS: Clinic[] = [
  {
    id: 1,
    title: "내과클리닉",
    Icon: FaStethoscope,
    image: internal,
    tags: ["심혈관", "호르몬질환", "노령성질환"],
  },
  {
    id: 2,
    title: "외과클리닉",
    Icon: RiSurgicalMaskFill,
    image: surgery,
    tags: ["슬개골", "십자인대", "디스크"],
  },
  {
    id: 3,
    title: "특수동물클리닉",
    Icon: PiBirdFill,
    image: exotic,
    tags: ["앵무새", "도마뱀", "햄스터"],
  },
  {
    id: 4,
    title: "귀/피부클리닉 ",
    Icon: BsFillEarFill,
    image: skin,
    tags: ["외이염", "아토피", "탈모"],
  },
  {
    id: 5,
    title: "영상진단클리닉",
    Icon: GiRadioactive,
    image: radio,
    tags: ["초음파", "CT", "MRI"],
  },

  {
    id: 6,
    title: "고양이클리닉",
    Icon: GiCat,
    image: cat,
    tags: [, "고양이진료실", "고양이입원실"],
  },
  {
    id: 7,
    title: "안과/치과클리닉",
    Icon: FaRegEye,
    image: opt,
    tags: ["백내장", "발치", "스케일링"],
  },
  {
    id: 8,
    title: "한방침구클리닉",
    Icon: FaYinYang,
    image: oriental,
    tags: ["침술", "전침술", "한방"],
  },
];
