import { NavbarItem } from "@/types/navbar";

export const navbarData: NavbarItem[] = [
  {
    id: "navbar-features",
    title: "Features",
    href: "#features",
    external: false
  },
  {
    id: "navbar-about",
    title: "About",
    href: "#about",
    external: false
  },
  {
    id: "navbar-case-studies",
    title: "Case Studies",
    href: "/case-studies",
    external: false
  },
  {
    id: "navbar-pricing",
    title: "Pricing",
    href: "#pricing",
    external: false
  },
  {
    id: "navbar-team",
    title: "Team",
    href: "/team",
    external: false
  },
  {
    id: "navbar-pages",
    title: "Pages",
    submenu: [
      {
        id: "navbar-pages-home",
        title: "Home",
        href: "/",
        external: false
      },
      {
        id: "navbar-pages-docs",
        title: "Docs",
        href: "/docs",
        external: false
      },
      {
        id: "navbar-pages-support",
        title: "Support",
        href: "/support",
        external: false
      },
    ]
  }
];