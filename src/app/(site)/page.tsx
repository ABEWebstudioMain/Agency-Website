import About from "@/components/About";
import Brands from "@/components/Brands";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import LocalizedHead from "@/components/SEO/LocalizedHead";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { useTranslation } from "@/lib/i18n";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { integrations } from "../../../integrations.config";

interface HomePageProps {
  locale: string;
  translations: any;
}

export default function Home({ locale, translations }: HomePageProps) {
  const router = useRouter();
  const { t } = useTranslation(locale as any);

  return (
    <>
      <LocalizedHead
        title={t('common.meta.title')}
        description={t('common.meta.description')}
        keywords="58Solutions, software development, SaaS, web applications, digital transformation"
      />
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { getI18nProps } = await import('@/lib/i18n');
  
  return {
    props: {
      ...getI18nProps(locale),
    },
  };
};
