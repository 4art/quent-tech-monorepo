"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.quent-tech.com";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
          honeypot: formData.honeypot,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", company: "", message: "", honeypot: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="gradient-bg text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.contactPage.heroTitle}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t.contactPage.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.contactPage.sendMessage}</h2>

              {status === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{t.contactPage.messageSent}</h3>
                  <p className="text-green-700">{t.contactPage.messageSentText}</p>
                  <button onClick={() => setStatus("idle")} className="mt-4 text-green-600 hover:text-green-800 font-medium">
                    {t.contactPage.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.contactPage.yourName}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required maxLength={100} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all" placeholder={t.contactPage.namePlaceholder} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.contactPage.emailAddress}</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required maxLength={100} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all" placeholder={t.contactPage.emailPlaceholder} />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{t.contactPage.company}</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} maxLength={100} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all" placeholder={t.contactPage.companyPlaceholder} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.contactPage.message}</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} maxLength={5000} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all resize-none" placeholder={t.contactPage.messagePlaceholder} />
                  </div>

                  <button type="submit" disabled={status === "sending"} className="w-full gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "sending" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        {t.contactPage.sending}
                      </span>
                    ) : t.contactPage.sendButton}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    {t.contactPage.privacyNote}{" "}
                    <a href="/privacy" className="text-[#0066cc] hover:underline">{t.contactPage.privacyPolicy}</a>.
                  </p>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">{t.contactPage.getInTouch}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t.contactPage.email}</h3>
                    <a href="mailto:info@quent-tech.com" className="text-[#0066cc] hover:underline">info@quent-tech.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t.contactPage.registeredOffice}</h3>
                    <p className="text-gray-600">Georgiou Griva Digeni 51<br />Athineon Building, 1st floor<br />8047 Paphos, Cyprus</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t.contactPage.workingHours}</h3>
                    <p className="text-gray-600">{t.contactPage.workingHoursText}<br />{t.contactPage.responseTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-4">{t.contactPage.companyInfo}</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">{t.contactPage.companyNameLabel}</dt>
                    <dd className="font-medium">Quent Tech Ltd</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">{t.contactPage.regNumber}</dt>
                    <dd className="font-medium">HE 486705</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">{t.contactPage.country}</dt>
                    <dd className="font-medium">Cyprus</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
