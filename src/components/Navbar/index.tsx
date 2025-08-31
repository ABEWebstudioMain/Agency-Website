"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";
import { onScroll } from "@/utils/scrollActive";
import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import GlobalSearchModal from "../GlobalSearch";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const pathUrl = pathname;

  // Dynamic navbar data with translations
  const navbarData = useMemo(() => ([
    {
      id: "#services",
      title: t("common.navigation.services"),
      href: "#services",
      external: false,
      submenu: [
        { id: "/services/custom-software-development", title: t("common.services.customSoftware.title"), href: "/services/custom-software-development", external: false },
        { id: "/services/devsecops-platforms",         title: t("common.services.devsecops.title"),        href: "/services/devsecops-platforms",         external: false },
        { id: "/services/cloud-migrations",            title: t("common.services.cloudMigrations.title"),           href: "/services/cloud-migrations",            external: false },
        { id: "/services/ai-optimization",             title: t("common.services.aiOptimization.title"),            href: "/services/ai-optimization",             external: false },
      ]
    },
    { id: "#about",      title: t("common.navigation.about"), href: "#about",        external: false },
    { id: "/case-studies", title: t("common.navigation.caseStudies"),              href: "/case-studies", external: false },
    { id: "#team",         title: t("common.navigation.team"),                      href: "#team",         external: false },
    { id: "#contact",      title: t("common.navigation.contact"),                   href: "#contact",      external: false },
  ]), [t]);

  const navigationHandler = () => {
    setNavigationOpen(!navigationOpen);
    if (typeof window !== "undefined") {
      document.body.classList.toggle("max-lg:overflow-hidden", !navigationOpen);
    }
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    // Initial check for non-home pages
    handleStickyMenu();
  });

  useEffect(() => {
    if (pathUrl === `/${locale}`) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathUrl, locale]);

  return (
    <>
      <header
        className={`header absolute left-0 top-0 w-full z-50 ${stickyMenu ? "sticky-navbar" : ""}`}
      >
        <div className={`flex w-full items-center justify-between px-5 py-4 lg:px-5 xl:px-10 2xl:px-20 transition-all duration-300 ${!stickyMenu ? "bg-transparent" : ""}`}>
          <div className="flex items-center">
            <div className="relative h-[50px] w-[200px] lg:h-[60px] lg:w-[240px]">
            <Link href="/">
              <Image
                src="/images/logo/unit05-logo-white.svg"
                alt="Unit05 Logo"
                width={240}
                height={60}
                className="hidden dark:block h-full w-full object-contain object-left transition-all duration-200 hover:scale-105"
              />
              <Image
                src="/images/logo/unit05-logo-black.svg"
                alt="Unit05 Logo"
                width={240}
                height={60}
                className="dark:hidden h-full w-full object-contain object-left transition-all duration-200 hover:scale-105"
              />
            </Link>
            </div>
          </div>

          <div
            className={`menu-wrapper dark:bg-dark fixed left-0 top-0 z-40 h-screen w-full justify-center bg-white p-5 lg:visible lg:static lg:flex lg:h-auto lg:flex-1 lg:justify-center lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent ${navigationOpen ? "show" : ""}`}
          >
            <div className="w-full self-center lg:flex lg:justify-center">
              <nav>
                <ul className="navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-x-6 lg:space-y-0 xl:space-x-10">
                  {navbarData.map((item) => (
                    <li
                      key={item?.id}
                      className={`${item?.submenu ? "submenu-item group relative" : ""}`}
                    >
                      {item?.href ? (
                        <Link
                          href={
                            item?.href
                              ? item?.external
                                ? item.href
                                : `/${locale}${item.href}`
                              : "/"
                          }
                          target={item?.external ? "_blank" : ""}
                          onClick={navigationHandler}
                          className={`${pathUrl === item?.href ? "active" : ""} font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white ${item?.href?.startsWith("#") ? "menu-scroll" : ""}`}
                        >
                          {item?.title}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => setDropdownToggler(!dropdownToggler)}
                            className="submenu-taggler font-heading text-dark-text hover:text-primary inline-flex items-center justify-center text-center text-base dark:hover:text-white"
                          >
                            {item?.title}

                            <span className="pl-3">
                              <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                className={`fill-current ${dropdownToggler ? "rotate-180" : ""}`}
                              >
                                <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                              </svg>
                            </span>
                          </button>
                          {item?.submenu && (
                            <ul
                              className={`${dropdownToggler ? "" : "hidden lg:block"} submenu space-y-5 pt-5 transition duration-300 lg:invisible lg:absolute lg:top-[120%] lg:w-[250px] lg:rounded-sm lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#2C3443]`}
                            >
                              {item?.submenu.map((item) => (
                                <li key={item?.id}>
                                  <Link
                                    href={`/${locale}${item?.href}`}
                                    onClick={navigationHandler}
                                    className={`font-heading inline-flex items-center justify-center text-center text-base ${pathUrl === item?.href ? "text-primary dark:text-white" : "text-dark-text hover:text-primary dark:hover:text-white"}`}
                                  >
                                    {item?.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Search and Theme Toggle */}
            <div className="flex items-center justify-end">
             

              <div className="ml-3">
                <LanguageSwitcher />
              </div>

              <div className="relative flex h-9 w-9 items-center justify-center">
                <ThemeToggler />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={navigationHandler}
              className="text-dark-text relative z-50 flex h-9 w-9 items-center justify-center lg:hidden dark:text-white"
            >
              {navigationOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="fill-current"
                >
                  <path d="M14.0002 11.8226L21.6228 4.20001L23.8002 6.37745L16.1776 14L23.8002 21.6226L21.6228 23.8L14.0002 16.1774L6.37763 23.8L4.2002 21.6226L11.8228 14L4.2002 6.37745L6.37763 4.20001L14.0002 11.8226Z" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  className="fill-current"
                >
                  <path d="M2.75 3.66666H19.25V5.49999H2.75V3.66666ZM2.75 10.0833H19.25V11.9167H2.75V10.0833ZM2.75 16.5H19.25V18.3333H2.75V16.5Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <GlobalSearchModal
          searchModalOpen={searchModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      )}
    </>
  );
}