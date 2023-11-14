import type { Clinic } from "@/constants/clinic";

type SwiperCardCoverType = {
  clinic: Clinic;
};

export default function SwiperCardCover({ clinic }: SwiperCardCoverType) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-t from-black/50 via-black/10 to-black/0 p-6 text-white">
      <div className="flex items-center gap-1 text-base sm:text-xl">
        <clinic.Icon />
        <p>{clinic.title}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {clinic.tags.map((tag) => (
          <div key={tag} className="rounded-full border px-2 py-1 text-sm">
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
}
