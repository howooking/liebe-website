import { AiFillPhone } from "react-icons/ai";

export default function CallCard() {
  return (
    <div className="flex h-full items-center justify-center">
      <a
        href="tel:+0269537502"
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <h2
          className="text-center text-3xl font-bold"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          전화 문의
        </h2>
        <AiFillPhone
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          02 - 6953 - 7502
        </p>
      </a>
    </div>
  );
}
