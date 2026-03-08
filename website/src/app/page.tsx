import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "IT Consulting, Staff Augmentation & Cloud Solutions | Quent Tech Ltd",
  description:
    "Expert IT consulting and staff augmentation in Cyprus. Hire pre-vetted data engineers, cloud architects, and DevOps specialists. AWS, Azure, Databricks, Snowflake. B2B contractor model.",
  alternates: {
    canonical: "https://quent-tech.com",
  },
};

export default function Home() {
  return <HomePage />;
}
