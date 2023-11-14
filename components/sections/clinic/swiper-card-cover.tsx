import type { Clinic } from "@/constants/clinic";

type SwiperCardCoverType = {
  clinic: Clinic;
};

export default function SwiperCardCover({ clinic }: SwiperCardCoverType) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-black/50 via-black/10 to-black/0 p-4 text-white">
      <div className="flex items-center gap-1 text-xl">
        <clinic.Icon />
        <p>{clinic.title}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {clinic.tags.map((tag) => (
          <div
            key={tag}
            className="rounded-full border px-2 py-1 text-sm md:text-sm"
          >
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
}
