"use client";

import { CaseStudy } from "@/data/caseStudies";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface CaseStudyCardProps {
  study: CaseStudy;
  featured?: boolean;
  reverse?: boolean;
}

export default function CaseStudyCard({ study, featured = false, reverse = false }: CaseStudyCardProps) {
  const params = useParams();
  const locale = params.locale as string;

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

  if (featured) {
    return (
      <div className="group">
        <div className="rounded-lg bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-[#1D232D] lg:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(study.serviceCategory)}`}>
              {getCategoryIcon(study.serviceCategory)}
              <span className="ml-2">{study.industry}</span>
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">{study.duration}</span>
          </div>
          
          <Link href={`/${locale}/case-studies/${study.slug}`}>
            <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-dark transition-colors group-hover:text-primary dark:text-white lg:text-3xl lg:leading-tight">
              {study.title}
            </h3>
            <h4 className="mb-6 font-heading text-lg font-medium leading-relaxed text-primary lg:text-xl">
              {study.subtitle}
            </h4>
          </Link>
          
          <div className="mb-8 space-y-6">
            <div>
              <h5 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Challenge:</h5>
              <p className="text-base leading-relaxed text-dark-text">{study.challengeSnapshot}</p>
            </div>
            <div>
              <h5 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Solution:</h5>
              <p className="text-base leading-relaxed text-dark-text">{study.solutionSnapshot}</p>
            </div>
            <div>
              <h5 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Impact:</h5>
              <p className="text-base font-semibold leading-relaxed text-primary">{study.impactSnapshot}</p>
            </div>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary dark:bg-primary/25">
              {study.metrics.primaryMetric}
            </span>
            {study.metrics.secondaryMetrics.slice(0, 2).map((metric, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {metric}
              </span>
            ))}
          </div>
          
          <Link
            href={`/${locale}/case-studies/${study.slug}`}
            className="group inline-flex items-center font-heading text-base font-semibold text-primary transition-all hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/30"
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
        </div>
      </div>
    );
  }

  return (
    <div className="group">
      <Link href={`/${locale}/case-studies/${study.slug}`} className="block">
        <div className="h-full rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:bg-[#2C3443] lg:p-8">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(study.serviceCategory)}`}>
              {getCategoryIcon(study.serviceCategory)}
              <span className="ml-2">{study.industry}</span>
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">{study.duration}</span>
          </div>
          
          <h3 className="mb-3 font-heading text-xl font-bold leading-tight text-dark transition-colors group-hover:text-primary dark:text-white lg:text-2xl lg:leading-tight">
            {study.title}
          </h3>
          <h4 className="mb-5 font-heading text-base font-medium leading-relaxed text-primary lg:text-lg">
            {study.subtitle}
          </h4>
          
          <p className="mb-6 text-sm leading-relaxed text-dark-text line-clamp-3 lg:text-base">
            {study.challengeSnapshot}
          </p>
          
          <div className="mb-6 rounded-lg bg-primary/8 p-4 dark:bg-primary/15">
            <div className="flex items-center justify-center min-h-[60px]">
              <p className="text-center text-sm font-medium leading-relaxed text-primary lg:text-base">
                {study.impactSnapshot}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center justify-center min-h-[44px]">
              <span className="rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary dark:bg-primary/25">
                {study.metrics.primaryMetric}
              </span>
            </div>
            <span className="font-medium text-primary transition-colors group-hover:text-primary/80">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}