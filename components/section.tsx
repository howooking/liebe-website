"use client";

import { useCurrSectionStore } from "@/lib/store";
import { useEffect, useRef } from "react";

export default function Section({
  children,
  hash,
}: {
  children: React.ReactNode;
  hash: string;
}) {
  const sectionRef = useRef(null);
  const { setCurrSection } = useCurrSectionStore();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.pushState(null, "", `#${hash}`);
            setCurrSection(hash);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hash, setCurrSection]);

  return (
    <section className="md:pl-[90px]" id={hash} ref={sectionRef}>
      {children}
    </section>
  );
}
