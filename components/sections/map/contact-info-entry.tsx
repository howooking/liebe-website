import Link from "next/link";
import { IconType } from "react-icons";

type ContactInfoEntryProps = { icon: IconType; text: string; link?: string };

export default function ContactInfoEntry({
  icon: Icon,
  text,
  link,
}: ContactInfoEntryProps) {
  return (
    <div className="flex items-center gap-1">
      <Icon />
      {link ? <Link href={link}>{text}</Link> : <span>{text}</span>}
    </div>
  );
}
