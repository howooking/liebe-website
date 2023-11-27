"use client";

import Banner from "@/components/common/banner";
import ContainerNarrow from "@/components/common/container-narrow";
import Section from "@/components/common/section";
import groomingBanner from "@/public/grooming/grooming-banner.jpg";
import GroomingSwiper from "./grooming-swiper";
import Link from "next/link";
import { motion } from "framer-motion";
import TimeInfo from "./time-info";
import CostInfo from "./cost-info";

export default function GroomingClient() {
  return (
    <Section>
      <Banner
        imageSrc={groomingBanner}
        title="미용 안내"
        subTitle={
          <div className="flex flex-col gap-2 text-center">
            <div>미용시간 및 비용안내</div>
            <Link
              href="https://www.instagram.com/liebeamc_9room/"
              target="_blank"
              rel="noopener noreferrer"
            >
              미용 인스타 : liebeamc_9room
            </Link>
          </div>
        }
      />
      <div className="bg-stone-100 py-12">
        <ContainerNarrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 space-y-6 lg:grid-cols-3 lg:gap-6 lg:space-y-0">
              <TimeInfo />
              <GroomingSwiper />
            </div>

            <CostInfo />
          </motion.div>
        </ContainerNarrow>
      </div>
    </Section>
  );
}
