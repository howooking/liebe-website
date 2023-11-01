import outter1 from "@/public/facility/outter1.jpg";
import outter2 from "@/public/facility/outter2.jpg";
import outter3 from "@/public/facility/outter3.jpg";
import outter4 from "@/public/facility/outter4.jpg";
import first1 from "@/public/facility/first1.jpg";
import first2 from "@/public/facility/first2.jpg";
import first3 from "@/public/facility/first3.jpg";
import first4 from "@/public/facility/first4.jpg";
import first5 from "@/public/facility/first5.jpg";
import first6 from "@/public/facility/first6.jpg";
import first7 from "@/public/facility/first7.jpg";
import first8 from "@/public/facility/first8.jpg";
import first9 from "@/public/facility/first9.jpg";
import second1 from "@/public/facility/second1.jpg";
import second2 from "@/public/facility/second2.jpg";
import second3 from "@/public/facility/second3.jpg";
import second4 from "@/public/facility/second4.jpg";
import second5 from "@/public/facility/second5.jpg";
import second6 from "@/public/facility/second6.jpg";
import second7 from "@/public/facility/second7.jpg";
import second8 from "@/public/facility/second8.jpg";
import second9 from "@/public/facility/second9.jpg";
import second10 from "@/public/facility/second10.jpg";
import second11 from "@/public/facility/second11.jpg";
import second12 from "@/public/facility/second12.jpg";
import second13 from "@/public/facility/second13.jpg";
import third1 from "@/public/facility/third1.jpg";
import third2 from "@/public/facility/third2.jpg";
import third3 from "@/public/facility/third3.jpg";
import third4 from "@/public/facility/third4.jpg";
import third5 from "@/public/facility/third5.jpg";
import third6 from "@/public/facility/third6.jpg";

import { StaticImageData } from "next/image";

type FacilityImages = {
  [key: string]: LEVEL[];
};
export type LEVEL = {
  title: string;
  image: StaticImageData;
};

export const FACILITY_IMAGES: FacilityImages = {
  외관: [
    {
      title: "병원외부 1",
      image: outter1,
    },
    {
      title: "병원외부 2",
      image: outter2,
    },
    {
      title: "병원외부 3",
      image: outter3,
    },
    {
      title: "병원외부 4",
      image: outter4,
    },
  ],
  "1층": [
    {
      title: "1층 1",
      image: first1,
    },
    {
      title: "1층 2",
      image: first2,
    },
    {
      title: "1층 3",
      image: first3,
    },
    {
      title: "1층 4",
      image: first4,
    },
    {
      title: "1층 5",
      image: first5,
    },
    {
      title: "1층 6",
      image: first6,
    },
    {
      title: "1층 7",
      image: first7,
    },
    {
      title: "1층 8",
      image: first8,
    },
    {
      title: "1층 9",
      image: first9,
    },
  ],
  "2층": [
    {
      title: "2층 1",
      image: second1,
    },
    {
      title: "2층 2",
      image: second2,
    },
    {
      title: "2층 3",
      image: second3,
    },
    {
      title: "2층 4",
      image: second4,
    },
    {
      title: "2층 5",
      image: second5,
    },
    {
      title: "2층 6",
      image: second6,
    },
    {
      title: "2층 7",
      image: second7,
    },
    {
      title: "2층 8",
      image: second8,
    },
    {
      title: "2층 9",
      image: second9,
    },
    {
      title: "2층 10",
      image: second10,
    },
    {
      title: "2층 11",
      image: second11,
    },
    {
      title: "2층 12",
      image: second12,
    },
    {
      title: "2층 13",
      image: second13,
    },
  ],
  "3층": [
    {
      title: "3층 1",
      image: third1,
    },
    {
      title: "3층 2",
      image: third2,
    },
    {
      title: "3층 3",
      image: third3,
    },
    {
      title: "3층 4",
      image: third4,
    },
    {
      title: "3층 5",
      image: third5,
    },
    {
      title: "3층 6",
      image: third6,
    },
  ],
  "4층": [],
};

type LevelsInfo = {
  [key: string]: LevelInfo[];
};
export type LevelInfo = {
  kor: string;
  eng: string;
};

export const LEVELS_INFO: LevelsInfo = {
  "1층": [
    {
      kor: "주차장",
      eng: "Parking Lot",
    },
    {
      kor: "접수 & 안내",
      eng: "Reception & Information",
    },
    {
      kor: "화장실",
      eng: "Restroom",
    },
    {
      kor: "미용",
      eng: "Pet Grooming",
    },
    {
      kor: "용품",
      eng: "Pet Shop",
    },
  ],
  "2층": [
    {
      kor: "스탠딩 진료실",
      eng: "Standing Consulting Room",
    },
    {
      kor: "진료대기실",
      eng: "Waiting Room",
    },
    {
      kor: "진료실 1,2",
      eng: "Consulting Room 1,2",
    },
    {
      kor: "고양이 대기실 / 진료실",
      eng: "Cat Friendly Zone",
    },
    {
      kor: "면회실 1,2",
      eng: "Visiting Room 1,2",
    },
    {
      kor: "입원 & 처치질",
      eng: "Hospitalization & Treatment Room",
    },
    {
      kor: "엑스레이실",
      eng: "X-ray Room",
    },
    {
      kor: "임상병리실",
      eng: "Clinical Pathology Room",
    },
  ],
  "3층": [
    {
      kor: "MRI실",
      eng: "MRI Room",
    },
    {
      kor: "CT실",
      eng: "CT Room",
    },
    {
      kor: "초음파실",
      eng: "Ultrasound Room",
    },
    {
      kor: "수중재활치료실",
      eng: "Aquatic Rehabilitation Treatment",
    },
    {
      kor: "미생물배양실",
      eng: "Microorganism Culture Room",
    },
  ],
  "4층": [
    {
      kor: "수술실 1,2",
      eng: "Operating Room 1,2",
    },
    {
      kor: "수술준비실",
      eng: "Scrub Room",
    },
    {
      kor: "세미나실",
      eng: "Seminar Room",
    },
    {
      kor: "직원 식당",
      eng: "Staff Dining Room",
    },
  ],
};
