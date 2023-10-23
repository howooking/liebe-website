type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="absolute top-10 left-10 text-2xl font-bold">{title}</div>
  );
}
