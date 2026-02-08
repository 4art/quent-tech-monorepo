import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quent-tech.com"),
  title: {
    default: "Quent Tech Ltd | IT Consulting & Cloud Solutions Cyprus",
    template: "%s | Quent Tech Ltd",
  },
  description:
    "Expert IT consulting and cloud solutions in Cyprus. Specializing in AWS, Azure, data engineering, trading systems, and custom software development. 10+ years experience.",
  keywords: [
    "IT consulting Cyprus",
    "cloud solutions",
    "AWS consulting",
    "Azure consulting",
    "software development Cyprus",
    "data engineering",
    "trading systems",
    "fintech consulting",
    "digital transformation",
    "Paphos IT company",
  ],
  authors: [{ name: "Artem Firsov", url: "https://quent-tech.com/about" }],
  creator: "Quent Tech Ltd",
  publisher: "Quent Tech Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Quent Tech Ltd | IT Consulting & Cloud Solutions",
    description:
      "Expert IT consulting and cloud solutions. AWS, Azure, data engineering, and custom software development.",
    url: "https://quent-tech.com",
    siteName: "Quent Tech Ltd",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quent Tech Ltd - IT Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quent Tech Ltd | IT Consulting & Cloud Solutions",
    description:
      "Expert IT consulting and cloud solutions. AWS, Azure, data engineering, and custom software development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quent-tech.com",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Quent Tech Ltd",
  image: "https://quent-tech.com/og-image.png",
  "@id": "https://quent-tech.com",
  url: "https://quent-tech.com",
  telephone: "",
  email: "info@quent-tech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tombs of the Kings 81, Glamour Tower, office 7",
    addressLocality: "Paphos",
    postalCode: "8046",
    addressCountry: "CY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.7612,
    longitude: 32.4234,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://www.linkedin.com/company/quent-tech"],
  priceRange: "$$",
  description:
    "Expert IT consulting and cloud solutions company in Cyprus. Specializing in AWS, Azure, data engineering, trading systems, and custom software development.",
  founder: {
    "@type": "Person",
    name: "Artem Firsov",
    jobTitle: "Founder & Principal Consultant",
  },
  foundingDate: "2026-01",
  areaServed: ["Cyprus", "Europe", "Worldwide"],
  serviceType: [
    "IT Consulting",
    "Cloud Solutions",
    "Software Development",
    "Data Engineering",
    "Trading Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
