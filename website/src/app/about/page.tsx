import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - IT Consulting Experts in Cyprus",
  description:
    "Quent Tech Ltd: boutique IT consultancy in Paphos, Cyprus. Founded by Artem Firsov with 10+ years experience in financial services, trading systems, and cloud solutions.",
  alternates: {
    canonical: "https://quent-tech.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Quent Tech</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner for technology consulting and software solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Quent Tech Ltd was founded in 2026 to bring enterprise-grade technology
                  solutions to businesses of all sizes. With 10+ years of experience at
                  leading financial institutions and global enterprises, we understand what
                  it takes to build systems that scale and deliver real business value.
                </p>
              <p>
                  Based in Europe with a global outlook, we deliver end-to-end technology
                  solutions across cloud platforms (AWS, Azure, GCP), data engineering,
                  and custom software development. From trading systems to industrial
                  analytics, we turn complex requirements into production-ready solutions.
                </p>
                <p>
                  We believe in Infrastructure as Code, automated deployments, and
                  building systems that are maintainable, scalable, and cost-efficient.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Company Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Company Name</dt>
                  <dd className="text-lg font-medium">Quent Tech Ltd</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Registration</dt>
                  <dd className="text-lg font-medium">HE 486705 (Cyprus)</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Founded</dt>
                  <dd className="text-lg font-medium">January 2026</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Headquarters</dt>
                  <dd className="text-lg font-medium">Paphos, Cyprus</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description: "We operate with complete transparency and honesty in all our business relationships.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-[#0066cc] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the people behind Quent Tech
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="gradient-bg h-32"></div>
              <div className="px-8 pb-8 -mt-12">
                <Image
                  src="/artem.jpg"
                  alt="Artem Firsov"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto object-cover"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold">Artem Firsov</h3>
                  <p className="text-gray-500 mb-4">Founder & Principal Consultant</p>
                  <p className="text-gray-600">
                    Technology leader with 10+ years of experience across cloud platforms,
                    data engineering, and quantitative systems. Background at leading
                    financial institutions and global enterprises. Certified Derivatives
                    Trader, Fixed Income Expert. Oxford Algorithmic Trading Program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your business with technology? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
