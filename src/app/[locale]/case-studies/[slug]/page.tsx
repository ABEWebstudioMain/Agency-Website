import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/caseStudies";
import CaseStudyDetail from "@/components/CaseStudies/CaseStudyDetail";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);
  const siteName = process.env.SITE_NAME;

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} - ${study.subtitle} | ${siteName}`,
    description: study.challengeSnapshot,
    keywords: `case study, ${study.industry}, ${study.serviceCategory}, 58Solutions, success story`,
    openGraph: {
      title: `${study.title} - ${study.subtitle}`,
      description: study.challengeSnapshot,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage(props: Props) {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}