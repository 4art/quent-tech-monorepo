import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us - IT Consulting & Staff Augmentation Experts",
  description:
    "Quent Tech Ltd: boutique IT consultancy and staff augmentation firm in Paphos, Cyprus. Founded by Artem Firsov with 10+ years experience. Hire data engineers and cloud architects.",
  alternates: {
    canonical: "https://quent-tech.com/about",
  },
};

export default function About() {
  return <AboutPage />;
}
