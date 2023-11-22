import FacilityClient from "./client-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "시설안내 | 리베",
};

export default function FacilityPage() {
  return <FacilityClient />;
}
