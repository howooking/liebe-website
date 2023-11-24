import Highlight from "@/components/common/highlight";
import { FaHeart, FaHandshakeSimple, FaRoad } from "react-icons/fa6";

export const VALUES = [
  {
    title: (
      <>
        고객과의 <Highlight>신뢰</Highlight>를 우선으로 하는
      </>
    ),
    subtitle: (
      <>
        최고 수준의 전문 의료진과 정성스러운 친절 서비스로, 보호자님에게{" "}
        <Highlight className="font-semibold">신뢰</Highlight>를 안겨드립니다.
      </>
    ),
    Icon: FaHandshakeSimple,
  },
  {
    title: (
      <>
        환자를 내자식과 같이 <Highlight>사랑</Highlight>하는
      </>
    ),
    subtitle: (
      <>
        <Highlight className="font-semibold">사랑</Highlight>의 손길로
        보호자님들과 소중한 아이들을 책임지고 지켜드리겠습니다.
      </>
    ),
    Icon: FaHeart,
  },
  {
    title: (
      <>
        <Highlight>원칙</Highlight>과 타협하지 않는
      </>
    ),
    subtitle: (
      <>
        <Highlight className="font-semibold">원칙</Highlight>을 바탕으로 하는
        전문 의료서비스를 약속합니다.
      </>
    ),
    Icon: FaRoad,
  },
];
