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
import first10 from "@/public/facility/first10.jpg";
import first11 from "@/public/facility/first11.jpg";
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
import second14 from "@/public/facility/second14.jpg";
import second15 from "@/public/facility/second15.jpg";
import second16 from "@/public/facility/second16.jpg";
import second17 from "@/public/facility/second17.jpg";
import third1 from "@/public/facility/third1.jpg";
import third2 from "@/public/facility/third2.jpg";
import third3 from "@/public/facility/third3.jpg";
import third4 from "@/public/facility/third4.jpg";
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
  id: number;
  title: string;
  image: StaticImageData;
};

export const FACILIES: FacilityImages = {
  외관: [
    {
      id: 1,
      title: "외관",
      image: outter1,
    },
    {
      id: 2,
      title: "외관",
      image: outter2,
    },
    {
      id: 3,
      title: "외관",
      image: outter3,
    },
    {
      id: 4,
      title: "외관",
      image: outter4,
    },
  ],
  "1층": [
    {
      id: 1,
      title: "데스크",
      image: first1,
    },
    {
      id: 2,
      title: "데스크",
      image: first2,
    },
    {
      id: 3,
      title: "펫용품",
      image: first3,
    },
    {
      id: 4,

      title: "펫용품",
      image: first4,
    },
    {
      id: 5,

      title: "대기장소",
      image: first5,
    },
    {
      id: 6,

      title: "대기장소",
      image: first6,
    },
    {
      id: 7,
      title: "미용 대기장소",
      image: first7,
    },
    {
      id: 8,
      title: "미용실",
      image: first8,
    },
    {
      id: 9,
      title: "미용 후 찰칵",
      image: first9,
    },
    {
      id: 10,
      title: "화장실",
      image: first10,
    },
    {
      id: 11,
      title: "엘레베이터",
      image: first11,
    },
  ],
  "2층": [
    {
      id: 1,
      title: "처치 및 입원실",
      image: second1,
    },
    {
      id: 2,
      title: "입원실",
      image: second2,
    },
    {
      id: 3,
      title: "격리입원실",
      image: second3,
    },
    {
      id: 4,
      title: "입원실",
      image: second4,
    },
    {
      id: 5,
      title: "특수동물 입원실",
      image: second5,
    },
    {
      id: 6,
      title: "고양이 진료대기실",
      image: second6,
    },
    {
      id: 7,
      title: "고양이 진료실",
      image: second7,
    },
    {
      id: 8,
      title: "고양이 처치실",
      image: second8,
    },
    {
      id: 9,
      title: "진료실",
      image: second9,
    },
    {
      id: 10,
      title: "진료실",
      image: second10,
    },
    {
      id: 11,
      title: "대기장소",
      image: second11,
    },
    {
      id: 12,
      title: "면회실",
      image: second12,
    },
    {
      id: 13,
      title: "면회실 내부",
      image: second13,
    },
    {
      id: 14,
      title: "X-ray실",
      image: second14,
    },
    {
      id: 15,
      title: "초음파실",
      image: second15,
    },
    {
      id: 16,
      title: "임상병리실",
      image: second16,
    },
    {
      id: 17,
      title: "약제실",
      image: second17,
    },
  ],
  "3층": [
    {
      id: 1,
      title: "CT실 & MRI실",
      image: third1,
    },
    {
      id: 2,
      title: "CT실",
      image: third2,
    },
    {
      id: 3,
      title: "CT실",
      image: third3,
    },
    {
      id: 4,
      title: "MRI실",
      image: third4,
    },
  ],
  "4층": [
    {
      id: 1,
      title: "제1수술실",
      image: forth1,
    },
    {
      id: 2,
      title: "제1수술실",
      image: forth2,
    },
    {
      id: 3,
      title: "제1수술실",
      image: forth3,
    },
    {
      id: 4,
      title: "수술준비실",
      image: forth4,
    },
    {
      id: 5,
      title: "제2수술실",
      image: forth5,
    },
    {
      id: 6,
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
