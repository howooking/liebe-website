import { Metadata } from "next";
import InfoClientComponent from "./client-component";

export const metadata: Metadata = {
  title: "진료안내 | 리베",
};

export default function InfoPage() {
  return <InfoClientComponent />;
}
