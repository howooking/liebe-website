import { cn } from "@/lib/utils";

export default function Section({
  children,
  id,
  slider,
}: {
  children: React.ReactNode;
  id: string;
  slider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        slider ? "scroll-mt-[0px]" : "scroll-mt-[48px]",
        "relative min-h-[calc(100vh-48px)]",
      )}
    >
      {children}
    </section>
  );
}
