"use client";

import { CaseStudy } from "@/data/caseStudies";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'custom-software':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200';
      case 'devsecops':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200';
      case 'cloud-migration':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200';
      case 'ai-optimization':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 dark:from-primary/10 dark:to-primary/20">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${getCategoryColor(study.serviceCategory)}`}>
                {study.industry}
              </span>
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-dark dark:bg-[#1D232D]/90 dark:text-white">
                {study.duration}
              </span>
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-dark dark:bg-[#1D232D]/90 dark:text-white">
                {study.teamSize}
              </span>
            </div>
            
            <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-dark sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
              {study.title}
            </h1>
            <h2 className="mb-8 font-heading text-xl font-medium leading-relaxed text-primary sm:text-2xl sm:leading-relaxed">
              {study.subtitle}
            </h2>
          </div>
        </div>
      </section>

      {/* Client & Challenge */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-20">
              <h2 className="mb-10 font-heading text-3xl font-bold leading-tight text-dark dark:text-white lg:text-4xl lg:leading-tight">
                {t('common.caseStudies.detail.clientChallenge')}
              </h2>
              
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="mb-5 font-heading text-xl font-semibold leading-tight text-dark dark:text-white lg:text-2xl">
                    {t('common.caseStudies.detail.clientProfile')}
                  </h3>
                  <p className="text-base leading-relaxed text-dark-text lg:text-lg lg:leading-[1.6]">
                    {study.fullContent.clientProfile}
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-5 font-heading text-xl font-semibold leading-tight text-dark dark:text-white lg:text-2xl">
                    {t('common.caseStudies.detail.theProblem')}
                  </h3>
                  <p className="text-base leading-relaxed text-dark-text lg:text-lg lg:leading-[1.6]">
                    {study.fullContent.problemDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-32 dark:bg-[#1A1D23]">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 font-heading text-3xl font-bold leading-tight text-dark dark:text-white lg:text-4xl lg:leading-tight">
              {t('common.caseStudies.detail.ourSolution')}
            </h2>
            
            <div className="mb-10">
              <h3 className="mb-5 font-heading text-xl font-semibold leading-tight text-dark dark:text-white lg:text-2xl">
                {t('common.caseStudies.detail.ourApproach')}
              </h3>
              <p className="mb-8 text-base leading-[1.6] text-dark-text lg:text-lg lg:leading-[1.6]">
                {study.fullContent.approach}
              </p>
              
              <div className="mb-8">
                <h4 className="mb-4 font-heading text-lg font-semibold leading-tight text-dark dark:text-white">
                  {t('common.caseStudies.detail.keyTechnologies')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {study.fullContent.keyTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/15 px-4 py-2 text-center text-sm font-semibold text-primary dark:bg-primary/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 font-heading text-xl font-semibold leading-tight text-dark dark:text-white lg:text-2xl">
                {t('common.caseStudies.detail.specificActions')}
              </h3>
              <ul className="space-y-3">
                {study.fullContent.specificActions.map((action, index) => (
                  <li key={index} className="flex items-start text-base text-dark-text leading-[1.5]">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 mt-0.5 shrink-0 fill-current text-primary">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="leading-[1.5] lg:text-lg lg:leading-[1.6]">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 font-heading text-3xl font-bold leading-tight text-dark dark:text-white lg:text-4xl lg:leading-tight">
              {t('common.caseStudies.detail.resultsImpact')}
            </h2>
            
            {/* Quantifiable Results */}
            <div className="mb-16">
              <h3 className="mb-8 font-heading text-xl font-semibold leading-tight text-dark dark:text-white lg:text-2xl">
                {t('common.caseStudies.detail.measurableSuccess')}
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
                {study.fullContent.quantifiableResults.map((result, index) => (
                  <div key={index} className="rounded-lg bg-green-50 p-6 dark:bg-green-900/15 lg:p-8">
                    <div className="mb-4">
                      <div className="font-heading text-2xl font-bold text-green-700 dark:text-green-300 lg:text-3xl">
                        {result.metric}
                      </div>
                    </div>
                    <div className="flex items-center min-h-[60px]">
                      <p className="text-base text-dark-text lg:text-lg">
                        {result.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Qualitative Benefits */}
            <div className="mb-16">
              <h3 className="mb-8 font-heading text-xl font-semibold leading-tight text-dark dark:text-white lg:text-2xl">
                {t('common.caseStudies.detail.additionalBenefits')}
              </h3>
              <ul className="space-y-4">
                {study.fullContent.qualitativeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-base leading-[1.6] text-dark-text lg:text-lg lg:leading-[1.6]">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 mt-0.5 shrink-0 fill-current text-primary">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Client Endorsement */}
            {study.fullContent.clientEndorsement && (
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-[#2C3443] lg:p-10">
                <div className="mb-8">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="fill-current text-primary/20"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14c0 3.314 2.686 6 6 6h2v8h8V14c0-3.314-2.686-6-6-6H10zm12 0c-3.314 0-6 2.686-6 6v14h8v-8h2c3.314 0 6-2.686 6-6s-2.686-6-6-6h-4z"/>
                  </svg>
                </div>
                
                <blockquote className="mb-8 text-lg leading-relaxed text-dark-text lg:text-xl lg:leading-relaxed">
                  &quot;{study.fullContent.clientEndorsement.quote}&quot;
                </blockquote>
                
                <div className="text-center">
                  <div className="font-heading text-base font-medium text-dark dark:text-white">
                    {study.fullContent.clientEndorsement.author}
                  </div>
                  <div className="text-sm text-dark-text">
                    {study.fullContent.clientEndorsement.position}
                  </div>
                  <div className="text-sm text-primary">
                    {study.fullContent.clientEndorsement.company}
                  </div>
                </div>
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
            </div>
            
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
                href={`/${locale}/team`}
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
      </section>

      {/* Back Navigation */}
      <section className="border-t py-16 dark:border-[#2E333D]">
        <div className="px-4 xl:container">
          <div className="text-center">
            <Link
              href={`/${locale}/case-studies`}
              className="inline-flex min-h-[44px] items-center rounded-sm bg-gray-100 px-6 py-3 font-heading text-base font-medium text-dark transition-all hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M3.828 7L7.172 3.656L6.515 3L2 7.5L6.515 12L7.172 11.344L3.828 8H14V7H3.828Z" />
              </svg>
              {t('common.caseStudies.backToAll')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}