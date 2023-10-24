import { motion } from "framer-motion";
import { Black_Han_Sans } from "next/font/google";
import { BsMouse } from "react-icons/bs";

const font = Black_Han_Sans({ weight: "400", subsets: ["latin"] });

export default function Typography() {
  return (
    <motion.div
      className="flex flex-col items-center gap-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className="bg-gradient-to-r from-secondary to-primary bg-clip-text py-1 text-8xl font-extrabold text-transparent">
        리베 동물메디컬센터
      </h1>
      <p className="text-3xl text-foreground text-stone-700">
        사랑과 케어로 함께하는
        <br className="block md:hidden" /> 건강한 반려생활의 길로 안내합니다
      </p>
      <p className="flex animate-bounce items-center gap-2 text-stone-500">
        스크롤 아래로
        <BsMouse />
      </p>
    </motion.div>
  );
}
