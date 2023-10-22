"use client";

import { Button } from "../ui/button";

export default function ToggleButton({
  toggleOpen,
}: {
  toggleOpen: () => void;
}) {
  return <Button onClick={toggleOpen}>버튼</Button>;
}
