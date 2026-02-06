import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description: "End-to-end development of tailored software solutions - from concept to production deployment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Data & Analytics",
    description: "Modern data platforms, analytics solutions, and business intelligence that drive decisions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
      </svg>
    ),
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions on AWS, Azure, and GCP. Infrastructure as Code with Terraform and Pulumi.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Quantitative Solutions",
    description: "Trading systems, financial analytics, and quantitative models for capital markets.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const industries = [
  "Financial Services", "Capital Markets", "Energy", "Industrial", "Technology"
];

const technologies = [
  "AWS", "Azure", "GCP", "Cloudflare", "Databricks", "Spark", "Terraform", "Kubernetes", "Python"
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Technology Solutions That Deliver Results
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Boutique IT consultancy with deep expertise in financial services,
              energy, and industrial sectors. We consult, we build, we deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0066cc] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0066cc] transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Industries We Serve</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-100"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From strategic consulting to hands-on development - we deliver complete solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover-lift"
              >
                <div className="text-[#0066cc] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-[#0066cc] font-semibold hover:underline inline-flex items-center gap-2"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Enterprise Expertise, Boutique Approach
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                With years of experience at leading financial institutions and global enterprises,
                we bring the technical depth of large consultancies with the agility and personal
                attention of a specialist firm.
              </p>
              <ul className="space-y-4">
                {[
                  "Deep domain expertise in finance, trading, and industrial sectors",
                  "Full-stack capabilities: from strategy to production systems",
                  "Proven methodologies from enterprise environments",
                  "Direct access to senior expertise on every project",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Credentials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Certified Derivatives Trader</li>
                  <li>Fixed Income Expert</li>
                  <li>Oxford Algorithmic Trading Program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need strategic advice, a development team, or a complete solution -
            we&apos;re here to help.
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
