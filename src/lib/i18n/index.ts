import { GetStaticPropsContext } from 'next';
import { i18n, type Locale } from './config';

// Translation data
import enTranslations from './translations/en.json';
import deTranslations from './translations/de.json';

const translations = {
  en: enTranslations,
  de: deTranslations,
};

export function getI18nProps(locale: string = i18n.defaultLocale) {
  const currentLocale = locale as Locale;
  
  return {
    locale: currentLocale,
    translations: translations[currentLocale] || translations[i18n.defaultLocale],
  };
}

export function getStaticPropsWithI18n(context: GetStaticPropsContext) {
  const locale = context.locale || i18n.defaultLocale;
  
  return {
    props: {
      ...getI18nProps(locale),
    },
  };
}

export function useTranslation(locale: Locale = 'en') {
  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (options?.returnObjects && Array.isArray(value)) {
      return value;
    }
    
    return value || key;
  };

  return { t, locale };
}

export * from './config';