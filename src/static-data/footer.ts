import { FooterLink } from "@/types/footer";

export const footerLinks: FooterLink[] = [
  {
    id: "footer-link-1",
    title: "Home",
    href: "/",
    external: false
  },
  {
    id: "footer-link-2",
    title: "Products",
    href: "/",
    external: false
  },
  {
    id: "footer-link-3",
    title: "Careers",
    href: "/",
    external: false,
    badge: {
      text: "Hiring"
    }
  },
  {
    id: "footer-link-4",
    title: "Pricing",
    href: "/",
    external: false
  }
];

export const footerLinksTwo: FooterLink[] = [
  {
    id: "footer-link-two-1",
    title: "Company",
    href: "/",
    external: false
  },
  {
    id: "footer-link-two-2",
    title: "Press Media",
    href: "/",
    external: false
  },
  {
    id: "footer-link-two-3",
    title: "Our Blog",
    href: "/blog",
    external: false
  },
  {
    id: "footer-link-two-4",
    title: "Account",
    href: "/auth/signin",
    external: false
  }
];