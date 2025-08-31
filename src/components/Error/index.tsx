"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

export default function Error() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-20 dark:border-[#2E333D] lg:pb-[130px]">
          <div className="relative mx-auto max-w-[550px] pt-6 text-center md:pt-8">
            <span className="title"> ERROR </span>
            <h1 className="mb-8 font-heading text-[100px] font-semibold leading-none text-dark dark:text-white md:text-[170px] md:leading-none">
              404
            </h1>
            <h2 className="mb-5 font-heading text-3xl font-medium text-dark dark:text-white md:text-4xl">
              {t('common.errors.404.title')}
            </h2>
            <p className="mx-auto mb-10 max-w-[515px] text-base text-dark-text">
              {t('common.errors.404.description')}
            </p>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-[14px] text-sm font-semibold text-white"
            >
              {t('common.errors.404.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
