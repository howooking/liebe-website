import { BsDot } from "react-icons/bs";

type SingleInfoProps = { kor: string; eng: string };
export default function SingleInfo({ kor, eng }: SingleInfoProps) {
  return (
    <li className="flex items-center justify-between">
      <p className="flex items-center">
        <BsDot />
        {kor}
      </p>
      <p className="hidden sm:block">{eng}</p>
    </li>
  );
}
