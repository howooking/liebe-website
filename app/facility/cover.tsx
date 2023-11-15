export default function Cover({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/0 p-6">
      <div className="text-xl text-white">{title}</div>
    </div>
  );
}
