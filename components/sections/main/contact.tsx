import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

export default function Contact() {
  return (
    <motion.div
      className="text-white text-2xl z-20 absolute flex flex-col gap-1 tracking-tighter top-2 right-2 font-bold items-end"
      animate={{ y: 0 }}
      initial={{ y: -150 }}
      transition={{ duration: 1 }}
      whileInView={{ y: 0 }}
    >
      <p>365일 24시간 연중무휴</p>
      <p>야간 응급 진료</p>
      <div className="flex gap-1 items-center">
        <BsFillTelephoneFill size={15} className="mr-2" />
        02 <GoDotFill size={10} /> 6553 <GoDotFill size={10} />
        7502
      </div>
    </motion.div>
  );
}
