"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons = [
  <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
];

const technologies = ["AWS", "Azure", "GCP", "Cloudflare", "Databricks", "Snowflake", "Spark", "Kafka", "Airflow", "SQL", "Terraform", "Kubernetes", "Python"];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{t.home.heroTitle}</h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">{t.home.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-[#0066cc] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                {t.home.startProject}
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0066cc] transition-colors text-center">
                {t.home.hireEngineers}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">{t.home.industriesTitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {t.home.industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-100">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.home.whatWeDo}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.home.whatWeDoSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover-lift">
                <div className="text-[#0066cc] mb-4">{serviceIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-[#0066cc] font-semibold hover:underline inline-flex items-center gap-2">
              {t.home.viewAllServices}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Augmentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.home.scaleTeamTitle}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.home.scaleTeamSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.home.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">{t.home.availableRoles}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.home.roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#0066cc] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700">{role}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
                {t.home.hireEngineers}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.home.expertiseTitle}</h2>
              <p className="text-gray-600 text-lg mb-6">{t.home.expertiseSubtitle}</p>
              <ul className="space-y-4">
                {t.home.expertisePoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
                  {t.home.learnMore}
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">{t.home.technologies}</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.home.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{t.home.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block text-lg">
              {t.home.startProject}
            </Link>
            <Link href="/contact" className="border-2 border-[#0066cc] text-[#0066cc] px-8 py-4 rounded-lg font-semibold hover:bg-[#0066cc] hover:text-white transition-colors inline-block text-lg">
              {t.home.hireEngineers}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
