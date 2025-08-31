import { Metadata } from "next";
import CustomSoftwareService from "@/components/Services/CustomSoftwareService";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Custom Software Development & Digitalization | Unit05",
    de: "Maßgeschneiderte Softwareentwicklung & Digitalisierung | Unit05"
  };

  const descriptions = {
    en: "Transform your business with custom software development and digitalization solutions. Build scalable, efficient systems that drive growth and competitive advantage.",
    de: "Transformieren Sie Ihr Unternehmen mit maßgeschneiderter Softwareentwicklung und Digitalisierungslösungen. Erstellen Sie skalierbare, effiziente Systeme für Wachstum und Wettbewerbsvorteile."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "custom software development, digitalization, business automation, legacy system modernization, 58Solutions",
  };
}

export default function CustomSoftwarePage() {
  return <CustomSoftwareService />;
}