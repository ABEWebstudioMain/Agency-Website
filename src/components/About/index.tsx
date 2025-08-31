"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import AboutContent from "./AboutContent";

export default function About() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <section id="about" className="pt-16 sm:pt-20 lg:pt-[100px]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">{t('common.about.mainTitle')}</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            {t('common.about.title')}
          </h2>
          <p className="text-base text-dark-text">
            {t('common.about.description')}
          </p>
        </div>

        <AboutContent />
      </div>
    </section>
  );
}