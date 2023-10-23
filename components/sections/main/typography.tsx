import { cn } from "@/lib/utils";
import { Black_Han_Sans } from "next/font/google";

const font = Black_Han_Sans({ weight: "400", subsets: ["latin"] });

export default function Typography() {
  return (
    <>
      <h1
        className={cn(
          font.className,
          "text-4xl md:text-7xl lg:text-[100px] font-extrabold text-center heading h-30"
        )}
      >
        <span className="text-secondary">리베</span>
        <span className="text-primary">동물메디컬센터</span>
      </h1>
      <p className="text-stone-600 text-sm md:text-base lg:text-2xl text-center my-6 font-bold">
        사랑과 케어로 함께하는
        <br className="block md:hidden" /> 건강한 반려생활의 길로 안내합니다
      </p>
    </>
  );
}
