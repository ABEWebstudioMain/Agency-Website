import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Imprint - Legal Information | 58Solutions",
    de: "Impressum - Rechtliche Informationen | 58Solutions"
  };

  const descriptions = {
    en: "Legal information and imprint for 58Solutions GmbH according to German Telemedia Act (TMG).",
    de: "Rechtliche Informationen und Impressum für 58Solutions GmbH gemäß Telemediengesetz (TMG)."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ImprintPage() {
  return (
    <div className="pt-24 md:pt-28 lg:pt-32">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold text-dark sm:text-5xl dark:text-white">
                Imprint
              </h1>
              <p className="text-lg text-dark-text">
                Legal information according to German law
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                <h2 className="mb-6 font-heading text-2xl font-bold text-dark dark:text-white">
                  Information provided according to Sec. 5 German Telemedia Act (TMG)
                </h2>
                
                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Company Information
                  </h3>
                  <div className="space-y-2 text-base text-dark-text">
                    <p><strong className="text-dark dark:text-white">58agents GmbH</strong></p>
                    <p>Kleiner Hirschgraben 8</p>
                    <p>60311 Frankfurt am Main</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Contact
                  </h3>
                  <div className="space-y-2 text-base text-dark-text">
                    <p>
                      <strong className="text-dark dark:text-white">Phone:</strong>{" "}
                      <a href="tel:+496971163636" className="text-primary hover:text-primary/80">
                        +49 69 71 16 36 36
                      </a>
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">Email:</strong>{" "}
                      <a href="mailto:hey@58agents.com" className="text-primary hover:text-primary/80">
                        hey@58agents.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Register entry
                  </h3>
                  <div className="space-y-2 text-base text-dark-text">
                    <p><strong className="text-dark dark:text-white">Registering court:</strong> Amtsgericht Frankfurt am Main</p>
                    <p><strong className="text-dark dark:text-white">Registration number:</strong> HRB 119868</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    VAT
                  </h3>
                  <div className="text-base text-dark-text">
                    <p><strong className="text-dark dark:text-white">VAT Id number according to Sec. 27 a German Value Added Tax Act:</strong> DE336494144</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Responsible for contents acc. to Sec. 55, para. 2 German Federal Broadcasting Agreement (RstV)
                  </h3>
                  <div className="space-y-2 text-base text-dark-text">
                    <p><strong className="text-dark dark:text-white">Stefan Wellensiek</strong></p>
                    <p>Kleiner Hirschgraben 8</p>
                    <p>60311 Frankfurt am Main</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Dispute resolution
                  </h3>
                  <div className="text-base text-dark-text">
                    <p>We do not take part in online dispute resolutions at consumer arbitration boards.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Liability for Contents
                  </h3>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                    </p>
                    <p>
                      Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Liability for Links
                  </h3>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
                    </p>
                    <p>
                      The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Copyright
                  </h3>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.
                    </p>
                    <p>
                      The commercial use of our contents without permission of the originator is prohibited.
                    </p>
                    <p>
                      Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}