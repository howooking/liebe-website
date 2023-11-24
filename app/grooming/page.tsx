import { Metadata } from "next";
import GroomingClient from "./client-component";

export const metadata: Metadata = {
  title: "미용안내 | 리베",
};

export default function GroomingPage() {
  return <GroomingClient />;
}
