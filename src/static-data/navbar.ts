import { NavbarItem } from "@/types/navbar";

export const navbarData: NavbarItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Features",
    href: "#features",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "About",
    href: "#about",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Portfolio",
    href: "#portfolio",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Pricing",
    href: "#pricing",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Team",
    href: "/team",
    external: false
  },
  {
    id: crypto.randomUUID(),
    title: "Pages",
    submenu: [
      {
        id: crypto.randomUUID(),
        title: "Home",
        href: "/",
        external: false
      },
      {
        id: crypto.randomUUID(),
        title: "Docs",
        href: "/docs",
        external: false
      },
      {
        id: crypto.randomUUID(),
        title: "Support",
        href: "/support",
        external: false
      },
    ]
  }
];
