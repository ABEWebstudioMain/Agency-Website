"use client";

import { useState } from "react";
import { caseStudies, getFeaturedCaseStudies } from "@/data/caseStudies";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import SectionTitle from "@/components/Common/SectionTitle";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyFilters from "./CaseStudyFilters";

export default function CaseStudiesOverview() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const featuredStudies = getFeaturedCaseStudies();

  const categories = [
    { id: 'all', name: t('common.caseStudies.filters.all'), count: caseStudies.length },
    { id: 'custom-software', name: t('common.caseStudies.filters.customSoftware'), count: caseStudies.filter(s => s.serviceCategory === 'custom-software').length },
    { id: 'devsecops', name: t('common.caseStudies.filters.devsecops'), count: caseStudies.filter(s => s.serviceCategory === 'devsecops').length },
    { id: 'cloud-migration', name: t('common.caseStudies.filters.cloudMigration'), count: caseStudies.filter(s => s.serviceCategory === 'cloud-migration').length },
    { id: 'ai-optimization', name: t('common.caseStudies.filters.aiOptimization'), count: caseStudies.filter(s => s.serviceCategory === 'ai-optimization').length }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.serviceCategory === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 dark:from-primary/10 dark:via-dark dark:to-primary/20">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary dark:bg-primary/20">
              {t('common.caseStudies.mainTitle')}
            </div>
            <h1 className="mb-8 font-heading text-4xl font-bold text-dark sm:text-5xl md:text-6xl dark:text-white">
              {t('common.caseStudies.title')}
            </h1>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-dark-text leading-relaxed">
              <p>
                {t('common.caseStudies.description')}
              </p>
              <p>
                {t('common.caseStudies.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies with Filters */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-20 text-center lg:mb-24">
              <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-dark sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight dark:text-white">
                {t('common.caseStudies.browseTitle')}
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-dark-text lg:text-xl lg:leading-relaxed">
                {t('common.caseStudies.browseDescription')}
              </p>
            </div>

            <CaseStudyFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
              {filteredStudies.map((study) => (
                <CaseStudyCard 
                  key={study.id} 
                  study={study} 
                  featured={true}
                />
              ))}
            </div>

            {filteredStudies.length === 0 && (
              <div className="py-24 text-center">
                <h3 className="mb-6 font-heading text-2xl font-medium leading-tight text-dark dark:text-white">
                  {t('common.caseStudies.noResults.title')}
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-dark-text">
                  {t('common.caseStudies.noResults.description')}
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base text-white hover:bg-primary/90"
                >
                  {t('common.caseStudies.noResults.button')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-24 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-10"></div>
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white">
              <span className="tracking-wide">{t('common.caseStudies.mainTitle')}</span>
            </div>
            <h2 className="mb-8 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
              {t('common.caseStudies.cta.title')}
            </h2>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-white/90 leading-relaxed lg:text-xl lg:leading-relaxed">
              <p className="mb-10 text-lg leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
                {t('common.caseStudies.cta.description')}
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <a
                  href={`/${locale}#contact`}
                  className="group inline-flex min-h-[48px] items-center rounded-sm bg-white px-8 py-4 font-heading text-base font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {t('common.caseStudies.cta.consultation')}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                  >
                    <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                  </svg>
                </a>
                <a
                  href={`/${locale}#team`}
                  className="group inline-flex min-h-[48px] items-center rounded-sm border-2 border-white/30 px-8 py-4 font-heading text-base font-medium text-white transition-all hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {t('common.caseStudies.cta.meetExperts')}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                  >
                    <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                  </svg>
                </a>
              </div>
              
              <div className="mt-8 text-sm leading-relaxed text-white/80">
                {t('common.caseStudies.cta.footer')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}