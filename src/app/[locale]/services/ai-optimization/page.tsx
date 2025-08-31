import { Metadata } from "next";
import AIOptimizationService from "@/components/Services/AIOptimizationService";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "AI-Powered Process Optimization & Automation | 58Solutions",
    de: "KI-gestützte Prozessoptimierung & Automatisierung | 58Solutions"
  };

  const descriptions = {
    en: "Transform your business with AI-powered process optimization and automation. Automate repetitive tasks, enhance accuracy, and empower your team to focus on high-value work.",
    de: "Transformieren Sie Ihr Unternehmen mit KI-gestützter Prozessoptimierung und Automatisierung. Automatisieren Sie wiederkehrende Aufgaben, verbessern Sie die Genauigkeit und ermöglichen Sie Ihrem Team, sich auf wertvolle Arbeit zu konzentrieren."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "AI automation, process optimization, machine learning, artificial intelligence, business automation, 58Solutions",
  };
}

export default function AIOptimizationPage() {
  return <AIOptimizationService />;
}