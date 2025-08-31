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
    <div className="dark:border-[#2E333D] md:border-t">
      <div className="-mx-4 flex flex-wrap py-5 md:py-7">
        <div className="w-full px-4 md:w-1/2 lg:w-2/3">
          <div className="mb-5 flex items-center justify-center space-x-5 border-b pb-5 dark:border-[#2E333D] md:mb-0 md:justify-start md:border-0 md:pb-0">
            <a
              href="#"
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              {locale === 'de' ? 'Deutsch' : 'English'}
            </a>
            <Link
              href={`/${locale}/privacy-policy`}
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              {getLocalizedText('Privacy Policy')}
            </Link>
            <a
              href={`/${locale}/terms-conditions`}
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              {getLocalizedText('Terms & Conditions')}
            </a>
            <a
              href="#"
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              {getLocalizedText('Support')}
            </a>
            <a
              href={`/${locale}/imprint`}
              className="font-heading text-base text-dark-text hover:text-primary"
            >
              {getLocalizedText('Imprint')}
            </a>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div>
            <p className="text-center font-heading text-base text-dark-text lg:text-right">
              © {new Date().getFullYear()} Unit05. {t('common.footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}