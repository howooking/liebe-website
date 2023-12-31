import Image from "next/image";
import loadingSvg from "@/public/loading.svg";

export default function Loading() {
  return (
    <div className="z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-slate-900">
      <Image alt="loading svg" src={loadingSvg} />
    </div>
  );
}
