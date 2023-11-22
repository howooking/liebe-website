import StaffClient from "./client-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진소개 | 리베",
};

export default function StaffPage() {
  return <StaffClient />;
}
