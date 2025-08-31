import About from "@/components/About";
import Difference from "@/components/Home/Difference";
import Hero from "@/components/Home/Hero";
import ServicePillars from "@/components/Home/ServicePillars";
import SuccessSnapshot from "@/components/Home/SuccessSnapshot";
import Timeline from "@/components/Home/Timeline";
import TrustSignals from "@/components/Home/TrustSignals";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Unit05 - Digital Solutions for Your Vision, Launch & Growth",
    de: "Unit05 - Digitale Lösungen für Ihre Vision, Markteinführung & Wachstum"
  };

  const descriptions = {
    en: "Unit05 specializes in custom software development, scalable SaaS solutions, and enterprise applications. We deliver cutting-edge web applications and digital transformation strategies that drive measurable business growth.",
    de: "Unit05 spezialisiert sich auf maßgeschneiderte Softwareentwicklung, skalierbare SaaS-Lösungen und Unternehmensanwendungen. Wir liefern modernste Webanwendungen und digitale Transformationsstrategien, die messbares Geschäftswachstum fördern."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "Unit05, software development, SaaS, web applications, digital transformation",
  };
}

export default function Home() {
  const featuredStudies = getFeaturedCaseStudies();

  return (
    <>
      <Hero />
      <Timeline />
      <Difference />
      <ServicePillars />
      <SuccessSnapshot featuredStudies={featuredStudies} />
      <TrustSignals />
      <About />
      <Team />
      <Support />
    </>
  );
}