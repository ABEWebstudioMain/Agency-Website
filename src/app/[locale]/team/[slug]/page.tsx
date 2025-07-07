import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEmployeeBySlug, getAllEmployeeSlugs } from "@/data/employees";
import EmployeeProfile from "@/components/Team/EmployeeProfile";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllEmployeeSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const employee = getEmployeeBySlug(params.slug);
  const siteName = process.env.SITE_NAME;

  if (!employee) {
    return {
      title: "Employee Not Found",
      description: "The requested employee profile could not be found.",
    };
  }

  return {
    title: `${employee.name} - ${employee.role} | ${siteName}`,
    description: employee.summary,
    keywords: `${employee.name}, ${employee.role}, ${employee.skills.map(s => s.name).join(', ')}, 58Solutions`,
    openGraph: {
      title: `${employee.name} - ${employee.role}`,
      description: employee.summary,
      images: [employee.photo],
    },
  };
}

export default async function EmployeePage(props: Props) {
  const params = await props.params;
  const employee = getEmployeeBySlug(params.slug);

  if (!employee) {
    notFound();
  }

  return <EmployeeProfile employee={employee} />;
}