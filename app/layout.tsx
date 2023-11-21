import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "@/app/globals.css";
import Navbar from "@/components/common/navbar/navbar";
import FooterSection from "@/components/sections/footer/footer-section";
import FloatingPlusButton from "@/components/floating-social-button/floating-plus-button";
import FixedSocials from "@/components/common/fixed-socials";

import { cn } from "@/lib/utils";
import { baseUrl } from "@/constants/base-url";

const font = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "리베동물메디컬센터",
  description: "서울특별시 잠실구 삼전동 24시동물병원",
  keywords: [
    "리베동물병원",
    "동물병원",
    "서울24시동물병원",
    "잠실동물병원",
    "삼전동동물병원",
    "24시동물병원",
    "강아지암",
    "고양이암",
    "고양이동물병원",
    "고양이전문병원",
    "강아지건강검진",
    "고양이건강검진",
    "강아지mri",
    "고양이mri",
    "동물병원mri",
    "강아지ct",
    "고양이ct",
    "동물병원ct",
    "특수동물",
    "특수동물진료",
    "햄스터진료",
    "파충류진료",
    "설치류진료",
    "토끼진료",
    "앵무새진료",
    "슈가글라이더진료",
    "라쿤진료",
    "강아지심장병",
    "고양이심장병",
    "강아지신부전",
    "고양이신부전",
    "강아지쿠싱증후군",
    "강아지마취",
    "고양이마취",
    "강아지치과",
    "강아지스케일링",
    "강아지치석제거",
    "고양이스케일링",
    "고양이구내염",
    "고양이치과",
    "강아지안과",
    "강아지녹내장",
    "고양이안과",
    "고양이녹내장",
    "강아지수혈",
    "고양이수혈",
    "강아지한방병원",
    "강아지한의원",
    "강아지침치료",
    "동물한방병원",
    "한방동물병원",
    "강아지재활센터",
  ],
  applicationName: "리베동물병원 홈페이지",
  category: "동물병원",
  classification: "동물병원",
  creator: " Howoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={cn("relative text-slate-900 antialiased", font.className)}
      >
        <Navbar />
        {children}
        <FooterSection />
        <FloatingPlusButton />
        <FixedSocials />
      </body>
    </html>
  );
}
