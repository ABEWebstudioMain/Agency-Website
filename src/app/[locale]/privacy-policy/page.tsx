import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Privacy Policy - Data Protection & Privacy | Unit05",
    de: "Datenschutzerklärung - Datenschutz & Privatsphäre | Unit05"
  };

  const descriptions = {
    en: "Privacy policy for Unit05 GmbH. Learn how we collect, use, and protect your personal data in accordance with GDPR and German data protection laws.",
    de: "Datenschutzerklärung für Unit05 GmbH. Erfahren Sie, wie wir Ihre personenbezogenen Daten gemäß DSGVO und deutschem Datenschutzrecht sammeln, verwenden und schützen."
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

export default async function PrivacyPolicyPage(props: Props) {
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
                  Datenschutzerklärung
                </h1>
                <p className="text-lg text-dark-text">
                  Datenschutz- und Privatsphäre-Informationen
                </p>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                  <div className="mb-8">
                    <p className="text-base text-dark-text">
                      Unsere Datenschutzerklärung wurde zuletzt am <strong className="text-dark dark:text-white">05. Januar 2024</strong> aktualisiert. Sie regelt die Datenschutzbestimmungen unserer Website unter <strong className="text-primary">58agents.com</strong> und die von uns bereitgestellten Tools (die "Website\" oder der \"Service").
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Ihr Datenschutz
                    </h2>
                    <p className="text-base text-dark-text leading-relaxed">
                      Unsere Website befolgt alle gesetzlichen Anforderungen zum Schutz Ihrer Privatsphäre. Unsere Datenschutzerklärung ist eine rechtliche Erklärung, die erklärt, wie wir Informationen von Ihnen sammeln können, wie wir Ihre Informationen teilen können und wie Sie unsere Weitergabe Ihrer Informationen einschränken können. Sie werden Begriffe in unserer Datenschutzerklärung sehen, die großgeschrieben sind. Diese Begriffe haben Bedeutungen, wie sie im Abschnitt Definitionen unten beschrieben sind.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Definitionen
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        <strong className="text-dark dark:text-white">Personenbezogene Daten:</strong> Personenbezogene Daten sind Daten über eine lebende Person, die aus diesen Daten (oder aus diesen und anderen Informationen, die sich in unserem Besitz befinden oder wahrscheinlich in unseren Besitz gelangen) identifiziert werden kann.
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">Nutzungsdaten:</strong> Nutzungsdaten sind Daten, die automatisch gesammelt werden, entweder durch die Nutzung des Services oder durch die Service-Infrastruktur selbst (zum Beispiel die Dauer eines Seitenbesuchs).
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">Cookies:</strong> Cookies sind kleine Datenstücke, die auf dem Gerät eines Benutzers gespeichert werden.
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">Datenverantwortlicher:</strong> Datenverantwortlicher bezeichnet eine natürliche oder juristische Person, die (allein oder gemeinsam oder zusammen mit anderen Personen) die Zwecke bestimmt, für die und die Art und Weise, in der personenbezogene Daten verarbeitet werden oder verarbeitet werden sollen. Für die Zwecke dieser Datenschutzerklärung sind wir ein Datenverantwortlicher Ihrer Daten.
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">Datenverarbeiter (oder Dienstleister):</strong> Datenverarbeiter (oder Dienstleister) bezeichnet jede natürliche oder juristische Person, die die Daten im Auftrag des Datenverantwortlichen verarbeitet. Wir können die Dienste verschiedener Dienstleister nutzen, um Ihre Daten effektiver zu verarbeiten.
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">Betroffene Person:</strong> Betroffene Person ist jede lebende Person, die Gegenstand personenbezogener Daten ist.
                      </p>
                      <p>
                        <strong className="text-dark dark:text-white">Nutzer:</strong> Der Nutzer ist die Person, die unseren Service nutzt. Der Nutzer entspricht der betroffenen Person, die Gegenstand personenbezogener Daten ist.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Informationssammlung und -verwendung
                    </h2>
                    <p className="text-base text-dark-text leading-relaxed">
                      Wir sammeln verschiedene Arten von Informationen für verschiedene Zwecke, um unseren Service für Sie bereitzustellen und zu verbessern.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                      Arten der gesammelten Daten
                    </h3>
                    <div className="space-y-6 text-base text-dark-text leading-relaxed">
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                          Personenbezogene Daten
                        </h4>
                        <p>
                          Bei der Nutzung unseres Services können wir Sie bitten, uns bestimmte persönlich identifizierbare Informationen zur Verfügung zu stellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren ("Personenbezogene Daten"). Persönlich identifizierbare Informationen können unter anderem umfassen: E-Mail-Adresse, Name, Adresse, Bundesland, Provinz, PLZ/Postleitzahl, Stadt, Cookies und Nutzungsdaten. Wir können Ihre personenbezogenen Daten verwenden, um Sie mit Newslettern, Marketing- oder Werbematerialien und anderen Informationen zu kontaktieren, die für Sie von Interesse sein könnten. Sie können sich von allen oder einigen dieser Mitteilungen von uns abmelden, indem Sie dem Abmeldelink oder den Anweisungen in jeder E-Mail folgen, die wir senden.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                          Nutzungsdaten
                        </h4>
                        <p>
                          Wir können auch Informationen darüber sammeln, wie der Service aufgerufen und verwendet wird ("Nutzungsdaten"). Diese Nutzungsdaten können Informationen wie die Internet Protocol-Adresse Ihres Computers (z.B. IP-Adresse), Browsertyp, Browserversion, die Seiten unseres Services, die Sie besuchen, die Zeit und das Datum Ihres Besuchs, die auf diesen Seiten verbrachte Zeit, eindeutige Gerätekennungen und andere Diagnosedaten umfassen.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                          Tracking & Cookies-Daten
                        </h4>
                        <p>
                          Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Aktivität auf unserem Service zu verfolgen und bestimmte Informationen zu speichern. Cookies sind Dateien mit einer kleinen Menge von Daten, die eine anonyme eindeutige Kennung enthalten können. Cookies werden von einer Website an Ihren Browser gesendet und auf Ihrem Gerät gespeichert. Tracking-Technologien, die ebenfalls verwendet werden, sind Beacons, Tags und Skripte, um Informationen zu sammeln und zu verfolgen und unseren Service zu verbessern und zu analysieren. Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder anzuzeigen, wann ein Cookie gesendet wird. Wenn Sie jedoch keine Cookies akzeptieren, können Sie möglicherweise einige Teile unseres Services nicht nutzen. Beispiele für Cookies, die wir verwenden: Session-Cookies (wir verwenden diese Cookies, um unseren Service zu betreiben) und Präferenz-Cookies (wir verwenden diese Cookies, um Ihre Präferenzen und verschiedene Einstellungen zu speichern).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Verwendung von Daten
                    </h2>
                    <p className="mb-4 text-base text-dark-text leading-relaxed">
                      Wir verwenden die gesammelten Daten für verschiedene Zwecke:
                    </p>
                    <ul className="space-y-2 text-base text-dark-text">
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um unseren Service bereitzustellen und zu warten
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um Sie über Änderungen an unserem Service zu benachrichtigen
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um Ihnen die Teilnahme an interaktiven Funktionen unseres Services zu ermöglichen, wenn Sie dies wählen
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um Kundensupport zu bieten
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um Analysen oder wertvolle Informationen zu sammeln, damit wir unseren Service verbessern können
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um die Nutzung unseres Services zu überwachen
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um technische Probleme zu erkennen, zu verhindern und zu beheben
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                        Um Ihnen Neuigkeiten, Sonderangebote und allgemeine Informationen über andere Waren, Dienstleistungen und Veranstaltungen zu bieten, die wir anbieten und die denen ähnlich sind, die Sie bereits gekauft oder angefragt haben, es sei denn, Sie haben sich entschieden, solche Informationen nicht zu erhalten
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Aufbewahrung von Daten
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Wir werden Ihre personenbezogenen Daten nur so lange aufbewahren, wie es für die in dieser Datenschutzerklärung dargelegten Zwecke erforderlich ist. Wir werden Ihre personenbezogenen Daten in dem Umfang aufbewahren und verwenden, der erforderlich ist, um unseren rechtlichen Verpflichtungen nachzukommen (zum Beispiel, wenn wir verpflichtet sind, Ihre Daten aufzubewahren, um geltenden Gesetzen zu entsprechen), Streitigkeiten zu lösen und unsere rechtlichen Vereinbarungen und Richtlinien durchzusetzen.
                      </p>
                      <p>
                        Wir werden auch Nutzungsdaten für interne Analysezwecke aufbewahren. Nutzungsdaten werden im Allgemeinen für einen kürzeren Zeitraum aufbewahrt, außer wenn diese Daten verwendet werden, um die Sicherheit zu stärken oder die Funktionalität unseres Services zu verbessern, oder wir sind gesetzlich verpflichtet, diese Daten für längere Zeiträume aufzubewahren.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Übertragung von Daten
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Ihre Informationen, einschließlich personenbezogener Daten, können auf Computer übertragen und dort gespeichert werden, die sich außerhalb Ihres Bundeslandes, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Gerichtsbarkeit befinden, wo die Datenschutzgesetze von denen Ihrer Gerichtsbarkeit abweichen können.
                      </p>
                      <p>
                        Wir werden alle vernünftigerweise erforderlichen Schritte unternehmen, um sicherzustellen, dass Ihre Daten sicher und in Übereinstimmung mit dieser Datenschutzerklärung behandelt werden, und keine Übertragung Ihrer personenbezogenen Daten wird an eine Organisation oder ein Land stattfinden, es sei denn, es gibt angemessene Kontrollen, einschließlich der Sicherheit Ihrer Daten und anderer persönlicher Informationen.
                      </p>
                      <p>
                        Ihre Zustimmung zu dieser Datenschutzerklärung, gefolgt von Ihrer Übermittlung solcher Informationen, stellt Ihre Zustimmung zu dieser Übertragung dar.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Offenlegung von Daten
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                          Geschäftstransaktion
                        </h4>
                        <p>
                          Wenn wir an einer Fusion, Übernahme oder einem Verkauf von Vermögenswerten beteiligt sind, können Ihre personenbezogenen Daten übertragen werden. Wir werden eine Mitteilung bereitstellen, bevor Ihre personenbezogenen Daten übertragen werden und einer anderen Datenschutzerklärung unterliegen.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                          Offenlegung für Strafverfolgung
                        </h4>
                        <p>
                          Unter bestimmten Umständen können wir verpflichtet sein, Ihre personenbezogenen Daten offenzulegen, wenn dies gesetzlich vorgeschrieben ist oder als Antwort auf gültige Anfragen von Behörden (z.B. ein Gericht oder eine Regierungsbehörde).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Sicherheit von Daten
                    </h2>
                    <p className="text-base text-dark-text leading-relaxed">
                      Die Sicherheit Ihrer Daten ist uns wichtig, aber denken Sie daran, dass keine Methode der Übertragung über das Internet oder Methode der elektronischen Speicherung 100% sicher ist. Während wir uns bemühen, kommerziell akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten zu verwenden, können wir deren absolute Sicherheit nicht garantieren.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter der Datenschutz-Grundverordnung (DSGVO)
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Wenn Sie aus dem Europäischen Wirtschaftsraum (EWR) stammen, hängt die Rechtsgrundlage von 58agents für die Sammlung und Verwendung der in dieser Datenschutzerklärung beschriebenen persönlichen Informationen von den personenbezogenen Daten ab, die wir sammeln, und dem spezifischen Kontext, in dem wir sie sammeln.
                      </p>
                      <p>58agents kann Ihre personenbezogenen Daten verarbeiten, weil:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Wir einen Vertrag mit Ihnen erfüllen müssen
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Sie uns die Erlaubnis dazu gegeben haben
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Die Verarbeitung in unserem berechtigten Interesse liegt und nicht durch Ihre Rechte überwogen wird
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Für Zahlungsverarbeitungszwecke
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Ihre Datenschutzrechte unter der Datenschutz-Grundverordnung (DSGVO)
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Wenn Sie ein Einwohner des Europäischen Wirtschaftsraums (EWR) sind, haben Sie bestimmte Datenschutzrechte. 58agents zielt darauf ab, angemessene Schritte zu unternehmen, um Ihnen zu ermöglichen, Ihre personenbezogenen Daten zu korrigieren, zu ändern, zu löschen oder deren Verwendung zu begrenzen.
                      </p>
                      <p>
                        Wenn Sie wissen möchten, welche personenbezogenen Daten wir über Sie haben, und wenn Sie möchten, dass sie aus unseren Systemen entfernt werden, kontaktieren Sie uns bitte.
                      </p>
                      <p>Unter bestimmten Umständen haben Sie die folgenden Datenschutzrechte:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Das Recht auf Zugang, Aktualisierung oder Löschung der Informationen, die wir über Sie haben.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Das Recht auf Berichtigung. Sie haben das Recht, Ihre Informationen berichtigen zu lassen, wenn diese Informationen ungenau oder unvollständig sind.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Das Recht auf Widerspruch. Sie haben das Recht, unserer Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Das Recht auf Einschränkung. Sie haben das Recht zu verlangen, dass wir die Verarbeitung Ihrer persönlichen Informationen einschränken.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Das Recht auf Datenübertragbarkeit. Sie haben das Recht, eine Kopie Ihrer personenbezogenen Daten in einem strukturierten, maschinenlesbaren und häufig verwendeten Format zu erhalten.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Das Recht auf Widerruf der Einwilligung. Sie haben auch das Recht, Ihre Einwilligung jederzeit zu widerrufen, wenn 58agents sich auf Ihre Einwilligung zur Verarbeitung Ihrer persönlichen Informationen stützte.
                        </li>
                      </ul>
                      <p>
                        Bitte beachten Sie, dass wir Sie möglicherweise bitten, Ihre Identität zu überprüfen, bevor wir auf solche Anfragen antworten.
                      </p>
                      <p>
                        Sie haben das Recht, sich bei einer Datenschutzbehörde über unsere Sammlung und Verwendung Ihrer personenbezogenen Daten zu beschweren. Für weitere Informationen wenden Sie sich bitte an Ihre örtliche Datenschutzbehörde im Europäischen Wirtschaftsraum (EWR).
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Dienstleister
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Wir können Drittunternehmen und Einzelpersonen beschäftigen, um unseren Service zu erleichtern ("Dienstleister"), den Service in unserem Namen zu erbringen, servicebezogene Dienstleistungen zu erbringen oder uns bei der Analyse der Nutzung unseres Services zu unterstützen.
                      </p>
                      <p>
                        Diese Dritten haben nur Zugang zu Ihren personenbezogenen Daten, um diese Aufgaben in unserem Namen zu erfüllen, und sind verpflichtet, sie nicht für andere Zwecke offenzulegen oder zu verwenden.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Einwilligung zur Verwendung von Cookies
                    </h2>
                    <div className="space-y-4 text-base text-dark-text leading-relaxed">
                      <p>
                        Damit unsere Website ordnungsgemäß funktioniert, verwenden wir Cookies. Um Ihre gültige Einwilligung zur Verwendung und Speicherung von Cookies in dem Browser zu erhalten, den Sie für den Zugriff auf unsere Website verwenden, und um dies ordnungsgemäß zu dokumentieren, verwenden wir eine Einwilligungsverwaltungsplattform: CookieFirst. Diese Technologie wird von Digital Data Solutions BV, Plantage Middenlaan 42a, 1018 DH, Amsterdam, Niederlande bereitgestellt. Website: <a href="https://cookiefirst.com" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">https://cookiefirst.com</a>, bezeichnet als CookieFirst.
                      </p>
                      <p>
                        Wenn Sie auf unsere Website zugreifen, wird eine Verbindung zu CookieFirsts Server hergestellt, um uns die Möglichkeit zu geben, eine gültige Einwilligung von Ihnen zur Verwendung bestimmter Cookies zu erhalten. CookieFirst speichert dann ein Cookie in Ihrem Browser, um nur die Cookies aktivieren zu können, denen Sie zugestimmt haben, und dies ordnungsgemäß zu dokumentieren. Die verarbeiteten Daten werden gespeichert, bis die vordefinierte Speicherfrist abläuft oder Sie die Löschung der Daten verlangen. Bestimmte gesetzliche Aufbewahrungsfristen können ungeachtet des Vorstehenden gelten.
                      </p>
                      <p>
                        CookieFirst wird verwendet, um die gesetzlich erforderliche Einwilligung zur Verwendung von Cookies zu erhalten. Die Rechtsgrundlage hierfür ist Artikel 6(1)(c) der Datenschutz-Grundverordnung (DSGVO).
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                      Kontaktieren Sie uns
                    </h2>
                    <p className="text-base text-dark-text leading-relaxed">
                      Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte per E-Mail an{" "}
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
                Privacy Policy
              </h1>
              <p className="text-lg text-dark-text">
                Data protection and privacy information
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                <div className="mb-8">
                  <p className="text-base text-dark-text">
                    Our Privacy Policy was last updated on <strong className="text-dark dark:text-white">05. Jan 2024</strong>. It governs the privacy terms of our website, located at <strong className="text-primary">58agents.com</strong>, and the tools we provide you (the "Website\" or the \"Service").
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Your Privacy
                  </h2>
                  <p className="text-base text-dark-text leading-relaxed">
                    Our Website follows all legal requirements to protect your privacy. Our Privacy Policy is a legal statement that explains how we may collect information from you, how we may share your information, and how you can limit our sharing of your information. You will see terms in our Privacy Policy that are capitalized. These terms have meanings as described in the Definitions section below.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Definitions
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      <strong className="text-dark dark:text-white">Personal Data:</strong> Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">Usage Data:</strong> Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">Cookies:</strong> Cookies are small pieces of data stored on a User&apos;s device.
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">Data Controller:</strong> Data Controller means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">Data Processors (or Service Providers):</strong> Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">Data Subject:</strong> Data Subject is any living individual who is the subject of Personal Data.
                    </p>
                    <p>
                      <strong className="text-dark dark:text-white">User:</strong> The User is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Information Collection And Use
                  </h2>
                  <p className="text-base text-dark-text leading-relaxed">
                    We collect several different types of information for various purposes to provide and improve our Service to you.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white">
                    Types of Data Collected
                  </h3>
                  <div className="space-y-6 text-base text-dark-text leading-relaxed">
                    <div>
                      <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                        Personal Data
                      </h4>
                      <p>
                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, Name, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data. We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                        Usage Data
                      </h4>
                      <p>
                        We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                        Tracking & Cookies Data
                      </h4>
                      <p>
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. Examples of Cookies we use: session cookies (we use these cookies to operate our Service) and preference cookies (we use these cookies to remember your preferences and various settings).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Use of Data
                  </h2>
                  <p className="mb-4 text-base text-dark-text leading-relaxed">
                    We use the collected data for various purposes:
                  </p>
                  <ul className="space-y-2 text-base text-dark-text">
                    <li className="flex
  )
}