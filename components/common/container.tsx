export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto h-full w-5/6 px-0 md:px-5 lg:px-10">{children}</div>
  );
}
