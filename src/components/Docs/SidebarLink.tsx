"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const params = useParams();
  const pathUrl = usePathname();
  const locale = params.locale as string;

  return (
    <>
      <li className="block">
        <Link
          href={`/${locale}/docs/${post?.slug}`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathUrl === `/${locale}/docs/${post?.slug}`
              ? "bg-slate-50 text-black dark:bg-white/10 dark:text-white"
              : "bg-white dark:bg-dark dark:text-white "
          }`}
        >
          {post?.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
