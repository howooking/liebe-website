import { BsDot } from "react-icons/bs";

type SingleInfoProps = { kor: string; eng: string };
export default function SingleInfo({ kor, eng }: SingleInfoProps) {
  return (
    <li className="flex items-center justify-between">
      <p className="flex items-center">
        <BsDot />
        {kor}
      </p>
      <p className="text-sm text-stone-500">{eng}</p>
    </li>
  );
}
