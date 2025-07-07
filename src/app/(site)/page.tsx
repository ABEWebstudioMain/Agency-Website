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
  title: `58Solutions - Digital Solutions for Your Vision, Launch & Growth | ${siteName}`,
  description:
    "58Solutions specializes in custom software development, scalable SaaS solutions, and enterprise applications. We deliver cutting-edge web applications and digital transformation strategies that drive measurable business growth.",
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
