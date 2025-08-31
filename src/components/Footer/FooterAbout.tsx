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
    <div className="mb-20">
      <Link href={`/${locale}`} className="mb-6 inline-block">
        <img
          src="/images/logo/unit05-logo-white.svg"
          alt="Unit05 Logo"
          className="hidden dark:block h-[60px] w-[240px] object-contain object-left transition-all duration-200 hover:scale-105"
        />
        <img
          src="/images/logo/unit05-logo-black.svg"
          alt="Unit05 Logo"
          className="dark:hidden h-[60px] w-[240px] object-contain object-left transition-all duration-200 hover:scale-105"
        />
      </Link>

      <p className="mb-10 text-base text-dark-text leading-relaxed max-w-[280px]">
        Unit05 - Your strategic partner for digital transformation and innovative software solutions.
      </p>
      <div className="flex items-center space-x-5">
        <a
          href="https://www.linkedin.com/company/58agents"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="social-link"
          className="text-dark-text hover:text-primary dark:hover:text-white"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className="fill-current"
          >
            <path d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
