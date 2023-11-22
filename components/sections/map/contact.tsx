import { RiKakaoTalkFill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaSubway, FaCar } from "react-icons/fa";

import Title from "@/components/common/title";
import MapLink from "./map-link";
import TimeTable from "./time-table";
import ContactInfoEntry from "./contact-info-entry";

export default function Contact() {
  return (
    <div className="relative z-10 flex flex-col justify-evenly gap-12 md:w-2/3">
      <div className="space-y-4">
        <Title>리베동물병원 오시는길</Title>
        <div className="flex flex-col gap-2">
          <MapLink />
          <div className="space-y-2">
            <ContactInfoEntry
              icon={FaLocationDot}
              text="서울특별시 송파구 삼전로 56"
            />
            <ContactInfoEntry icon={FaCar} text="병원건물 1층 주차장 이용" />
            <ContactInfoEntry
              icon={FaSubway}
              text="삼전역 3번 출구 도보 5분 거리"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Title>진료시간 안내</Title>
        <TimeTable />
      </div>

      <div className="space-y-4">
        <Title>CONTACT</Title>
        <div className="space-y-2">
          <ContactInfoEntry
            icon={RiPhoneFill}
            text="02.6953.7502"
            link="tel:+0269537502"
          />
          <ContactInfoEntry
            icon={RiKakaoTalkFill}
            text="카카오상담하기"
            link="https://pf.kakao.com/_uwdNT"
          />
          <ContactInfoEntry icon={RiMailFill} text="liebeamc2@daum.net" />
        </div>
      </div>
    </div>
  );
}
