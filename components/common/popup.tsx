"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem("popupShown", expiryDate.toISOString());
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-lg bg-white p-4 shadow-lg">
        <Image src="/popup.jpeg" alt="Popup" width={400} height={400} />

        <div className="mt-4 flex justify-between">
          <Button onClick={handleDontShowAgain} className="">
            7일간 보지 않기
          </Button>

          <Button onClick={handleClose} className="" variant="ghost">
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}
