import { RiKakaoTalkFill, RiPhoneFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";

export const SOCIALS = [
  {
    label: "naver",
    href: "https://blog.naver.com/cypet",
    icon: SiNaver,
    desc: "네이버블로그",
    color: "#03C75A",
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/liebeamc/",
    icon: BiLogoInstagramAlt,
    desc: "인스타그램",
    color: "#03C75A",
  },
  {
    label: "kakao",
    href: "https://pf.kakao.com/_uwdNT",
    desc: "카카오톡상담",
    icon: RiKakaoTalkFill,
    color: "#FAE200",
  },
  {
    label: "phone",
    href: "tel:+050714487502",
    icon: RiPhoneFill,
    desc: "0507.1448.7502",
    color: "#03C75A",
  },
];
