import { cn } from "@/lib/utils";

type BackgroundCirclesProps = {
  opposite?: boolean;
};

export default function BackgroundCircles({
  opposite,
}: BackgroundCirclesProps) {
  return (
    <>
      <div
        className={cn(
          opposite ? "border-secondary" : "border-primary",
          "absolute left-0 top-0 -z-10 aspect-square w-3/5 min-w-[300px] max-w-[850px] -translate-x-[60%] -translate-y-[60%] rounded-full border-[8px]",
        )}
      />
      <div
        className={cn(
          opposite ? "border-primary" : "border-secondary",
          "absolute bottom-0 right-0 -z-10 aspect-square w-1/2 min-w-[300px] max-w-[600px] translate-x-[60%] translate-y-[60%] rounded-full border-[8px]",
        )}
      />
    </>
  );
}
