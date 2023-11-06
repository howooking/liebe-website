type TitleProps = {
  children: React.ReactNode;
};

export default function title({ children }: TitleProps) {
  return (
    <h2 className="relative mb-4 inline text-lg font-bold">
      {children}
      <span className="absolute bottom-1 left-0 h-2 w-full bg-primary/30" />
    </h2>
  );
}
