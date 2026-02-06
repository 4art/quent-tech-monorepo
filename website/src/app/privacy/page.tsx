import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Quent Tech Ltd",
  description: "Privacy Policy for Quent Tech Ltd - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8">Last updated: January 2026</p>

            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              Quent Tech Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              quent-tech.com.
            </p>
            <p className="text-gray-600 mb-6">
              Please read this privacy policy carefully. If you do not agree with
              the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Data Controller</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                <strong>Quent Tech Ltd</strong><br />
                Georgiou Griva Digeni 51<br />
                Athineon Building, 1st floor<br />
                8047 Paphos, Cyprus<br />
                Email: info@quent-tech.com
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">3. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3">Personal Data</h3>
            <p className="text-gray-600 mb-4">
              We may collect personally identifiable information that you
              voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Fill out a contact form</li>
              <li>Send us an email</li>
              <li>Request a quote or consultation</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This information may include your name, email address, phone number,
              company name, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we may automatically collect certain
              information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages visited and time spent on pages</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We may use the information we collect for various purposes,
              including to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Protect against fraudulent or illegal activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-600 mb-4">
              If you are from the European Economic Area (EEA), our legal basis
              for collecting and using the personal information described in this
              Privacy Policy depends on the data we collect and the context in
              which we collect it:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Consent:</strong> You have given us permission to process your data</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill a contract with you</li>
              <li><strong>Legitimate Interests:</strong> Processing is in our legitimate interests and not overridden by your rights</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. Cookies are files
              with a small amount of data that may include an anonymous unique
              identifier.
            </p>
            <p className="text-gray-600 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept cookies,
              you may not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We will retain your personal data only for as long as necessary to
              fulfill the purposes for which it was collected, including to
              satisfy any legal, accounting, or reporting requirements. Contact
              form submissions are retained for up to 3 years unless you request
              deletion earlier.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Your Rights (GDPR)</h2>
            <p className="text-gray-600 mb-4">
              If you are a resident of the European Economic Area (EEA), you have
              certain data protection rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Right of Access:</strong> You can request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> You can request that we correct inaccurate data</li>
              <li><strong>Right to Erasure:</strong> You can request that we delete your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> You can request that we restrict processing of your data</li>
              <li><strong>Right to Data Portability:</strong> You can request that we transfer your data to another organization</li>
              <li><strong>Right to Object:</strong> You can object to our processing of your personal data</li>
            </ul>
            <p className="text-gray-600 mb-6">
              To exercise any of these rights, please contact us at
              info@quent-tech.com. We will respond to your request within 30 days.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. However, please note that no
              method of transmission over the internet or method of electronic
              storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mb-4">10. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>

            <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and maintained on servers
              located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may differ.
              We ensure appropriate safeguards are in place for any such transfers.
            </p>

            <h2 className="text-2xl font-bold mb-4">12. Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our website is not intended for children under 16 years of age. We
              do not knowingly collect personally identifiable information from
              children under 16.
            </p>

            <h2 className="text-2xl font-bold mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact
              us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Quent Tech Ltd</strong><br />
                Email:{" "}
                <a href="mailto:info@quent-tech.com" className="text-[#0066cc] hover:underline">
                  info@quent-tech.com
                </a><br />
                Address: Georgiou Griva Digeni 51, Athineon Building, 1st floor,
                8047 Paphos, Cyprus
              </p>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Supervisory Authority</h3>
              <p className="text-gray-600">
                You have the right to lodge a complaint with a supervisory
                authority if you believe that our processing of your personal data
                violates applicable data protection laws. In Cyprus, the relevant
                authority is the Commissioner for Personal Data Protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
