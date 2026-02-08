import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services - Software Development, Cloud & Data Engineering",
  description:
    "Professional IT services: custom software development, AWS/Azure cloud solutions, data engineering, trading systems, and fintech consulting. Enterprise-grade solutions in Cyprus.",
  alternates: {
    canonical: "https://quent-tech.com/services",
  },
};

const services = [
  {
    title: "Custom Software Development",
    description: "We build tailored software solutions that solve real business problems. From web applications and APIs to complex enterprise systems, we deliver production-ready software.",
    features: [
      "Full-stack Web Applications",
      "Backend Services & APIs",
      "Enterprise System Integration",
      "Legacy System Modernization",
      "DevOps & CI/CD Pipelines",
    ],
  },
  {
    title: "Data & Analytics Platforms",
    description: "Modern data infrastructure that turns raw data into actionable insights. We design and build data lakes, warehouses, and analytics platforms at any scale.",
    features: [
      "Data Lake & Lakehouse Architecture",
      "ETL/ELT Pipeline Development",
      "Business Intelligence & Dashboards",
      "Real-time Analytics",
      "Data Governance & Quality",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scalable, secure cloud solutions on AWS, Azure, and GCP. We architect, migrate, and optimize cloud infrastructure with Infrastructure as Code practices.",
    features: [
      "Cloud Architecture & Migration",
      "AWS, Azure, GCP Solutions",
      "Terraform & Pulumi (IaC)",
      "Kubernetes & Containerization",
      "Cost Optimization",
    ],
  },
  {
    title: "Trading & Financial Systems",
    description: "Specialized solutions for capital markets and financial services. From trading platforms to risk analytics, we understand the unique requirements of the financial industry.",
    features: [
      "Trading System Development",
      "Market Data Processing",
      "Risk & Compliance Analytics",
      "Algorithmic Trading Support",
      "Regulatory Reporting Systems",
    ],
  },
  {
    title: "Quantitative & Analytics",
    description: "Quantitative analysis, financial modeling, and advanced analytics. We combine domain expertise with technical skills to build sophisticated analytical solutions.",
    features: [
      "Quantitative Modeling",
      "Financial Analytics",
      "Machine Learning & AI",
      "Statistical Analysis",
      "Performance Attribution",
    ],
  },
  {
    title: "Industrial & Energy Solutions",
    description: "Technology solutions for energy, manufacturing, and industrial sectors. We understand the operational requirements of process industries.",
    features: [
      "Process Data Analytics",
      "IoT & Sensor Data Platforms",
      "Operational Intelligence",
      "Supply Chain Analytics",
      "Sustainability Reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From strategy to implementation - complete technology solutions for your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover-lift"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 text-[#0066cc] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible engagement models to match your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Consulting",
                description: "Strategic advice, architecture reviews, and technical guidance"
              },
              {
                title: "Project Delivery",
                description: "End-to-end project execution with defined scope and deliverables"
              },
              {
                title: "Team Extension",
                description: "Embedded expertise to augment your existing team"
              },
            ].map((model, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-semibold text-[#0066cc] mb-3">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and find the right approach for your needs.
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
