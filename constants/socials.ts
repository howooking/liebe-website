import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";

export const SOCIALS = [
  {
    label: "naver",
    href: "https://blog.naver.com/cypet",
    icon: SiNaver,
    desc: "네이버블로그",
    size: 20,
    color: "#03C75A",
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/liebeamc/",
    icon: BiLogoInstagramAlt,
    desc: "인스타그램",
    size: 36,
    color: "#03C75A",
  },
  {
    label: "kakao",
    href: "https://pf.kakao.com/_uwdNT",
    desc: "카카오톡상담",
    icon: RiKakaoTalkFill,
    size: 32,
    color: "#FAE200",
  },
  {
    label: "phone",
    href: "tel:+0269537502",
    icon: AiFillPhone,
    desc: "02.6953.7502",
    size: 32,
    color: "#03C75A",
  },
];
