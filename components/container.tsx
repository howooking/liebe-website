export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1600px] px-10">{children}</div>;
}
