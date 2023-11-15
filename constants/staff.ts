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
      history: [
        "충북대학교수의학과졸업",
        "충북대학교 내과 대학원 석사",
        "서울 수의사회 회원",
        "수의 피부학회 회원",
      ],
      off: [2, 3],
    },
    {
      name: "서범석",
      title: "원장",
      image: v2,
      history: [
        "충북대학교수의학과졸업",
        "충북대학교 내과 대학원 석사",
        "전남대학교 외과 대학원 박사",
        "수술 잘하심",
      ],
      off: [1, 2],
    },
    {
      name: "박철",
      title: "원장",
      image: v1,
      history: [
        "충북대학교수의학과졸업",
        "충북대학교 내과 대학원 석사",
        "전남대학교 외과 대학원 박사",
        "초음파 교육 수료",
        "전남대학교 외과 대학원 박사",
      ],
      off: [2, 3],
    },
    {
      name: "이관구",
      title: "원장",
      image: v4,
      history: [
        "충북대학교수의학과졸업",
        "충북대학교 내과 대학원 석사",
        "전남대학교 외과 대학원 박사",
        "초음파 교육 수료",
        "전남대학교 외과 대학원 박사",
      ],
      off: [4, 5],
    },
  ],
  간호사: [
    {
      name: "이원영",
      title: "간호실장",
      image: n1,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "오정민",
      title: "간호사",
      image: n2,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "정희진",
      title: "간호사",
      image: n3,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "한수원",
      title: "간호사",
      image: n4,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },

    {
      name: "박은서",
      title: "간호사",
      image: n6,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
  ],
  경영지원: [
    {
      name: "김관숙",
      title: "데스크",
      image: m1,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "김다운",
      title: "데스크",
      image: m2,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "윤이지",
      title: "데스크",
      image: m3,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "이재석",
      title: "영상실장",
      image: m4,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
    {
      name: "김윤희",
      title: "미용실장",
      image: m5,
      history: ["충북대학교수의학과졸업", "충북대학교 내과 대학원 석사"],
    },
  ],
};
