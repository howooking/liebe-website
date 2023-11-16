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
import third1 from "@/public/facility/third1.png";
import third2 from "@/public/facility/third2.png";
import third3 from "@/public/facility/third3.png";
import third4 from "@/public/facility/third4.png";
import third5 from "@/public/facility/third5.png";
import third6 from "@/public/facility/third6.png";
import third7 from "@/public/facility/third7.png";
import forth1 from "@/public/facility/forth1.jpg";
import forth2 from "@/public/facility/forth2.jpg";
import forth3 from "@/public/facility/forth3.jpg";
import forth4 from "@/public/facility/forth4.jpg";
import forth5 from "@/public/facility/forth5.jpg";
import forth6 from "@/public/facility/forth6.jpg";

import { StaticImageData } from "next/image";

type FacilityImages = {
  [key: string]: LEVEL[];
};
export type LEVEL = {
  title: string;
  image: StaticImageData;
};

export const FACILIES: FacilityImages = {
  외관: [
    {
      title: "병원외관1",
      image: outter1,
    },
    {
      title: "병원외관2",
      image: outter2,
    },
    {
      title: "병원외관3",
      image: outter3,
    },
    {
      title: "병원외관4",
      image: outter4,
    },
  ],
  "1층": [
    {
      title: "안내데스크1",
      image: first1,
    },
    {
      title: "안내데스크2",
      image: first2,
    },
    {
      title: "펫용품",
      image: first3,
    },
    {
      title: "로비1",
      image: first4,
    },
    {
      title: "대기장소1",
      image: first5,
    },
    {
      title: "대기장소2",
      image: first6,
    },
    {
      title: "미용대기장소",
      image: first7,
    },
    {
      title: "미용실",
      image: first8,
    },
    {
      title: "엘레베이터",
      image: first9,
    },
  ],
  "2층": [
    {
      title: "처치실 및 입원실",
      image: second1,
    },
    {
      title: "입원실",
      image: second2,
    },
    {
      title: "격리입원실",
      image: second3,
    },
    {
      title: "입원장",
      image: second4,
    },
    {
      title: "특수동물 입원장",
      image: second5,
    },
    {
      title: "고양이 진료대기실",
      image: second6,
    },
    {
      title: "고양이 진료실",
      image: second7,
    },
    {
      title: "면회실",
      image: second8,
    },
    {
      title: "면회실 내부",
      image: second9,
    },
    {
      title: "약제실1",
      image: second10,
    },
    {
      title: "약제실2",
      image: second11,
    },
    {
      title: "임상병리실",
      image: second12,
    },
    {
      title: "x-ray촬영실",
      image: second13,
    },
  ],
  "3층": [
    {
      title: "CT실1",
      image: third1,
    },
    {
      title: "CT실2",
      image: third2,
    },
    {
      title: "CT실3",
      image: third3,
    },
    {
      title: "영상분석실",
      image: third4,
    },
    {
      title: "MRI실1",
      image: third5,
    },
    {
      title: "MRI실2",
      image: third6,
    },
    {
      title: "CT실 & MRI실",
      image: third7,
    },
  ],
  "4층": [
    {
      title: "제1 수술실1",
      image: forth1,
    },
    {
      title: "제1 수술실2",
      image: forth2,
    },
    {
      title: "제1 수술실3",
      image: forth3,
    },
    {
      title: "수술준비실",
      image: forth4,
    },
    {
      title: "제2 수술실",
      image: forth5,
    },
    {
      title: "산소발생기",
      image: forth6,
    },
  ],
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
