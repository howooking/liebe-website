import TimeInfo from "@/app/subject/time-info";
import MapLink from "./map-link";
import { FaSubway, FaCar } from "react-icons/fa";
import { RiKakaoTalkFill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mx-auto flex w-11/12 flex-col justify-evenly gap-10 py-6 sm:w-1/2 sm:px-6">
      <div>
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">
          리베동물메디컬센터 오시는길
        </h2>
        <div className="flex flex-col gap-2">
          <p>서울특별시 송파구 삼전로 56</p>
          <MapLink />
          <div>
            <div className="flex items-center gap-2">
              <FaCar /> 병원건물 1층 주차장 이용
            </div>
            <div className="flex items-center gap-2">
              <FaSubway /> 삼전역 3번 출구 도보 5분 거리
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">진료시간 안내</h2>
        <TimeInfo />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">CONTACT</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RiPhoneFill />
            <Link href="tel:+0269537502">02.6953.7502</Link>
          </div>
          <div className="flex items-center gap-2">
            <RiKakaoTalkFill />
            <Link href="https://pf.kakao.com/_uwdNT">카카오상담하기</Link>
          </div>
          <div className="flex items-center gap-2">
            <RiMailFill /> liebeamc2@daum.net
          </div>
        </div>
      </div>
    </div>
  );
}
