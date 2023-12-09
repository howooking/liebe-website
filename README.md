### 배포

[https://liebeamc.com](https://liebeamc.com)

### TODO

- testimonial 사진 및 후기 준비되면 오픈

### 고찰

1. SEO

- nextjs SEO 최적화

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "리베동물메디컬센터",
  description: "서울특별시 잠실구 삼전동 24시동물병원",
  keywords: ["리베동물병원", ... ],
  applicationName: "리베동물병원 홈페이지",
  category: "동물병원",
  classification: "동물병원",
  creator: "howoo",
  verification: { google: "******" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <meta
        name="naver-site-verification"
        content="******" // type Metadata의 verification에 네이버가 없으므로 다음과 같이 추가
      />
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


```

- sitemap

```ts
import { baseUrl } from "@/constants/base-url";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/info/time`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/info/visit`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/staff`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/facility`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/grooming`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.4,
    },
  ];
}
```

- robot.txt

```txt
User-agent: * // 네이버는 yeti 사용, 모든 크롤러가 접근가능하도록 *
Allow:/

Sitemap: https://www.liebeamc.com/sitemap.xml
```

- opengraph-image, twitter-image

- 네이버 서치어드바이저, 구글 서치 콘솔 등록

2. Nextjs Image optimization

- 본 홈페이지에서 사용한 이미지는 모두 로컬 파일이다.
- 모든 이미지는 다음과 같이 로컬에서 가져와서 사용하였다.

```js
import g0 from "@/public/grooming/g0.jpg";
import g1 from "@/public/grooming/g1.jpg";
import g2 from "@/public/grooming/g2.jpg";
import g3 from "@/public/grooming/g3.jpg";
import g4 from "@/public/grooming/g4.jpg";
import g5 from "@/public/grooming/g5.jpg";
import g6 from "@/public/grooming/g6.jpg";
import g7 from "@/public/grooming/g7.jpg";
import g8 from "@/public/grooming/g8.jpg";
import g9 from "@/public/grooming/g9.jpg";
import g10 from "@/public/grooming/g10.jpg";
import g11 from "@/public/grooming/g11.jpg";

export const GROOMINGS = [
  { id: 0, title: "말티즈", image: g0 },
  { id: 1, title: "푸들", image: g1 },
  { id: 2, title: "비숑", image: g2 },
  { id: 3, title: "말티푸", image: g3 },
  { id: 4, title: "시츄", image: g4 },
  { id: 5, title: "포메라니안", image: g5 },
  { id: 6, title: "푸들", image: g6 },
  { id: 7, title: "시츄", image: g7 },
  { id: 8, title: "푸들", image: g8 },
  { id: 9, title: "시츄", image: g9 },
  { id: 10, title: "말티즈", image: g10 },
  { id: 11, title: "푸들", image: g11 },
];

// 사용처
{GROOMINGS.map((grooming) => (
  <Image
    key={grooming.id}
    quality={100} // 기본 75로 설정된다.
    src={grooming.image}
    alt={grooming.title}
    placeholder="blur"
    priority
    className="rounded-md"
    sizes="(max-width: 1024px) calc(100vw - 24px), 1000px"
  />
  <Cover title={grooming.title} />
))}

```
