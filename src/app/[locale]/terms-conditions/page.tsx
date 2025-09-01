/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Terms and Conditions - Legal Terms | Unit05",
    de: "Allgemeine Geschäftsbedingungen - Rechtliche Bedingungen | Unit05"
  };

  const descriptions = {
    en: "Terms and conditions for Unit05 GmbH. Legal terms governing our IT consulting and software development services.",
    de: "Allgemeine Geschäftsbedingungen für Unit05 GmbH. Rechtliche Bedingungen für unsere IT-Beratung und Softwareentwicklungsdienstleistungen."
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

export default async function TermsConditionsPage(props: Props) {
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
                  Allgemeine Geschäftsbedingungen
                </h1>
                <p className="text-lg text-dark-text">
                  Allgemeine Geschäftsbedingungen für IT- und Beratungsdienstleistungen
                </p>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                  <div className="mb-8">
                    <p className="text-base text-dark-text leading-relaxed">
                      Wir, die <strong className="text-dark dark:text-white">58agents GmbH</strong> (nachfolgend &quot;58agents&quot; oder &quot;wir&quot;) freuen uns, Sie auf unserer Website begrüßen zu dürfen. 58agents ist ein Beratungs- und IT-Dienstleistungsunternehmen. Diese allgemeinen Geschäftsbedingungen sind die ausschließliche Vertragsgrundlage für alle von 58agents angebotenen und erbrachten IT- und Beratungsdienstleistungen.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Inhaltsverzeichnis
                    </h2>
                    <ol className="space-y-2 text-base text-dark-text">
                      <li>1. Allgemeine Informationen und Geltungsbereich</li>
                      <li>2. Vertragsabschluss und -durchführung</li>
                      <li>3. Vergütung</li>
                      <li>4. Externe und Nebenkosten</li>
                      <li>5. Zahlungsbedingungen</li>
                      <li>6. Leistungsverzögerungen und höhere Gewalt</li>
                      <li>7. Umfangsänderungen</li>
                      <li>8. Kündigung durch den Kunden und Ausfallregelung</li>
                      <li>9. Mitwirkungspflichten des Kunden</li>
                      <li>10. Haftung</li>
                      <li>11. Nutzungsrechte</li>
                      <li>12. Sonstiges</li>
                      <li>13. Schlussbestimmungen</li>
                    </ol>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      1. Allgemeine Informationen und Geltungsbereich
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Diese allgemeinen Geschäftsbedingungen sind die ausschließliche Vertragsgrundlage für alle Dienstleistungen und Beratungen (nachfolgend &quot;Dienstleistungen&quot;), die von 58agents angeboten und erbracht werden. Abweichende Bestimmungen des Kunden gelten nicht, auch wenn diesen von 58agents nicht widersprochen wird.
                      </p>
                      <p>
                        Die Allgemeinen Geschäftsbedingungen gelten auch für alle zukünftigen Vertragsverhältnisse, auch wenn in Ergänzungsverträgen nicht ausdrücklich darauf verwiesen wird. Verweise auf die Gültigkeit gesetzlicher Bestimmungen haben nur klarstellende Bedeutung. Auch ohne eine solche Klarstellung gelten daher die gesetzlichen Bestimmungen, sofern sie in diesen Allgemeinen Geschäftsbedingungen nicht direkt geändert oder ausdrücklich ausgeschlossen werden.
                      </p>
                      <p>
                        Für alle Angebote von 58agents gelten immer diese AGB &ndash; es sei denn, die Gültigkeit dieser AGB wird im Angebot ausdrücklich ausgeschlossen. Individuelle Vereinbarungen im Dienstleistungsvertrag haben immer Vorrang vor den Regelungen dieser AGB.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      2. Vertragsabschluss und -durchführung
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Die Einzelheiten der Geschäftsbeziehung zwischen dem Kunden und 58agents werden in einem schriftlichen Vertrag für die Dienstleistung vereinbart. Dieser Vertrag enthält die Beschreibung der Dienstleistung, die Dauer und den Zeitraum der Dienstleistungserbringung, die geschuldete Vergütung, eventuell anfallende externe und Nebenkosten sowie die Mitwirkungspflichten des Kunden.
                      </p>
                      <p>
                        Der Dienstleistungsvertrag kommt durch ein schriftliches Angebot zur Erbringung von Dienstleistungen an den Kunden und eine schriftliche Annahme dieses Angebots (d.h. per E-Mail oder Brief) zustande. Erfolgt die Annahme des Angebots innerhalb der Bindungsfrist des Angebots, kommt der Dienstleistungsvertrag direkt zustande. Andernfalls ist eine schriftliche Auftragsbestätigung durch 58agents erforderlich.
                      </p>
                      <p>
                        58agents verpflichtet sich, dem Kunden eine zweckmäßige und wirtschaftliche Lösung für das im Dienstleistungsvertrag spezifizierte Projektthema nach den Grundsätzen ordnungsgemäßer Berufspraxis und dem neuesten Stand der Technik gemäß dem individuellen Dienstleistungsvertrag zu liefern. 58agents kann den Kunden auf Bedenken und Verbesserungsmöglichkeiten aufmerksam machen, die sich während der Projektdurchführung im Hinblick auf das Ziel einer optimalen und zweckmäßigen Zielerreichung ergeben.
                      </p>
                      <p>
                        Der Kunde verpflichtet sich, die Tätigkeit von 58agents im erforderlichen Umfang zu unterstützen. Insbesondere wird der Kunde die rechtzeitige Bereitstellung der für die Projektdurchführung notwendigen Ausrüstung, Dokumente und Informationen sicherstellen.
                      </p>
                      <p>
                        58agents ist bezüglich der Art der Ausführung der erteilten Aufträge frei, wird aber die Projektanforderungen angemessen berücksichtigen. 58agents unterliegt keinen Weisungen des Kunden. Technische und projektbezogene Anweisungen bleiben unberührt.
                      </p>
                      <p>
                        58agents wird urheberrechtlich geschützte Werke Dritter, insbesondere Software, nur mit entsprechender Berechtigung bei der Erbringung der beauftragten Dienstleistungen verwenden.
                      </p>
                      <p>
                        58agents organisiert die nach dem Dienstleistungsvertrag geregelten Dienstleistungen selbständig und autonom und bestimmt Art, Reihenfolge und Einteilung der Arbeiten, insbesondere auch die Anzahl der einzusetzenden Mitarbeiter.
                      </p>
                      <p>
                        58agents hat das Recht, für die Ausführung der Aufträge Erfüllungsgehilfen einzusetzen. Der Kunde kann einen Erfüllungsgehilfen nur aus wichtigen Gründen ablehnen. Ein wichtiger Grund liegt insbesondere vor, wenn der Erfüllungsgehilfe nicht über die notwendige fachliche Qualifikation verfügt.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      3. Vergütung
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Die Vergütung erfolgt auf Festpreisbasis oder auf Zeit- und Materialbasis basierend auf der Anzahl der geleisteten Arbeitstage. Die Abrechnung auf Zeit- und Materialbasis ist vereinbart, wenn der Dienstleistungsvertrag nicht ausdrücklich einen Festpreis vorsieht.
                      </p>
                      <p>
                        Die Vergütung basierend auf geleisteten Arbeitstagen basiert auf acht Arbeitsstunden ohne Pausen. Bei der Berechnung der Vergütung auf Basis geleisteter Stunden erfolgt die Abrechnung pro Viertelstunde oder Teil davon.
                      </p>
                      <p>
                        Alle Preise und Gebühren sind in Euro, zuzüglich der gesetzlichen Mehrwertsteuer. Die Preise und Gebühren ergeben sich aus dem gültigen Angebot.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      4. Externe und Nebenkosten
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Soweit dies im Dienstleistungsvertrag nicht ausdrücklich ausgeschlossen ist, kann 58agents zusätzlich zur Vergütung Ersatz für alle mit der Vertragsausführung verbundenen Nebenkosten verlangen. Zu den Nebenkosten gehören Reisekosten wie Reise-, Flug- und Übernachtungskosten sowie Verpflegungskosten und sonstige Reisenebenkosten.
                      </p>
                      <p>
                        Grundsätzlich ist 58agents für die Wahl des Verkehrsmittels und des Übernachtungsortes verantwortlich, wobei Ausgaben mit den maximalen steuerlichen Grenzen zu erstatten sind.
                      </p>
                      <p>
                        Reisezeiten werden zu 50%, an Wochenenden (d.h. Samstag & Sonntag) und Feiertagen zu 100% als Arbeitszeit berechnet.
                      </p>
                      <p>
                        Dienstleistungen und Zusatzkosten können separat in Rechnung gestellt werden.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      5. Zahlungsbedingungen
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Werden die vereinbarten Leistungen in Teilen erbracht, ist eine entsprechende Teilvergütung fällig.
                      </p>
                      <p>
                        Alle Forderungen sind bei Rechnungserhalt fällig. Die gesetzliche Mehrwertsteuer wird in allen Rechnungen gesondert ausgewiesen. Die Vergütung für erbrachte Leistungen ist vom Kunden sofort nach Rechnungsdatum ohne Abzug zu zahlen, sofern keine anderen Zahlungsbedingungen vereinbart wurden. Schecks, Wechsel und andere Zahlungsmittel werden nur erfüllungshalber angenommen und ändern nicht den Fälligkeitstermin, wobei Kosten vom Kunden getragen werden.
                      </p>
                      <p>
                        Der Kunde befindet sich in Verzug, wenn er die Rechnung nicht innerhalb von vierzehn Tagen nach Fälligkeit bezahlt. Für Verzugszinsen gelten die gesetzlichen Regelungen §§286, 288 BGB.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Kontaktieren Sie uns
                    </h2>
                    <p className="text-base text-dark-text leading-relaxed">
                      Wenn Sie Fragen zu diesen Allgemeinen Geschäftsbedingungen haben, kontaktieren Sie uns bitte per E-Mail an{" "}
                      <a href="mailto:hey@58agents.com" className="text-primary hover:text-primary/80">
                        hey@58agents.com
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // English version (existing content)
  return (
    <div className="pt-24 md:pt-28 lg:pt-32">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold text-dark sm:text-5xl dark:text-white">
                Terms and Conditions
              </h1>
              <p className="text-lg text-dark-text">
                General terms and conditions for IT and consulting services
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                <div className="mb-8">
                  <p className="text-base text-dark-text leading-relaxed">
                    We, the <strong className="text-dark dark:text-white">58agents GmbH</strong> (hereinafter "58agents" or "we") are pleased to welcome you to our website. 58agents is a consulting and IT services provider company. These general terms and conditions are the exclusive contractual basis for all IT and consulting services offered and provided by 58agents.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Contents
                  </h2>
                  <ol className="space-y-2 text-base text-dark-text">
                    <li>1. General Information and Scope</li>
                    <li>2. Conclusion and Implementation of the Contract</li>
                    <li>3. Payment</li>
                    <li>4. External and Incidental Costs</li>
                    <li>5. Terms of Payment</li>
                    <li>6. Performance Delays and Force Majeure</li>
                    <li>7. Scope Changes</li>
                    <li>8. Cancellation by the Customer and Failure Regulation</li>
                    <li>9. Obligations of the Customer to Participate</li>
                    <li>10. Liability</li>
                    <li>11. Rights of use</li>
                    <li>12. Miscellaneous</li>
                    <li>13. Final Provisions</li>
                  </ol>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    1. General Information and Scope
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      These general terms and conditions are the exclusive contractual basis for all services and consulting (hereinafter &quot;services&quot;) offered and provided by 58agents. Deviating provisions of the client shall not apply, even if these are not contradicted by 58agents.
                    </p>
                    <p>
                      The General Terms and Conditions of Business also apply to all future contractual relationships, even if this is not expressly referred to in supplementary contracts. References to the validity of legal regulations have only clarifying meaning. Even without such a clarification, the statutory provisions shall therefore apply, unless they are directly amended or expressly excluded in these General Terms and Conditions.
                    </p>
                    <p>
                      For all offers of 58agents these GTC are always valid – unless the validity of these GTC is explicitly excluded in the offer. Individual agreements in the service contract always have priority over the regulations of these GTC.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Contact Us
                  </h2>
                  <p className="text-base text-dark-text leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us by sending us an E-Mail to{" "}
                    <a href="mailto:hey@58agents.com" className="text-primary hover:text-primary/80">
                      hey@58agents.com
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}