import { Metadata } from "next";
import DevSecOpsService from "@/components/Services/DevSecOpsService";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "DevSecOps Platform Solutions | 58Solutions",
    de: "DevSecOps-Plattformlösungen | 58Solutions"
  };

  const descriptions = {
    en: "Accelerate software delivery with secure DevSecOps platforms. Integrate security from the ground up, automate workflows, and build resilient cloud-native architectures.",
    de: "Beschleunigen Sie die Softwarebereitstellung mit sicheren DevSecOps-Plattformen. Integrieren Sie Sicherheit von Grund auf, automatisieren Sie Workflows und erstellen Sie widerstandsfähige Cloud-native Architekturen."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "DevSecOps, CI/CD, Kubernetes, cloud platforms, security automation, software delivery, 58Solutions",
  };
}

export default function DevSecOpsPage() {
  return <DevSecOpsService />;
}