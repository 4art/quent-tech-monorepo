import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get IT Consulting Quote",
  description:
    "Contact Quent Tech Ltd for IT consulting, software development, and cloud solutions. Based in Paphos, Cyprus. Get a free consultation for your project.",
  alternates: {
    canonical: "https://quent-tech.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
