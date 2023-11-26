import SnsButton from "./sns-button";

import { SOCIALS } from "@/constants/socials";

export default function FloatingPlusButton() {
  return (
    <div className="fixed bottom-10 right-10 z-40">
      <div className="righ absolute -right-[170px] bottom-[10%] flex w-44 flex-col gap-4 overflow-hidden rounded-md border-2 border-primary bg-white p-2 shadow-2xl transition duration-1000 hover:-translate-x-36">
        {SOCIALS.map((social) => (
          <SnsButton
            href={social.href}
            Icon={social.icon}
            text={social.desc}
            key={social.label}
          />
        ))}
      </div>
    </div>
  );
}
