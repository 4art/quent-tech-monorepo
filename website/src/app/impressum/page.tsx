import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Quent Tech Ltd",
  description: "Legal information and company details for Quent Tech Ltd.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold">Impressum</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Company Information</h2>
            <p className="text-gray-600 mb-6">
              Information in accordance with Section 5 TMG (German Telemedia Act)
              and applicable EU regulations.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Company Name</dt>
                  <dd className="text-lg font-medium mt-1">Quent Tech Ltd</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Legal Form</dt>
                  <dd className="text-lg font-medium mt-1">Limited Liability Company (Ltd)</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Registration Number</dt>
                  <dd className="text-lg font-medium mt-1">HE 486705</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Registration Authority</dt>
                  <dd className="text-lg font-medium mt-1">
                    Department of Registrar of Companies and Intellectual Property<br />
                    Ministry of Energy, Commerce and Industry<br />
                    Republic of Cyprus
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Registered Office</dt>
                  <dd className="text-lg font-medium mt-1">
                    Georgiou Griva Digeni 51<br />
                    Athineon Building, 1st floor<br />
                    8047 Paphos<br />
                    Cyprus
                  </dd>
                </div>
              </dl>
            </div>

            <h2 className="text-2xl font-bold mb-4">Represented By</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Director</dt>
                  <dd className="text-lg font-medium mt-1">Artem Firsov</dd>
                </div>
              </dl>
            </div>

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Email</dt>
                  <dd className="text-lg font-medium mt-1">
                    <a href="mailto:info@quent-tech.com" className="text-[#0066cc] hover:underline">
                      info@quent-tech.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 uppercase tracking-wide">Website</dt>
                  <dd className="text-lg font-medium mt-1">
                    <a href="https://www.quent-tech.com" className="text-[#0066cc] hover:underline">
                      www.quent-tech.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <h2 className="text-2xl font-bold mb-4">Responsible for Content</h2>
            <p className="text-gray-600 mb-6">
              According to Section 55 (2) RStV (German Interstate Broadcasting Treaty):
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-lg font-medium">
                Artem Firsov<br />
                Quent Tech Ltd<br />
                Georgiou Griva Digeni 51<br />
                Athineon Building, 1st floor<br />
                8047 Paphos, Cyprus
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>

            <h3 className="text-xl font-semibold mb-3">Liability for Content</h3>
            <p className="text-gray-600 mb-6">
              The contents of our pages have been created with the utmost care.
              However, we cannot guarantee the accuracy, completeness, or
              timeliness of the content. As a service provider, we are responsible
              for our own content on these pages in accordance with general laws.
              However, we are not obligated to monitor transmitted or stored
              third-party information or to investigate circumstances that
              indicate illegal activity.
            </p>

            <h3 className="text-xl font-semibold mb-3">Liability for Links</h3>
            <p className="text-gray-600 mb-6">
              Our website contains links to external websites of third parties,
              over whose content we have no control. Therefore, we cannot assume
              any liability for this third-party content. The respective provider
              or operator of the pages is always responsible for the content of
              the linked pages. The linked pages were checked for possible legal
              violations at the time of linking. Illegal content was not
              recognizable at the time of linking.
            </p>

            <h3 className="text-xl font-semibold mb-3">Copyright</h3>
            <p className="text-gray-600 mb-6">
              The content and works created by the site operators on these pages
              are subject to copyright law. Duplication, processing, distribution,
              or any form of commercialization of such material beyond the scope
              of copyright law requires the prior written consent of its
              respective author or creator.
            </p>

            <h2 className="text-2xl font-bold mb-4">EU Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              The European Commission provides a platform for online dispute
              resolution (OS):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066cc] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
