import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function Typography() {
  return (
    <div className="text-white text-4xl z-20 absolute flex flex-col items-center gap-4">
      <p className="opacity-80">
        사랑과 케어로 함께하는 건강한 반려생활의 길로 안내합니다
      </p>
      <h1 className="text-5xl opacity-100">리베동물메디컬센터</h1>
    </div>
  );
}
