import TimeInfo from "@/app/subject/time-info";
import MapLink from "./map-link";
import { FaSubway, FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiKakaoTalkFill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import Link from "next/link";
import Title from "@/components/common/title";

export default function Contact() {
  return (
    <div className="relative z-10 flex flex-col justify-evenly gap-12 md:w-2/3">
      <div className="space-y-4">
        <Title>리베동물병원 오시는길</Title>
        <div className="flex flex-col gap-2">
          <MapLink />
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <FaLocationDot /> 서울특별시 송파구 삼전로 56
            </div>
            <div className="flex items-center gap-1">
              <FaCar /> 병원건물 1층 주차장 이용
            </div>
            <div className="flex items-center gap-1">
              <FaSubway /> 삼전역 3번 출구 도보 5분 거리
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Title>진료시간 안내</Title>
        <TimeInfo />
      </div>

      <div className="space-y-4">
        <Title>CONTACT</Title>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <RiPhoneFill />
            <Link href="tel:+0269537502">02.6953.7502</Link>
          </div>
          <div className="flex items-center gap-1">
            <RiKakaoTalkFill />
            <Link href="https://pf.kakao.com/_uwdNT">카카오상담하기</Link>
          </div>
          <div className="flex items-center gap-1">
            <RiMailFill /> liebeamc2@daum.net
          </div>
        </div>
      </div>
    </div>
  );
}
