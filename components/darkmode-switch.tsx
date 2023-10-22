"use client";

import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function DarkmodeSwitch() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "light";
    setTheme(theme);
  }, [setTheme]);

  return (
    <>
      {theme === "light" ? (
        <Button variant="ghost" onClick={() => setTheme("dark")} size="icon">
          <RiMoonClearLine
            size={24}
            className="hover:text-primary transition"
          />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setTheme("light")} size="icon">
          <RiSunLine size={24} className="hover:text-primary transition" />
        </Button>
      )}
    </>
  );
}
