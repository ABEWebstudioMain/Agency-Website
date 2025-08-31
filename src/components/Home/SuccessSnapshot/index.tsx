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
          <span className="title">SUCCESS SNAPSHOT</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Our Impact in Action
          </h2>
          <p className="text-base text-dark-text">
            Real results from real partnerships. See how we&apos;ve helped businesses transform their operations.
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="relative mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-sm">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredStudies.map((study, index) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="mx-4">
                    <div className="relative overflow-hidden rounded-sm bg-white p-8 shadow-lg dark:bg-[#1D232D] lg:p-12">
                      {/* Background Pattern */}
                      <div className="absolute right-0 top-0 h-32 w-32 opacity-5">
                        <div className="h-full w-full rounded-full bg-gradient-to-br from-primary to-primary/50"></div>
                      </div>
                      
                      {/* Header */}
                      <div className="mb-4 flex items-center space-x-3">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(study.serviceCategory)}`}>
                          {getCategoryIcon(study.serviceCategory)}
                          <span className="ml-2">{study.industry}</span>
                        </span>
                        <span className="rounded-full bg-stroke/20 px-3 py-1 text-sm font-medium text-dark-text dark:bg-white/10">
                          {study.duration}
                        </span>
                        <span className="rounded-full bg-stroke/20 px-3 py-1 text-sm font-medium text-dark-text dark:bg-white/10">
                          {study.teamSize}
                        </span>
                      </div>
                      
                      <h3 className="mb-2 font-heading text-2xl font-bold text-dark dark:text-white lg:text-3xl">
                        {study.title}
                      </h3>
                      <h4 className="mb-4 font-heading text-lg font-medium text-primary">
                        {study.subtitle}
                      </h4>
                      
                      {/* Three-column layout for Challenge/Solution/Impact */}
                      <div className="mb-8 grid gap-6 lg:grid-cols-3">
                        <div className="rounded-sm bg-orange-50 p-4 dark:bg-orange-900/10">
                          <div className="mb-3 flex items-center justify-center text-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current text-orange-600">
                              <path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                              <path d="M8 4v4l3 1.5"/>
                            </svg>
                            <h5 className="font-heading text-sm font-medium text-orange-800 dark:text-orange-200">Challenge</h5>
                          </div>
                          <div className="flex items-center min-h-[60px]">
                            <p className="text-center text-sm text-dark-text leading-relaxed">{study.challengeSnapshot}</p>
                          </div>
                        </div>
                        
                        <div className="rounded-sm bg-blue-50 p-4 dark:bg-blue-900/10">
                          <div className="mb-3 flex items-center justify-center text-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current text-blue-600">
                              <path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                              <path d="M11.354 5.646L7 10l-2.354-2.354.708-.708L7 8.586l3.646-3.647.708.707z"/>
                            </svg>
                            <h5 className="font-heading text-sm font-medium text-blue-800 dark:text-blue-200">Solution</h5>
                          </div>
                          <div className="flex items-center min-h-[60px]">
                            <p className="text-center text-sm text-dark-text leading-relaxed">{study.solutionSnapshot}</p>
                          </div>
                        </div>
                        
                        <div className="rounded-sm bg-green-50 p-4 dark:bg-green-900/10">
                          <div className="mb-3 flex items-center justify-center text-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current text-green-600">
                              <path d="M8 1l3.5 7L19 9.27l-5 4.87 1.18 6.88L8 17.77l-7.18 3.25L2 14.14-3 9.27l7.5-1.23L8 1z"/>
                            </svg>
                            <h5 className="font-heading text-sm font-medium text-green-800 dark:text-green-200">Impact</h5>
                          </div>
                          <div className="flex items-center min-h-[60px]">
                            <p className="text-center text-sm font-medium text-primary leading-relaxed">{study.impactSnapshot}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Metrics Row */}
                      <div className="mb-8 flex flex-wrap justify-center gap-3">
                        <div className="flex items-center justify-center min-h-[40px] rounded-full bg-primary/15 px-4 py-2">
                          <span className="text-center text-sm font-medium text-primary">
                            {study.metrics.primaryMetric}
                          </span>
                        </div>
                        {study.metrics.secondaryMetrics.slice(0, 3).map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="rounded-full bg-stroke/30 px-3 py-1 text-sm font-medium text-dark-text dark:bg-white/10"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/${locale}/case-studies/${study.slug}`}
                          className="group inline-flex items-center rounded-sm bg-primary px-6 py-3 font-heading text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                        >
                          Read the Full Story
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
                          className="inline-flex items-center rounded-sm border-2 border-primary/20 px-6 py-3 font-heading text-base font-medium text-dark transition-all hover:border-primary/40 hover:bg-primary/5 dark:text-white"
                        >
                          Get Similar Results
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center space-x-3">
            {featuredStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
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
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg transition-all hover:bg-white hover:shadow-xl dark:bg-[#1D232D]/90 dark:text-white dark:hover:bg-[#1D232D]"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
            </svg>
          </button>

          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % featuredStudies.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg transition-all hover:bg-white hover:shadow-xl dark:bg-[#1D232D]/90 dark:text-white dark:hover:bg-[#1D232D]"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center lg:mt-20">
          <p className="mb-6 text-base text-dark-text">
            Explore our complete collection of success stories and client transformations.
          </p>
          <Link
            href={`/${locale}/case-studies`}
            className="inline-flex items-center rounded-sm border-2 border-primary/20 px-8 py-3 font-heading text-base font-medium text-dark transition-all hover:border-primary/40 hover:bg-primary/5 dark:text-white"
          >
            View All Case Studies
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