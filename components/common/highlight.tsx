import { cn } from "@/lib/utils";

type HighlightProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};

export default function Highlight({ children, className }: HighlightProps) {
  return (
    <div className={cn(className, "relative inline")}>
      {children}
      <div className="absolute bottom-1 left-0 h-1/3 w-full bg-primary/20" />
    </div>
  );
}
