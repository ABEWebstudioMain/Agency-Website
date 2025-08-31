import { Metadata } from "next";
import CloudMigrationsService from "@/components/Services/CloudMigrationsService";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Cloud Migrations & Consultation | Unit05",
    de: "Cloud-Migrationen & Beratung | Unit05"
  };

  const descriptions = {
    en: "Expert cloud migration and consultation services. Seamless transitions to AWS, GCP, and Azure with minimal disruption and maximum efficiency.",
    de: "Experten-Cloud-Migration und Beratungsdienstleistungen. Nahtlose Übergänge zu AWS, GCP und Azure mit minimaler Störung und maximaler Effizienz."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "cloud migration, AWS, GCP, Azure, cloud consultation, infrastructure modernization, 58Solutions",
  };
}

export default function CloudMigrationsPage() {
  return <CloudMigrationsService />;
}