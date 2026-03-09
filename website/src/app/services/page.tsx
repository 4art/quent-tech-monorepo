import { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "IT Services - Software Development, Cloud, Data Engineering & Staff Augmentation",
  description:
    "Professional IT services: custom software development, AWS/Azure cloud solutions, data engineering, staff augmentation, and B2B contractor model. Hire pre-vetted data engineers and cloud architects.",
  alternates: {
    canonical: "https://quent-tech.com/services",
  },
  openGraph: {
    title: "IT Services - Software Development, Cloud, Data Engineering & Staff Augmentation",
    description: "Professional IT services: custom software development, AWS/Azure cloud solutions, data engineering, staff augmentation, and B2B contractor model.",
    url: "https://quent-tech.com/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}
