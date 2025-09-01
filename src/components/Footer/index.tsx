"use client";

import { footerLinks, footerLinksTwo } from "@/static-data/footer";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import FooterAbout from "./FooterAbout";
import FooterBottom from "./FooterBottom";
import FooterLinkItem from "./FooterLinkItem";

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <footer className="pt-16 sm:pt-20 lg:pt-[100px]">
      <div className="px-4 xl:container">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Company Info - Takes more space on desktop */}
          <div className="lg:col-span-5">
            <FooterAbout />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-2">
            <div className="mb-8 lg:mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t('common.footer.company')}
              </h3>

              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <FooterLinkItem key={link?.id} linkItem={link} />
                ))}
              </ul>
            </div>

            <div className="mb-8 lg:mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t('common.footer.support')}
              </h3>

              <ul className="space-y-3">
                {footerLinksTwo.map((link) => (
                  <FooterLinkItem key={link?.id} linkItem={link} />
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <div className="mb-8 lg:mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t('common.footer.getInTouch')}
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div>
                  <p className="mb-1 font-heading text-sm font-medium text-dark-text lg:text-base">
                    {t('common.footer.phone')}
                  </p>
                  <a
                    href="tel:+4915737262541"
                    className="inline-block min-h-[44px] py-2 font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    +49 157 37262541
                  </a>
                </div>
                <div>
                  <p className="mb-1 font-heading text-sm font-medium text-dark-text lg:text-base">
                    {t('common.footer.email')}
                  </p>
                  <a
                    href="mailto:hey@58agents.com"
                    className="inline-block min-h-[44px] py-2 font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    hey@58agents.com
                  </a>
                </div>
                <div>
                  <p className="mb-2 font-heading text-sm font-medium text-dark-text lg:text-base">
                    {t('common.footer.address')}
                  </p>
                  <div className="font-heading text-sm leading-relaxed text-dark dark:text-white lg:text-base">
                    Unit05 GmbH<br />
                    Kleiner Hirschgraben 8<br />
                    60311 Frankfurt am Main
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={`/${locale}/imprint`}
                    className="inline-block min-h-[44px] py-2 font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    {t('common.footer.imprint')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}