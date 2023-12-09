import { GROOMINGS } from "@/constants/groomings";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid-col-1 grid flex-wrap gap-6 bg-amber-50 pt-11 md:grid-cols-2 lg:grid-cols-3">
      {GROOMINGS.map((grooming) => (
        <Image
          key={grooming.id}
          src={grooming.image}
          alt={grooming.title}
          sizes="(min-width: 1040px) 33.32vw, (min-width: 780px) 50vw, 100vw"
        />
      ))}
    </div>
  );
}
