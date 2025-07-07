import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle language detection and redirection
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = ['/en', '/de'].every(
    (locale) => !pathname.startsWith(`${locale}/`) && pathname !== locale
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

function getLocale(request: NextRequest): string {
  // Check if locale is stored in cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && ['en', 'de'].includes(localeCookie)) {
    return localeCookie;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();
    
    if (preferredLocale === 'de') {
      return 'de';
    }
  }

  // Default to English
  return 'en';
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|images|.*\\.).*)',
  ],
};