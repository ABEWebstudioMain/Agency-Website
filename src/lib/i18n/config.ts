export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  de: '🇩🇪',
};

export const defaultNS = 'common';
export const cookieName = 'i18next';
export const fallbackLng = 'en';