import Slider from "./slider";

export default function Main() {
  return (
    <div className="relative w-full bg-slate-200 h-screen overflow-hidden flex items-center">
      <div className="w-full h-screen bg-black absolute z-10 opacity-40" />
      <Slider />
    </div>
  );
}
