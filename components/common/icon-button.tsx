import { CSSProperties } from "react";
import { IconType } from "react-icons";

type IconButtonProps = {
  Icon: IconType;
  style: CSSProperties;
};

export default function IconButton({ Icon, style }: IconButtonProps) {
  return (
    <div className="p-3">
      <Icon size={24} style={style} />
    </div>
  );
}
