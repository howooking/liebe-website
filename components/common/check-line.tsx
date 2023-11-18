import { IoCheckmark } from "react-icons/io5";

export default function CheckLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 leading-6">
      <div>
        <IoCheckmark size={20} className="font-thin" />
      </div>
      <div>{children}</div>
    </div>
  );
}
