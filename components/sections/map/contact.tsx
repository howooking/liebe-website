import TimeInfo from "@/app/subject/time-info";
import MapLink from "./map-link";
import { FaSubway, FaCar } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 p-10 sm:w-1/2">
      <div className="">
        <h2 className="mb-4 text-2xl font-bold">리베동물메디컬센터 오시는길</h2>
        <p>서울특별시 송파구 삼전로 56 리베동물메디컬센터</p>
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
      <div>
        <h2 className="mb-4 text-2xl font-bold">진료시간 안내</h2>
        <TimeInfo front />
      </div>
    </div>
  );
}
