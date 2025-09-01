"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function FooterBottom() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const getLocalizedText = (key: string) => {
    const translations = {
      en: {
        'Privacy Policy': 'Privacy Policy',
        'Terms & Conditions': 'Terms & Conditions',
        'Support': 'Support',
        'Imprint': 'Imprint'
      },
      de: {
        'Privacy Policy': 'Datenschutzerklärung',
        'Terms & Conditions': 'AGB',
        'Support': 'Support',
        'Imprint': 'Impressum'
      }
    };
    return translations[locale as keyof typeof translations]?.[key as keyof typeof translations['en']] || key;
  };

  return (
    <div className="border-t pt-8 dark:border-[#2E333D]">
      <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        {/* Legal Links */}
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <a
              href="#"
              className="inline-block min-h-[44px] py-2 font-heading text-sm text-dark-text hover:text-primary transition-colors duration-200 lg:text-base"
            >
              {locale === 'de' ? 'Deutsch' : 'English'}
            </a>
            <Link
              href={`/${locale}/privacy-policy`}
              className="inline-block min-h-[44px] py-2 font-heading text-sm text-dark-text hover:text-primary transition-colors duration-200 lg:text-base"
            >
              {getLocalizedText('Privacy Policy')}
            </Link>
            <a
              href={`/${locale}/terms-conditions`}
              className="inline-block min-h-[44px] py-2 font-heading text-sm text-dark-text hover:text-primary transition-colors duration-200 lg:text-base"
            >
              {getLocalizedText('Terms & Conditions')}
            </a>
            <a
              href="#"
              className="inline-block min-h-[44px] py-2 font-heading text-sm text-dark-text hover:text-primary transition-colors duration-200 lg:text-base"
            >
              {getLocalizedText('Support')}
            </a>
            <a
              href={`/${locale}/imprint`}
              className="inline-block min-h-[44px] py-2 font-heading text-sm text-dark-text hover:text-primary transition-colors duration-200 lg:text-base"
            >
              {getLocalizedText('Imprint')}
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="order-1 lg:order-2">
          <p className="text-center font-heading text-sm text-dark-text lg:text-right lg:text-base">
            © {new Date().getFullYear()} Unit05. {t('common.footer.copyright')}
          </p>
        </div>
      </div>
    </div>
  );
}