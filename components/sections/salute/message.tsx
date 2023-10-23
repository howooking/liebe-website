import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";

const Message = () => {
  return (
    <div className="bg-slate-950 px-4 py-12">
      <ShimmerBorderCard />
    </div>
  );
};

const ShimmerBorderCard = () => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          대표원장 인사말
        </h4>
        <div className="relative z-10 text-slate-400">
          <p>LIEBE는 독일어로 사랑을 뜻합니다.</p>
          <p>
            이름처럼 사랑으로 가득한 리베동물메디컬에서는 반려동물과
            보호자분들을 위해 최상의 의료 서비스를 제공하고 있습니다.
          </p>
          <p>
            리베동물메디컬센터는 동물들과 함께하는 순간을 소중히 여기며, 그들의
            건강과 행복을 위해 노력하고 있습니다.
          </p>
          <p>
            아이들과 함께하는 시간이 더욱 특별하고 따뜻한 경험이 되도록,
            리베동물메디컬센터가 보호자 여러분들과 함께하겠습니다.
          </p>
          <p>수의사 김홍석</p>
        </div>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default Message;
