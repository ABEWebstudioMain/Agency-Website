import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Imprint - Legal Information | Unit05",
    de: "Impressum - Rechtliche Informationen | Unit05"
  };

  const descriptions = {
    en: "Legal information and imprint for Unit05 GmbH according to German Telemedia Act (TMG).",
    de: "Rechtliche Informationen und Impressum für Unit05 GmbH gemäß Telemediengesetz (TMG)."
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

export default async function ImprintPage(props: Props) {
  const params = await props.params;
  const locale = params.locale;

  if (locale === 'de') {
    return (
      <div className="pt-24 md:pt-28 lg:pt-32">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="px-4 xl:container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h1 className="mb-6 font-heading text-4xl font-bold text-dark sm:text-5xl dark:text-white">
                  Impressum
                </h1>
                <p className="text-lg text-dark-text">
                  Rechtliche Informationen nach deutschem Recht
                </p>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                  <h2 className="mb-6 font-heading text-2xl font-bold text-dark dark:text-white">
                    Angaben gemäß § 5 TMG
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Unternehmensinformationen
                    </h3>
                    <div className="space-y-2 text-base text-dark-text">
                      <p><strong className="text-dark dark:text-white">58agents GmbH</strong></p>
                      <p>Kleiner Hirschgraben 8</p>
                      <p>60311 Frankfurt am Main</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Kontakt
                    </h3>
                    <div className="space-y-2 text-base text-dark-text">
                      <p>
                        <strong className="text-dark dark:text-white">Telefon:</strong>{" "}
                        <a href="tel:+4915737262541" className="text-primary hover:text-primary/80">
                          +49 157 37262541
                        </a>
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">E-Mail:</strong>{" "}
                        <a href="mailto:hey@58agents.com" className="text-primary hover:text-primary/80">
                          hey@58agents.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Registereintrag
                    </h3>
                    <div className="space-y-2 text-base text-dark-text">
                      <p><strong className="text-dark dark:text-white">Registergericht:</strong> Amtsgericht Frankfurt am Main</p>
                      <p><strong className="text-dark dark:text-white">Registernummer:</strong> HRB 119868</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Umsatzsteuer
                    </h3>
                    <div className="text-base text-dark-text">
                      <p><strong className="text-dark dark:text-white">Umsatzsteuer-Identifikationsnummer nach § 27 a Umsatzsteuergesetz:</strong> DE336494144</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                    </h3>
                    <div className="space-y-2 text-base text-dark-text">
                      <p><strong className="text-dark dark:text-white">Stefan Wellensiek</strong></p>
                      <p>Kleiner Hirschgraben 8</p>
                      <p>60311 Frankfurt am Main</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Streitschlichtung
                    </h3>
                    <div className="text-base text-dark-text">
                      <p>Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Haftung für Inhalte
                    </h3>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                      <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Haftung für Links
                    </h3>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                      </p>
                      <p>
                        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Urheberrecht
                    </h3>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                      </p>
                      <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
}