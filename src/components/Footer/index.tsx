"use client";

import { footerLinks, footerLinksTwo } from "@/static-data/footer";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import FooterAbout from "./FooterAbout";
import FooterBottom from "./FooterBottom";
import FooterLinkItem from "./FooterLinkItem";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <footer className="pt-16 sm:pt-20 lg:pt-[100px]">
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-3/12">
            <FooterAbout />
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t('common.footer.company')}
              </h3>

              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <FooterLinkItem key={link?.id} linkItem={link} />
                ))}
              </ul>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t('common.footer.support')}
              </h3>

              <ul className="space-y-4">
                {footerLinksTwo.map((link) => (
                  <FooterLinkItem key={link?.id} linkItem={link} />
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                {t('common.footer.getInTouch')}
              </h3>

              <div className="space-y-7">
                <div>
                  <p className="font-heading text-base text-dark-text">
                    Phone
                  </p>
                  <a
                    href="tel:+496971163636"
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    {" "}
                    +49 69 71 16 36 36{" "}
                  </a>
                </div>
                <div>
                  <p className="font-heading text-base text-dark-text">
                    Email
                  </p>
                  <a
                    href="mailto:hey@58agents.com"
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    {" "}
                    hey@58agents.com{" "}
                  </a>
                </div>
                <div>
                  <p className="font-heading text-base text-dark-text">
                    Address
                  </p>
                  <div className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                    58agents GmbH<br />
                    Kleiner Hirschgraben 8<br />
                    60311 Frankfurt am Main
                  </div>
                </div>
                <div>
                  <a
                    href={`/${locale}/imprint`}
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    Imprint
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-3/12">
            <FooterNewsletter />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}