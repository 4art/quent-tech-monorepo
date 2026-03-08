"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="gradient-bg text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.servicesPage.heroTitle}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t.servicesPage.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.servicesPage.services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover-lift">
                <h2 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm">
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.servicesPage.howWeWork}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.servicesPage.howWeWorkSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {t.servicesPage.workModels.map((model, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-semibold text-[#0066cc] mb-3">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.servicesPage.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{t.servicesPage.ctaSubtitle}</p>
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
