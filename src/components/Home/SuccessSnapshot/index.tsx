"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import { useState, useEffect } from "react";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  serviceCategory: string;
  duration: string;
  teamSize: string;
  challengeSnapshot: string;
  solutionSnapshot: string;
  impactSnapshot: string;
  metrics: {
    primaryMetric: string;
    secondaryMetrics: string[];
  };
  slug: string;
}

interface SuccessSnapshotProps {
  featuredStudies: CaseStudy[];
}

export default function SuccessSnapshot({ featuredStudies }: SuccessSnapshotProps) {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get localized content for case studies
  const getLocalizedStudy = (study: any) => {
    if (locale === 'de' && study.de) {
      return {
        title: study.de.title,
        subtitle: study.de.subtitle,
        industry: study.de.industry,
        challengeSnapshot: study.de.challengeSnapshot,
        solutionSnapshot: study.de.solutionSnapshot,
        impactSnapshot: study.de.impactSnapshot,
        metrics: study.de.metrics,
        duration: study.de.duration,
        teamSize: study.de.teamSize
      };
    }
    return {
      title: study.title,
      subtitle: study.subtitle,
      industry: study.industry,
      challengeSnapshot: study.challengeSnapshot,
      solutionSnapshot: study.solutionSnapshot,
      impactSnapshot: study.impactSnapshot,
      metrics: study.metrics,
      duration: study.duration,
      teamSize: study.teamSize
    };
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredStudies.length]);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'custom-software':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
            <path d="M17 3H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 15V5h14v10H3z"/>
            <path d="M5 7h2v2H5zM9 7h6v1H9zM9 9h4v1H9zM5 11h2v2H5zM9 11h6v1H9zM9 13h3v1H9z"/>
          </svg>
        );
      case 'devsecops':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
            <path d="M10 1l-6 2.25v4.5c0 3.74 2.88 7.23 6 7.88 3.12-.65 6-4.14 6-7.88v-4.5L10 1z"/>
            <path d="M8.5 11l-1.5-1.5 1.06-1.06L8.5 8.94l2.44-2.44L12 7.56 8.5 11z"/>
          </svg>
        );
      case 'cloud-migration':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
            <path d="M16.5 8c-.46 0-.9.07-1.32.18A4.5 4.5 0 009.5 4.5c-.83 0-1.58.23-2.24.62A3.5 3.5 0 004 8.5c0 .17.01.33.04.5A3.5 3.5 0 003.5 15.5h13a2.5 2.5 0 000-5z"/>
          </svg>
        );
      case 'ai-optimization':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
            <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            <path d="M10 6v8l4-2-4-6z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">{t('common.successSnapshot.mainTitle')}</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            {t('common.successSnapshot.title')}
          </h2>
          <p className="text-base text-dark-text">
            {t('common.successSnapshot.description')}
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="overflow-hidden rounded-sm">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredStudies.map((study, index) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="mx-2 sm:mx-4">
                    {(() => {
                      const localizedStudy = getLocalizedStudy(study);
                      return (
                    <div className="relative w-full overflow-hidden rounded-sm bg-white p-4 shadow-lg dark:bg-[#1D232D] sm:p-6 lg:p-8 xl:p-12">
                      {/* Background Pattern */}
                      <div className="absolute right-0 top-0 h-32 w-32 opacity-5">
                        <div className="h-full w-full rounded-full bg-gradient-to-br from-primary to-primary/50"></div>
                      </div>
                      
                      {/* Header */}
                      <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:gap-3">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(study.serviceCategory)}`}>
                          {getCategoryIcon(study.serviceCategory)}
                          <span className="ml-1 sm:ml-2">{localizedStudy.industry}</span>
                        </span>
                        <span className="rounded-full bg-stroke/20 px-2 py-1 text-xs font-medium text-dark-text dark:bg-white/10 sm:px-3 sm:text-sm">
                          {localizedStudy.duration}
                        </span>
                        <span className="rounded-full bg-stroke/20 px-2 py-1 text-xs font-medium text-dark-text dark:bg-white/10 sm:px-3 sm:text-sm">
                          {localizedStudy.teamSize}
                        </span>
                      </div>
                      
                      <h3 className="mb-2 font-heading text-lg font-bold text-dark dark:text-white sm:text-xl lg:text-2xl xl:text-3xl">
                        {localizedStudy.title}
                      </h3>
                      <h4 className="mb-3 font-heading text-base font-medium text-primary sm:mb-4 sm:text-lg">
                        {localizedStudy.subtitle}
                      </h4>
                      
                      {/* Three-column layout for Challenge/Solution/Impact */}
                      <div className="mb-6 grid w-full gap-4 sm:mb-8 sm:gap-6 lg:grid-cols-3">
                        <div className="w-full rounded-sm bg-orange-50 p-3 dark:bg-orange-900/10 sm:p-4">
                          <div className="mb-3 flex items-center justify-center text-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current text-orange-600">
                              <path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                              <path d="M8 4v4l3 1.5"/>
                            </svg>
                            <h5 className="font-heading text-xs font-medium text-orange-800 dark:text-orange-200 sm:text-sm">Challenge</h5>
                          </div>
                          <div className="flex items-center min-h-[50px] sm:min-h-[60px]">
                            <p className="text-center text-xs text-dark-text leading-relaxed sm:text-sm">{localizedStudy.challengeSnapshot}</p>
                          </div>
                        </div>
                        
                        <div className="w-full rounded-sm bg-blue-50 p-3 dark:bg-blue-900/10 sm:p-4">
                          <div className="mb-3 flex items-center justify-center text-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current text-blue-600">
                              <path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                              <path d="M11.354 5.646L7 10l-2.354-2.354.708-.708L7 8.586l3.646-3.647.708.707z"/>
                            </svg>
                            <h5 className="font-heading text-xs font-medium text-blue-800 dark:text-blue-200 sm:text-sm">Solution</h5>
                          </div>
                          <div className="flex items-center min-h-[50px] sm:min-h-[60px]">
                            <p className="text-center text-xs text-dark-text leading-relaxed sm:text-sm">{localizedStudy.solutionSnapshot}</p>
                          </div>
                        </div>
                        
                        <div className="w-full rounded-sm bg-green-50 p-3 dark:bg-green-900/10 sm:p-4">
                          <div className="mb-3 flex items-center justify-center text-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current text-green-600">
                              <path d="M8 1l3.5 7L19 9.27l-5 4.87 1.18 6.88L8 17.77l-7.18 3.25L2 14.14-3 9.27l7.5-1.23L8 1z"/>
                            </svg>
                            <h5 className="font-heading text-xs font-medium text-green-800 dark:text-green-200 sm:text-sm">Impact</h5>
                          </div>
                          <div className="flex items-center min-h-[50px] sm:min-h-[60px]">
                            <p className="text-center text-xs font-medium text-primary leading-relaxed sm:text-sm">{localizedStudy.impactSnapshot}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Metrics Row */}
                      <div className="mb-6 flex w-full flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3">
                        <div className="flex items-center justify-center min-h-[36px] rounded-full bg-primary/15 px-3 py-1 sm:min-h-[40px] sm:px-4 sm:py-2">
                          <span className="text-center text-xs font-medium text-primary sm:text-sm">
                            {localizedStudy.metrics.primaryMetric}
                          </span>
                        </div>
                        {localizedStudy.metrics.secondaryMetrics.slice(0, 3).map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="flex items-center justify-center min-h-[36px] rounded-full bg-green-100 px-2 py-1 dark:bg-green-900/30 sm:min-h-[40px] sm:px-3"
                          >
                            <span className="text-center text-xs font-medium text-green-800 dark:text-green-200 sm:text-sm">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                        <Link
                          href={`/${locale}/case-studies/${study.slug}`}
                          className="group inline-flex min-h-[44px] w-full items-center justify-center rounded-sm bg-primary px-6 py-3 font-heading text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg sm:w-auto sm:text-base"
                        >
                          {t('common.successSnapshot.readFullStory')}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                          >
                            <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                          </svg>
                        </Link>
                        <Link
                          href={`/${locale}#contact`}
                          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border-2 border-primary/20 px-6 py-3 font-heading text-sm font-medium text-dark transition-all hover:border-primary/40 hover:bg-primary/5 dark:text-white sm:w-auto sm:text-base"
                        >
                          {t('common.successSnapshot.getSimilarResults')}
                        </Link>
                      </div>
                    </div>
                      );
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-6 flex justify-center space-x-2 sm:mt-8 sm:space-x-3">
            {featuredStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-stroke hover:bg-primary/50 dark:bg-[#2E333D]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? featuredStudies.length - 1 : currentSlide - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg transition-all hover:bg-white hover:shadow-xl dark:bg-[#1D232D]/90 dark:text-white dark:hover:bg-[#1D232D] sm:left-4 sm:h-12 sm:w-12"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
            </svg>
          </button>

          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % featuredStudies.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg transition-all hover:bg-white hover:shadow-xl dark:bg-[#1D232D]/90 dark:text-white dark:hover:bg-[#1D232D] sm:right-4 sm:h-12 sm:w-12"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center sm:mt-16 lg:mt-20">
          <p className="mb-4 text-sm text-dark-text sm:mb-6 sm:text-base">
            {t('common.successSnapshot.cta.description')}
          </p>
          <Link
            href={`/${locale}/case-studies`}
            className="inline-flex min-h-[44px] items-center rounded-sm border-2 border-primary/20 px-6 py-3 font-heading text-sm font-medium text-dark transition-all hover:border-primary/40 hover:bg-primary/5 dark:text-white sm:px-8 sm:text-base"
          >
            {t('common.successSnapshot.cta.button')}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="ml-2 fill-current"
            >
              <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}