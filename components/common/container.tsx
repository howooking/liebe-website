export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto h-full max-w-[1440px]">{children}</div>;
}
