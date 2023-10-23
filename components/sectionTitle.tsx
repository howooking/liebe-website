type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="absolute top-1 left-1 text-2xl font-bold">{title}</div>
  );
}
