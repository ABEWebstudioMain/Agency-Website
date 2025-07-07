import About from "@/components/About";
import Brands from "@/components/Brands";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "58Solutions - Digital Solutions for Your Vision, Launch & Growth",
    de: "58Solutions - Digitale Lösungen für Ihre Vision, Markteinführung & Wachstum"
  };

  const descriptions = {
    en: "58Solutions specializes in custom software development, scalable SaaS solutions, and enterprise applications. We deliver cutting-edge web applications and digital transformation strategies that drive measurable business growth.",
    de: "58Solutions spezialisiert sich auf maßgeschneiderte Softwareentwicklung, skalierbare SaaS-Lösungen und Unternehmensanwendungen. Wir liefern modernste Webanwendungen und digitale Transformationsstrategien, die messbares Geschäftswachstum fördern."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: "58Solutions, software development, SaaS, web applications, digital transformation",
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Team />
      <Portfolio />
      <Testimonials />
      <Brands />
      <Pricing />
      <Support />
      <CallToAction />
    </>
  );
}