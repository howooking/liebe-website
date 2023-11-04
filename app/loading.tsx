import loadingSvg from "@/public/loading.svg";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="z-50 flex h-screen w-full items-center justify-center bg-slate-900">
      <Image alt="loading svg" src={loadingSvg} />
    </div>
  );
}
