import { Button } from "../ui/button";

export default function Links({ toggleOpen }: { toggleOpen: () => void }) {
  return (
    <div className="bg-foreground fixed top-0 left-0 w-[400px] h-full">
      <Button onClick={toggleOpen}>닫기</Button>
    </div>
  );
}
