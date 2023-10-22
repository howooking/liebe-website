import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

export const SOCIALS = [
  {
    label: "kakao",
    href: "https://pf.kakao.com/_uwdNT",
    desc: "카카오상담",
    icon: RiKakaoTalkFill,
    size: 20,
  },
  {
    label: "naver",
    href: "https://blog.naver.com/cypet",
    icon: SiNaver,
    desc: "네이버블로그",
    size: 14,
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/liebeamc/",
    icon: BsInstagram,
    desc: "인스타그램",
    size: 18,
  },
  {
    label: "phone",
    href: "tel:+0269537502",
    icon: AiOutlinePhone,
    desc: "02-6953-7502",
    size: 20,
  },
];
