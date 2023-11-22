export default function ContainerWide({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto h-full max-w-[1440px] px-3">{children}</div>;
}
