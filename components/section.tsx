export default function Section({
  children,
  hash,
}: {
  children: React.ReactNode;
  hash: string;
}) {
  return (
    <div className="h-screen scroll-snap" id={hash}>
      {children}
    </div>
  );
}
