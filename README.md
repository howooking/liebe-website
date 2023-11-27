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
