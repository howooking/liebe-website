import { CSSProperties } from "react";
import { IconType } from "react-icons";

type IconButtonProps = {
  Icon: IconType;
  style?: CSSProperties;
  naver?: boolean;
};

export default function IconButton({ Icon, style, naver }: IconButtonProps) {
  return (
    <button className="p-3">
      <Icon size={naver ? 16 : 24} style={style} />
    </button>
  );
}
