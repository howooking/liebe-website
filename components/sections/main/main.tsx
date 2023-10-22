import Slider from "./slider";
import Typography from "./typography";

export default function Main() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Typography />
      <div className="w-full h-screen bg-black absolute z-10 opacity-50" />
      <Slider />
    </div>
  );
}
