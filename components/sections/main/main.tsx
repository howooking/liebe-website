import Slider from "./slider";
import Typography from "./typography";
import ArrowDown from "./arrow-down";
import Silhouette from "./silhouette";

export default function Main() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Typography />
      <Silhouette />
      <Slider />
      <ArrowDown />
    </div>
  );
}
