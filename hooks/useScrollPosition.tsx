import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [isScrollBottom, setIsScrollBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const isNearBottom =
        documentHeight - (scrollPosition + windowHeight) < 50;

      setIsScrollTop(scrollPosition <= 50);
      setIsScrollBottom(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrollTop, isScrollBottom };
}
