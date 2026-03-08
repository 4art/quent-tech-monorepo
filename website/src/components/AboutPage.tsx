"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const valueIcons = [
  <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="gradient-bg text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.aboutPage.heroTitle}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t.aboutPage.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.aboutPage.ourStory}</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                {t.aboutPage.storyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">{t.aboutPage.companyDetails}</h3>
              <dl className="space-y-4">
                {[
                  ["Company Name", t.aboutPage.companyName],
                  ["Registration", t.aboutPage.registration],
                  ["Founded", t.aboutPage.founded],
                  ["Headquarters", t.aboutPage.headquarters],
                ].map(([label, value], i) => (
                  <div key={i}>
                    <dt className="text-sm text-gray-500 uppercase tracking-wide">{label}</dt>
                    <dd className="text-lg font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.aboutPage.ourValues}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.aboutPage.ourValuesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.aboutPage.values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-[#0066cc] mb-4">{valueIcons[i]}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.aboutPage.leadership}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.aboutPage.leadershipSubtitle}</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="gradient-bg h-32"></div>
              <div className="px-8 pb-8 -mt-12">
                <Image src="/artem.jpg" alt={t.aboutPage.founderName} width={96} height={96} className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto object-cover" />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold">{t.aboutPage.founderName}</h3>
                  <p className="text-gray-500 mb-4">{t.aboutPage.founderTitle}</p>
                  <p className="text-gray-600 mb-4">{t.aboutPage.founderBio}</p>
                  <div className="bg-gray-50 rounded-lg p-4 text-left">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{t.aboutPage.credentials}</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {t.aboutPage.credentialsList.map((c, i) => <li key={i}>• {c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.aboutPage.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{t.aboutPage.ctaSubtitle}</p>
          <Link href="/contact" className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block text-lg">
            {t.aboutPage.getInTouch}
          </Link>
        </div>
      </section>
    </>
  );
}
