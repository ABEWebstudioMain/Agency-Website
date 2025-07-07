import Head from 'next/head';
import { useRouter } from 'next/router';
import { i18n, type Locale } from '@/lib/i18n/config';

interface LocalizedHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function LocalizedHead({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  noindex = false,
}: LocalizedHeadProps) {
  const router = useRouter();
  const currentLocale = router.locale as Locale;
  const { asPath } = router;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://58solutions.com';
  const canonicalUrl = `${baseUrl}${currentLocale === i18n.defaultLocale ? '' : `/${currentLocale}`}${asPath}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Language and Locale */}
      <html lang={currentLocale} />
      <meta property="og:locale" content={currentLocale === 'en' ? 'en_US' : 'de_DE'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags */}
      {i18n.locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${baseUrl}${locale === i18n.defaultLocale ? '' : `/${locale}`}${asPath}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${asPath}`}
      />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="58Solutions" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
  );
}