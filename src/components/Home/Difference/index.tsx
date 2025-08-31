"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

export default function Difference() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const values = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-primary">
          <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 34C11.163 36 4 28.837 4 20S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
          <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"/>
          <circle cx="20" cy="20" r="4"/>
        </svg>
      ),
      title: t('common.difference.values.experts.title'),
      description: t('common.difference.values.experts.description')
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-primary">
          <path d="M35 15l-5-5V5c0-1.1-.9-2-2-2H12c-1.1 0-2 .9-2 2v5l-5 5v20c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V15zM12 5h16v5H12V5zm21 28H7V16.41l3-3V35h20V13.41l3 3V33z"/>
          <path d="M15 20h10v2H15zM15 24h10v2H15zM15 28h6v2h-6z"/>
        </svg>
      ),
      title: t('common.difference.values.workflow.title'),
      description: t('common.difference.values.workflow.description')
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-primary">
          <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 34C11.163 36 4 28.837 4 20S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
          <path d="M28 12H12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2zm0 14H12V14h16v12z"/>
          <circle cx="16" cy="18" r="2"/>
          <circle cx="24" cy="22" r="2"/>
          <path d="M14 22h2v2h-2zM22 18h2v2h-2z"/>
        </svg>
      ),
      title: t('common.difference.values.network.title'),
      description: t('common.difference.values.network.description')
    },
    {
      id: 4,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-primary">
          <path d="M20 2L5 7v10c0 8.84 6.16 15.56 15 16 8.84-.44 15-7.16 15-16V7L20 2zm0 2.18L33 9v8c0 7.16-5.16 12.84-13 13-7.84-.16-13-5.84-13-13V9l13-4.82z"/>
          <path d="M16 20l3 3 7-7"/>
        </svg>
      ),
      title: t('common.difference.values.partnership.title'),
      description: t('common.difference.values.partnership.description')
    },
    {
      id: 5,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-primary">
          <path d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 34C11.163 36 4 28.837 4 20S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
          <path d="M20 8v12l8 4.8-1.2 2L18 22V8h2z"/>
        </svg>
      ),
      title: t('common.difference.values.pricing.title'),
      description: t('common.difference.values.pricing.description')
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">{t('common.difference.mainTitle')}</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            {t('common.difference.title')}
          </h2>
          <p className="text-base text-dark-text">
            {t('common.difference.description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {values.map((value) => (
            <div
              key={value.id}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/5 transition-all duration-300 group-hover:bg-primary/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                {value.icon}
              </div>
              <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white lg:text-2xl">
                {value.title}
              </h3>
              <p className="text-base text-dark-text leading-relaxed">
                {value.description}
              </p>
              <div className="mx-auto mt-4 h-1 w-12 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}