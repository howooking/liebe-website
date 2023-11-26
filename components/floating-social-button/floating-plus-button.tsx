import SnsButton from "./sns-button";

import { SOCIALS } from "@/constants/socials";

export default function FloatingPlusButton() {
  return (
    <div className="fixed -right-[130px] bottom-[5%] z-40  hidden w-44 flex-col gap-4 overflow-hidden rounded-md border-2 border-primary bg-white p-2 shadow-2xl transition duration-500 hover:-translate-x-36 lg:flex">
      {SOCIALS.map((social) => (
        <SnsButton
          href={social.href}
          Icon={social.icon}
          text={social.desc}
          key={social.label}
        />
      ))}
    </div>
  );
}
