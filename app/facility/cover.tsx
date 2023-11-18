export default function Cover({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/50 via-black/10 to-black/0 p-3 sm:p-6">
      <div className="smtext-xl text-base text-white">{title}</div>
    </div>
  );
}
