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
import { integrations, messages } from "../../../integrations.config";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `58Solution - Digitale Lösungen für moderne Unternehmen | ${siteName}`,
  description:
    "58Solution ist Ihr Partner für starke Online-Präsenzen – von der Unternehmenswebsite bis zur individuellen Webplattform. Modernes Design, skalierbare Technologie und ein Fokus auf Nutzererlebnis helfen Ihnen, digital durchzustarten.",
};


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
