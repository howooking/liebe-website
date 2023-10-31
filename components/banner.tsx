import Image, { StaticImageData } from "next/image";

export default function Banner({
  imageSrc,
  title,
  subTitle,
}: {
  imageSrc: StaticImageData;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="relative flex h-80 items-center justify-center">
      <Image
        fill
        placeholder="blur"
        alt="staff banner"
        src={imageSrc}
        className="object-cover"
      />
      <div className="absolute h-full w-full bg-black/50" />
      <div className="z-10 flex flex-col items-center gap-4 text-white">
        <h2 className="text-3xl font-bold text-primary">{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
