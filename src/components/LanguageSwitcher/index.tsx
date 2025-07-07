"use client";

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { localeNames, localeFlags, type Locale } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = params.locale as Locale;
  const locales = ['en', 'de'];
  
  // Remove current locale from pathname to get the base path
  const basePath = pathname.replace(`/${currentLocale}`, '') || '/';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (locale: string) => {
    router.push(`/${locale}${basePath}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-sm bg-white/10 px-3 py-2 text-sm font-medium text-dark transition-colors hover:bg-white/20 dark:text-white dark:hover:bg-white/10"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          className={`fill-current transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M5.99999 7.5L0.46875 1.96875L1.53124 0.90625L5.99999 5.375L10.4687 0.90625L11.5312 1.96875L5.99999 7.5Z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-sm border border-stroke bg-white py-2 shadow-lg dark:border-[#2E333D] dark:bg-[#1D232D]">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left text-sm transition-colors hover:bg-stroke/50 dark:hover:bg-white/10 ${
                locale === currentLocale
                  ? 'bg-primary/10 text-primary'
                  : 'text-dark dark:text-white'
              }`}
            >
              <span className="text-lg">{localeFlags[locale as Locale]}</span>
              <span>{localeNames[locale as Locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}