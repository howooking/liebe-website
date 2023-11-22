import { Metadata } from "next";
import InfoClient from "./client-component";

export const metadata: Metadata = {
  title: "진료안내 | 리베",
};

export default function InfoPage() {
  return <InfoClient />;
}
