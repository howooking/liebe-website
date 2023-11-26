[] 수술방 사진 대문에

[배포](https://liebe-website.vercel.app)

TODO

- testimonial 사진 변졍
- 배포 후에 구글 verification id
- 배포 도메인 주소 변경시 baseurl변경하기

## 고찰

1. SEO

2. 플렉스 오더

```js
import Container from "@/components/common/container";
import MainLogo from "@/components/common/main-logo";

export default function FooterSection() {
  return (
    <div className="mb-12 bg-slate-900 py-6 text-sm text-white lg:mb-0 lg:py-12 lg:text-base">
      <Container>
        <div className="flex flex-col justify-between gap-6 px-3 text-center lg:flex-row lg:text-left">
          <div className="order-2 space-y-2 sm:space-y-4 lg:order-1 lg:flex-1">
            <p>주소 : 서울특별시 송파구 삼전로 56</p>
            <p>전화번호 : 02.6953.7502</p>
          </div>

          <div className="order-1 space-y-2 text-center sm:space-y-4 lg:order-2 lg:flex-1">
            <div className="flex justify-center">
              <MainLogo footer />
            </div>
            <div className="text-sm">
              Copyright ⓒ 2014 리베동물메디컬센터 <br className="sm:hidden" />
              All Rights Reserved.
            </div>
          </div>

          <div className="order-3 space-y-2 text-center sm:space-y-4 lg:flex-1 lg:text-right">
            <p>사업자등록번호 : 530-36-01377</p>
            <p>대표 : 김홍석</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
```

3. 위부 요소 클릭, 포인터 이벤트

```js
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import SnsButton from "./sns-button";
import { Button } from "../ui/button";

import useScrollPosition from "@/hooks/useScrollPosition";
import { SOCIALS } from "@/constants/socials";

export default function FloatingPlusButton() {
  const { isScrollBottom } = useScrollPosition();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <div
      className="fixed bottom-10 right-10 z-40"
      style={{
        opacity: isScrollBottom ? 0 : 100,
        pointerEvents: isScrollBottom ? "none" : "auto", // 포인터 이벤트
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <motion.div animate={open ? "open" : "closed"}>
        <Button
          id="al"
          aria-label="floating button to show buttons linked to sns"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((pv) => !pv);
          }}
          className="hidden items-center gap-2 rounded-full bg-orange-500 px-3 py-2 text-white shadow-2xl transition hover:bg-orange-600 lg:flex"
        >
          <motion.span variants={iconVariants}>
            {open ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
          </motion.span>
        </Button>

        <motion.div
          ref={dropdownRef}
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "bottom", translateX: "-50%" }}
          className="absolute -right-[70px] bottom-[120%] flex w-44 flex-col-reverse gap-2 overflow-hidden rounded-md bg-white p-2 shadow-2xl"
        >
          {SOCIALS.map((social) => (
            <SnsButton
              href={social.href}
              setOpen={setOpen}
              Icon={social.icon}
              text={social.desc}
              key={social.label}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}


```

4. 조건문 단순화

```js
  const delay = useCallback(
    (index: number) => {
      if (!width) {
        return 0.5;
      }
      // sm
      if (width <= 640) {
        return 0.5;
      }
      // md
      if (width > 640 && width <= 768) {
        if (index <= 2) {
          return 0.5 * index;
        }
        return 0;
      }
      // lg
      if (width > 768) {
        if (index <= 3) {
          return 0.5 * index;
        }
        return 0;
      }
    },
    [width],
  );
---
  const delay = useCallback(
    (index: number) => {
      if (!width) return 0.5;
      if (width <= 640) return 0.5;
      if (width <= 768) return index <= 2 ? 0.5 * index : 0;
      return index <= 3 ? 0.5 * index : 0;
    },
    [width],
  );

```

5. noopener noreferrer

```js
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MAP_LINKS } from "@/constants/map-links";

export default function MapLink() {
  return (
    <div className="flex gap-2">
      {MAP_LINKS.map((link) => (
        <Link
          key={link.title}
          target="_blank"
          href={link.href}
          rel="noopener noreferrer"
        >
          <Button
            style={{
              backgroundColor: link.bgColor,
              color: link.textColor,
            }}
          >
            {link.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
```
