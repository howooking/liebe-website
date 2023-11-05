import Image, { StaticImageData } from "next/image";

type ItemType = {
  image: StaticImageData;
  title: string;
  CARD_WIDTH: number;
  CARD_HEIGHT: number;
  MARGIN: number;
};

export default function Card({
  image,
  title,
  CARD_WIDTH,
  CARD_HEIGHT,
  MARGIN,
}: ItemType) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl  shadow-md"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Image
        priority
        quality={50}
        alt={title}
        src={image}
        placeholder="blur"
        fill
        className="object-cover object-center"
        sizes="(min-width: 1000px) 800px, 300px"
      />
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/40 via-black/20 to-black/0 p-4 text-sm text-white sm:text-base">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
}
