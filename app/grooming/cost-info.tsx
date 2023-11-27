import { useState } from "react";
import { FaCut } from "react-icons/fa";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CostTable from "./cost-table";
import GroomingTabs from "./grooming-tabs";
import AdditionalCost from "./additional-cost";
import { GROOMING_COSTS } from "@/constants/grooming-costs";

export const GROOMING_TABS = ["소형견", "중형견", "특수견", "고양이"];

export default function CostInfo() {
  const [selected, setSelected] = useState(GROOMING_TABS[0]);

  return (
    <Card className="col-span-2 mt-6 flex h-full flex-col">
      <CardHeader className="relative flex items-center">
        <div className="flex items-center gap-2 text-base font-semibold md:text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-center text-white md:h-10 md:w-10">
            <FaCut />
          </div>
          <CardTitle>비용 안내</CardTitle>
          <div className="absolute bottom-3 right-3 text-sm text-slate-600">
            단위 : 만원
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <GroomingTabs selected={selected} setSelected={setSelected} />

        <div className="bg-slate-400 p-3 text-center text-white ">
          {GROOMING_COSTS[selected].caption}
        </div>

        <CostTable selected={selected} />
        {selected !== "고양이" && <AdditionalCost />}
      </CardContent>
    </Card>
  );
}
