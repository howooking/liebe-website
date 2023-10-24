import { cn } from "@/lib/utils";

export default function ClientLoading({ loading }: { loading: boolean }) {
  return (
    <div
      className={cn(
        !loading && "hidden",
        "w-full h-screen bg-black z-50 absolute"
      )}
    >
      <p className="text-white">ClientLoading</p>
    </div>
  );
}
