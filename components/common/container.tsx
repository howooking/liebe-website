export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto h-full w-11/12 px-0 md:px-2 lg:px-4">
      {children}
    </div>
  );
}
