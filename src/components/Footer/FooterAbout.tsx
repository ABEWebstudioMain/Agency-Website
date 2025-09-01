"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default function FooterAbout() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <div className="mb-8 lg:mb-20">
      <Link href={`/${locale}`} className="mb-6 inline-block">
        <Image
          src="/images/logo/unit05-logo-white.svg"
          alt="Unit05 Logo"
          width={200}
          height={50}
          className="hidden h-auto w-auto max-w-[200px] dark:block object-contain object-left transition-all duration-200 hover:scale-105 lg:max-w-[240px]"
        />
        <Image
          src="/images/logo/unit05-logo-black.svg"
          alt="Unit05 Logo"
          width={200}
          height={50}
          className="h-auto w-auto max-w-[200px] dark:hidden object-contain object-left transition-all duration-200 hover:scale-105 lg:max-w-[240px]"
        />
      </Link>

      <p className="mb-6 text-sm leading-relaxed text-dark-text lg:mb-10 lg:text-base lg:max-w-[280px]">
        Unit05 - Your strategic partner for digital transformation and innovative software solutions.
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/company/58agents"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="social-link"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-stroke/20 text-dark-text transition-all duration-200 hover:bg-primary hover:text-white dark:bg-white/10 dark:hover:bg-primary"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="fill-current"
          >
            <path d="M3.58 1.33C3.58 2.07 3.01 2.67 2.29 2.67C1.57 2.67 1 2.07 1 1.33C1 0.59 1.57 0 2.29 0C3.01 0 3.58 0.59 3.58 1.33ZM3.67 4H1V15H3.67V4ZM8.67 4H6V15H8.67V9.33C8.67 6.67 12 6.33 12 9.33V15H14.67V8.33C14.67 4 10.33 4.33 8.67 6.67V4Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
