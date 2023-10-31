import v1 from "@/public/staff/v1.jpg";
import v2 from "@/public/staff/v2.jpg";
import v4 from "@/public/staff/v4.jpg";
import n1 from "@/public/staff/n1.jpg";
import n2 from "@/public/staff/n2.jpg";
import n3 from "@/public/staff/n3.jpg";
import n4 from "@/public/staff/n4.jpg";
import n5 from "@/public/staff/n5.jpg";
import n6 from "@/public/staff/n6.jpg";
import m1 from "@/public/staff/m1.jpg";
import m2 from "@/public/staff/m2.jpg";
import m3 from "@/public/staff/m3.jpg";
import m4 from "@/public/staff/m4.jpg";
import m5 from "@/public/staff/m5.jpg";
import { StaticImageData } from "next/image";

type Staffs = {
  [key: string]: Staff[];
};
export type Staff = {
  name: string;
  title: string;
  image: StaticImageData;
  history: string[];
  off?: number[];
};

export const STAFFS: Staffs = {
  수의사: [
    {
      name: "김홍석",
      title: "원장",
      image: v1,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
      off: [0, 1],
    },
    {
      name: "서범석",
      title: "원장",
      image: v2,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
      off: [1, 2],
    },
    {
      name: "박철",
      title: "원장",
      image: v1,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
      off: [2, 3],
    },
    {
      name: "이관구",
      title: "원장",
      image: v4,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
      off: [4, 5],
    },
  ],
  간호사: [
    {
      name: "이원영",
      title: "간호팀장",
      image: n1,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "오정민",
      title: "원장",
      image: n2,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "간호사3",
      title: "원장",
      image: n3,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "간호사4",
      title: "원장",
      image: n4,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "간호사5",
      title: "원장",
      image: n5,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "간호사6",
      title: "원장",
      image: n6,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
  ],
  경영지원: [
    {
      name: "지원1",
      title: "경영지원",
      image: m1,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "지원2",
      title: "원장",
      image: m2,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "지원3",
      title: "원장",
      image: m3,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "지원4",
      title: "원장",
      image: m4,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "지원5",
      title: "원장",
      image: m5,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
  ],
};
