"use client";

import ContainerNarrow from "@/components/common/container-narrow";
import costInfo from "@/public/cost-info.jpeg";
import Image from "next/image";

export default function CostTab() {
  return (
    <ContainerNarrow>
      <section className="py-12">
        <Image src={costInfo} alt="cost info" placeholder="blur" />
      </section>
    </ContainerNarrow>
  );
}
