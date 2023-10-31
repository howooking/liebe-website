import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TimeTable from "./time-table";
import type { Staff } from "@/constants/staff";

type StaffCardProps = {
  staff: Staff;
  selected: string;
};

export default function StaffCard({ staff, selected }: StaffCardProps) {
  return (
    <li key={staff.name}>
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="flex w-full">
          <div className="flex w-full flex-col justify-between">
            <div className="space-y-2">
              <CardTitle className="text-3xl">
                {staff.name}
                <span className="ml-1 text-2xl font-thin">{staff.title}</span>
              </CardTitle>
              <ul>
                {staff.history.map((his) => (
                  <li key={his}>{his}</li>
                ))}
              </ul>
            </div>
            {selected === "수의사" && <TimeTable off={staff.off} />}
          </div>
          <Image
            src={staff.image}
            alt={staff.name}
            placeholder="blur"
            className="rounded-full"
            width={300}
          />
        </CardContent>
      </Card>
    </li>
  );
}
