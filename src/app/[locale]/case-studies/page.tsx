import { Metadata } from "next";
import CaseStudiesOverview from "@/components/CaseStudies/CaseStudiesOverview";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Case Studies - Real-World Solutions & Results | 58Solutions",
    de: "Fallstudien - Reale Lösungen & Ergebnisse | 58Solutions"
  };

  const descriptions = {
    en: "Explore our success stories and case studies. See how 58Solutions has helped businesses achieve digital transformation through custom software, DevSecOps, cloud migrations, and AI automation.",
    de: "Entdecken Sie unsere Erfolgsgeschichten und Fallstudien. Sehen Sie, wie 58Solutions Unternehmen bei der digitalen Transformation durch maßgeschneiderte Software, DevSecOps, Cloud-Migrationen und KI-Automatisierung geholfen hat."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "case studies, success stories, digital transformation, custom software, DevSecOps, cloud migration, AI automation, 58Solutions",
  };
}

export default function CaseStudiesPage() {
  return <CaseStudiesOverview />;
}