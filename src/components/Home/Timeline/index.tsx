'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';

export default function Timeline() {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const { t } = useTranslation(locale);

  const timelineSteps = [
    {
      id: 1,
      time: t('common.timeline.steps.week1.time'),
      painPoint: {
        title: t('common.timeline.steps.week1.painPoint.title'),
        description: t('common.timeline.steps.week1.painPoint.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        ),
      },
      solution: {
        title: t('common.timeline.steps.week1.solution.title'),
        description: t('common.timeline.steps.week1.solution.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        ),
      },
    },
    {
      id: 2,
      time: t('common.timeline.steps.month1.time'),
      painPoint: {
        title: t('common.timeline.steps.month1.painPoint.title'),
        description: t('common.timeline.steps.month1.painPoint.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
          </svg>
        ),
      },
      solution: {
        title: t('common.timeline.steps.month1.solution.title'),
        description: t('common.timeline.steps.month1.solution.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        ),
      },
    },
    {
      id: 3,
      time: t('common.timeline.steps.month3.time'),
      painPoint: {
        title: t('common.timeline.steps.month3.painPoint.title'),
        description: t('common.timeline.steps.month3.painPoint.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
          </svg>
        ),
      },
      solution: {
        title: t('common.timeline.steps.month3.solution.title'),
        description: t('common.timeline.steps.month3.solution.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    },
    {
      id: 4,
      time: t('common.timeline.steps.month6.time'),
      painPoint: {
        title: t('common.timeline.steps.month6.painPoint.title'),
        description: t('common.timeline.steps.month6.painPoint.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5H15v6h2zm-11.5-6L10 14h4v8h-2v-6h-1.5l-2.5 2.5V22H6v-6z" />
          </svg>
        ),
      },
      solution: {
        title: t('common.timeline.steps.month6.solution.title'),
        description: t('common.timeline.steps.month6.solution.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        ),
      },
    },
    {
      id: 5,
      time: t('common.timeline.steps.month9.time'),
      painPoint: {
        title: t('common.timeline.steps.month9.painPoint.title'),
        description: t('common.timeline.steps.month9.painPoint.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <path d="M12 6v6l4 2" />
          </svg>
        ),
      },
      solution: {
        title: t('common.timeline.steps.month9.solution.title'),
        description: t('common.timeline.steps.month9.solution.description'),
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
      },
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="title">{t('common.timeline.mainTitle')}</span>
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {t('common.timeline.title')}
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {t('common.timeline.description')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="relative mb-16 md:mb-20">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pain Point */}
                <div className="h-full">
                  <div className="h-full flex flex-col bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-3 mb-4">
                      {step.painPoint.icon}
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.painPoint.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                      {step.painPoint.description}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="h-full">
                  <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-4">
                      {step.solution.icon}
                      <span className="text-sm font-medium text-primary">
                        Unit05 Solution
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                      {step.solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-2xl rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 dark:from-primary/20 dark:to-primary/10">
            <h3 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
              {t('common.timeline.cta.title')}
            </h3>
            <p className="mb-6 text-base text-dark-text leading-relaxed">
              {t('common.timeline.cta.description')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm bg-primary px-8 py-4 font-heading text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              {t('common.timeline.cta.button')}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="ml-2 fill-current"
              >
                <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}