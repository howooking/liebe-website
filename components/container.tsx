export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-5/6 md:px-10">{children}</div>;
}
