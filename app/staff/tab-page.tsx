import { STAFFS } from "@/constants/staff";
import Staff from "./page";

export default function TabPage({ selected }: { selected: string }) {
  return (
    <div>
      {/* {STAFFS[selected].map((staff) => (
        <Staff key={staff.name} />
      ))} */}
    </div>
  );
}
