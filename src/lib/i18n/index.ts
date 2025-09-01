import { useParams } from "next/navigation";

// Define supported locales
export type Locale = 'en' | 'de';

// Translation data structure
interface TranslationData {
  [key: string]: any;
}

// Mock translation data - replace with actual translation files
const translations: Record<Locale, TranslationData> = {
  en: {
    common: {
      hero: {
        rotatingWords: ["Innovation", "Excellence", "Growth", "Success"]
      },
      about: {
        content: {
          section1: {
            title: "Our Story",
            paragraphs: [
              "We are a team of passionate developers and consultants.",
              "Our mission is to deliver exceptional software solutions."
            ],
            highlights: [
              { title: "Expert Team", description: "Skilled professionals" },
              { title: "Quality Focus", description: "High standards" }
            ]
          },
          section2: {
            title: "Our Approach",
            paragraphs: [
              "We believe in collaborative development.",
              "Our process ensures quality and efficiency."
            ],
            pillars: [
              { title: "Innovation", description: "Cutting-edge solutions" },
              { title: "Quality", description: "Excellence in delivery" }
            ]
          },
          section3: {
            title: "Our Vision",
            paragraphs: [
              "We envision a future of seamless technology.",
              "Our goal is to empower businesses through software."
            ],
            services: [
              "Custom Software Development",
              "Cloud Migrations",
              "AI Optimization"
            ],
            quote: "Building the future, one solution at a time."
          }
        }
      },
      services: {
        common: {
          backToServices: "Back to Services"
        }
      },
      servicePillars: {
        pillars: {
          customSoftware: {
            title: "Custom Software Development",
            benefit: "We create custom software solutions.",
            problems: ["Outdated systems", "Lack of scalability", "Integration issues"]
          },
          devsecops: {
            title: "DevSecOps Platforms",
            benefit: "We implement secure development practices.",
            problems: ["Security vulnerabilities", "Slow deployments", "Compliance issues"]
          },
          cloudMigrations: {
            title: "Cloud Migrations",
            benefit: "We help migrate to cloud platforms.",
            problems: ["Legacy infrastructure", "Downtime risks", "Cost concerns"]
          },
          aiOptimization: {
            title: "AI Optimization",
            benefit: "We optimize processes with AI.",
            problems: ["Manual processes", "Data inefficiencies", "Lack of automation"]
          }
        }
      },
      servicePages: {
        customSoftware: {
          hero: {
            badge: "Custom Development",
            title: "Custom Software: Tailored Solutions",
            description1: "We create custom software solutions.",
            description2: "Tailored to your specific needs.",
            cta: "Get Started",
            seeIfYou: "See If You Need This"
          },
          challenges: {
            title: "Common Challenges",
            subtitle: "Issues we help solve",
            items: [
              { title: "Legacy Systems", description: "Outdated technology", impact: "High Impact" },
              { title: "Scalability", description: "Growth limitations", impact: "Medium Impact" }
            ]
          },
          approach: {
            title: "Our Approach",
            subtitle: "How we work",
            steps: [
              { 
                title: "Discovery", 
                description: "Understanding requirements",
                duration: "1-2 weeks",
                deliverables: ["Requirements", "Analysis"]
              }
            ]
          },
          benefits: {
            title: "Benefits",
            subtitle: "What you gain",
            items: [
              { title: "Efficiency", description: "Improved performance", metric: "50% faster" }
            ]
          },
          whyChooseUs: {
            title: "Why Choose Us",
            description1: "We have extensive experience.",
            description2: "Our team delivers quality solutions.",
            description3: "We focus on your success.",
            stats: [
              { value: "100+", label: "Projects" },
              { value: "50+", label: "Clients" }
            ]
          },
          technologies: {
            title: "Technologies",
            subtitle: "Our tech stack"
          },
          cta: {
            badge: "Ready to Start",
            title: "Let's Build Something Great",
            description: "Contact us for a consultation.",
            consultation: "Free Consultation",
            meetExperts: "Meet Our Experts",
            footer: "No commitment required."
          }
        },
        aiOptimization: {
          challenges: {
            items: [
              { title: "Data Quality", description: "Poor data quality", impact: "High" }
            ]
          },
          approach: {
            steps: [
              { 
                title: "Assessment", 
                description: "AI readiness evaluation",
                duration: "1 week",
                deliverables: ["Report"]
              }
            ]
          },
          benefits: {
            items: [
              { title: "Automation", description: "Automated processes", metric: "80% reduction" }
            ]
          },
          whyChooseUs: {
            stats: [
              { value: "95%", label: "Accuracy" }
            ]
          }
        },
        cloudMigrations: {
          challenges: {
            items: [
              { title: "Downtime", description: "Service interruption", impact: "Critical" }
            ]
          },
          approach: {
            steps: [
              { 
                title: "Planning", 
                description: "Migration strategy",
                duration: "2 weeks",
                deliverables: ["Plan"]
              }
            ]
          },
          benefits: {
            items: [
              { title: "Scalability", description: "Better scaling", metric: "10x capacity" }
            ]
          },
          whyChooseUs: {
            stats: [
              { value: "99.9%", label: "Uptime" }
            ]
          }
        },
        devsecops: {
          challenges: {
            items: [
              { title: "Security", description: "Vulnerability risks", impact: "High" }
            ]
          },
          approach: {
            steps: [
              { 
                title: "Security Audit", 
                description: "Comprehensive review",
                duration: "1 week",
                deliverables: ["Audit Report"]
              }
            ]
          },
          benefits: {
            items: [
              { title: "Security", description: "Enhanced protection", metric: "Zero breaches" }
            ]
          },
          whyChooseUs: {
            stats: [
              { value: "100%", label: "Compliance" }
            ]
          }
        }
      }
    }
  },
  de: {
    common: {
      hero: {
        rotatingWords: ["Innovation", "Exzellenz", "Wachstum", "Erfolg"]
      },
      about: {
        content: {
          section1: {
            title: "Unsere Geschichte",
            paragraphs: [
              "Wir sind ein Team leidenschaftlicher Entwickler und Berater.",
              "Unsere Mission ist es, außergewöhnliche Software-Lösungen zu liefern."
            ],
            highlights: [
              { title: "Expertenteam", description: "Qualifizierte Fachkräfte" },
              { title: "Qualitätsfokus", description: "Hohe Standards" }
            ]
          },
          section2: {
            title: "Unser Ansatz",
            paragraphs: [
              "Wir glauben an kollaborative Entwicklung.",
              "Unser Prozess gewährleistet Qualität und Effizienz."
            ],
            pillars: [
              { title: "Innovation", description: "Modernste Lösungen" },
              { title: "Qualität", description: "Exzellenz in der Lieferung" }
            ]
          },
          section3: {
            title: "Unsere Vision",
            paragraphs: [
              "Wir stellen uns eine Zukunft nahtloser Technologie vor.",
              "Unser Ziel ist es, Unternehmen durch Software zu stärken."
            ],
            services: [
              "Individuelle Softwareentwicklung",
              "Cloud-Migrationen",
              "KI-Optimierung"
            ],
            quote: "Die Zukunft bauen, eine Lösung nach der anderen."
          }
        }
      },
      services: {
        common: {
          backToServices: "Zurück zu den Diensten"
        }
      },
      servicePillars: {
        pillars: {
          customSoftware: {
            title: "Individuelle Softwareentwicklung",
            benefit: "Wir erstellen individuelle Software-Lösungen.",
            problems: ["Veraltete Systeme", "Mangelnde Skalierbarkeit", "Integrationsprobleme"]
          },
          devsecops: {
            title: "DevSecOps-Plattformen",
            benefit: "Wir implementieren sichere Entwicklungspraktiken.",
            problems: ["Sicherheitslücken", "Langsame Bereitstellungen", "Compliance-Probleme"]
          },
          cloudMigrations: {
            title: "Cloud-Migrationen",
            benefit: "Wir helfen bei der Migration zu Cloud-Plattformen.",
            problems: ["Legacy-Infrastruktur", "Ausfallzeitrisiken", "Kostenbedenken"]
          },
          aiOptimization: {
            title: "KI-Optimierung",
            benefit: "Wir optimieren Prozesse mit KI.",
            problems: ["Manuelle Prozesse", "Datenineffizienzen", "Fehlende Automatisierung"]
          }
        }
      },
      servicePages: {
        customSoftware: {
          hero: {
            badge: "Individuelle Entwicklung",
            title: "Individuelle Software: Maßgeschneiderte Lösungen",
            description1: "Wir erstellen individuelle Software-Lösungen.",
            description2: "Angepasst an Ihre spezifischen Bedürfnisse.",
            cta: "Loslegen",
            seeIfYou: "Sehen Sie, ob Sie das brauchen"
          },
          challenges: {
            title: "Häufige Herausforderungen",
            subtitle: "Probleme, die wir lösen",
            items: [
              { title: "Legacy-Systeme", description: "Veraltete Technologie", impact: "Hohe Auswirkung" },
              { title: "Skalierbarkeit", description: "Wachstumsbeschränkungen", impact: "Mittlere Auswirkung" }
            ]
          },
          approach: {
            title: "Unser Ansatz",
            subtitle: "Wie wir arbeiten",
            steps: [
              { 
                title: "Entdeckung", 
                description: "Anforderungen verstehen",
                duration: "1-2 Wochen",
                deliverables: ["Anforderungen", "Analyse"]
              }
            ]
          },
          benefits: {
            title: "Vorteile",
            subtitle: "Was Sie gewinnen",
            items: [
              { title: "Effizienz", description: "Verbesserte Leistung", metric: "50% schneller" }
            ]
          },
          whyChooseUs: {
            title: "Warum uns wählen",
            description1: "Wir haben umfangreiche Erfahrung.",
            description2: "Unser Team liefert Qualitätslösungen.",
            description3: "Wir konzentrieren uns auf Ihren Erfolg.",
            stats: [
              { value: "100+", label: "Projekte" },
              { value: "50+", label: "Kunden" }
            ]
          },
          technologies: {
            title: "Technologien",
            subtitle: "Unser Tech-Stack"
          },
          cta: {
            badge: "Bereit zu starten",
            title: "Lassen Sie uns etwas Großartiges bauen",
            description: "Kontaktieren Sie uns für eine Beratung.",
            consultation: "Kostenlose Beratung",
            meetExperts: "Treffen Sie unsere Experten",
            footer: "Keine Verpflichtung erforderlich."
          }
        },
        aiOptimization: {
          challenges: {
            items: [
              { title: "Datenqualität", description: "Schlechte Datenqualität", impact: "Hoch" }
            ]
          },
          approach: {
            steps: [
              { 
                title: "Bewertung", 
                description: "KI-Bereitschaftsbewertung",
                duration: "1 Woche",
                deliverables: ["Bericht"]
              }
            ]
          },
          benefits: {
            items: [
              { title: "Automatisierung", description: "Automatisierte Prozesse", metric: "80% Reduktion" }
            ]
          },
          whyChooseUs: {
            stats: [
              { value: "95%", label: "Genauigkeit" }
            ]
          }
        },
        cloudMigrations: {
          challenges: {
            items: [
              { title: "Ausfallzeit", description: "Service-Unterbrechung", impact: "Kritisch" }
            ]
          },
          approach: {
            steps: [
              { 
                title: "Planung", 
                description: "Migrationsstrategie",
                duration: "2 Wochen",
                deliverables: ["Plan"]
              }
            ]
          },
          benefits: {
            items: [
              { title: "Skalierbarkeit", description: "Bessere Skalierung", metric: "10x Kapazität" }
            ]
          },
          whyChooseUs: {
            stats: [
              { value: "99.9%", label: "Betriebszeit" }
            ]
          }
        },
        devsecops: {
          challenges: {
            items: [
              { title: "Sicherheit", description: "Schwachstellenrisiken", impact: "Hoch" }
            ]
          },
          approach: {
            steps: [
              { 
                title: "Sicherheitsaudit", 
                description: "Umfassende Überprüfung",
                duration: "1 Woche",
                deliverables: ["Audit-Bericht"]
              }
            ]
          },
          benefits: {
            items: [
              { title: "Sicherheit", description: "Verbesserter Schutz", metric: "Null Verstöße" }
            ]
          },
          whyChooseUs: {
            stats: [
              { value: "100%", label: "Compliance" }
            ]
          }
        }
      }
    }
  }
};

// Custom hook for translations
export function useTranslation(locale: Locale) {
  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value;
  };

  return { t };
}