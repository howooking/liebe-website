export default function Container2({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto h-full max-w-[1024px] px-3">{children}</div>;
}
