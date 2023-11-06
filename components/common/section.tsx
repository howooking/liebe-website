import { cn } from "@/lib/utils";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-[48px] sm:min-h-[calc(100vh-48px)]"
    >
      {children}
    </section>
  );
}
