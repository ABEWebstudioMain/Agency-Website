import { FooterLink } from "@/types/footer";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FooterLinkItem({ linkItem }: { linkItem: FooterLink }) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <li>
      <Link
        href={linkItem?.external ? linkItem.href : `/${locale}${linkItem.href}`}
        target={linkItem?.external ? "_blank" : "_self"}
        className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
      >
        {linkItem?.title}

        {linkItem?.badge && (
          <span className="ml-4 rounded-sm bg-primary px-2 py-1 font-heading text-xs text-white">
            {linkItem?.badge?.text}
          </span>
        )}
      </Link>
    </li>
  );
}
