export default function Circles() {
  return (
    <>
      <div className="absolute left-0 top-0 z-0 aspect-square w-3/5 min-w-[400px] max-w-[850px] -translate-x-[50%] -translate-y-[50%] rounded-full border-[8px] border-primary" />
      <div className="absolute bottom-0 right-0 z-0 aspect-square w-1/2 min-w-[300px] max-w-[600px] translate-x-[50%] translate-y-[50%] rounded-full border-[8px] border-secondary" />
    </>
  );
}
