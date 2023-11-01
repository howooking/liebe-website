import { motion } from "framer-motion";
import { Black_Han_Sans } from "next/font/google";
import { BsMouse } from "react-icons/bs";

const font = Black_Han_Sans({ weight: "400", subsets: ["latin"] });

export default function Typography() {
  return (
    <motion.div
      className="flex flex-col items-center gap-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text py-1 text-3xl font-bold text-transparent sm:text-5xl md:text-7xl lg:text-8xl">
        리베동물메디컬센터
      </h1>
      <p className="text-center text-sm sm:text-xl md:text-2xl lg:text-3xl">
        사랑과 케어로 함께하는 <br className="block md:hidden" />
        건강한 반려생활의 길로 안내합니다
      </p>
      <p className="mt-10 flex animate-bounce items-center gap-2 text-stone-500">
        스크롤 아래로
        <BsMouse />
      </p>
    </motion.div>
  );
}
