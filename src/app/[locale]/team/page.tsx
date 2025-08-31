import { Metadata } from "next";
import TeamOverview from "@/components/Team/TeamOverview";
import { employees } from "@/data/employees";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Our Team | ${siteName}`,
  description: "Meet our talented team of developers, designers, and engineers at 58Solutions. Discover their expertise and experience in building digital solutions.",
  keywords: "team, developers, designers, engineers, 58Solutions, expertise, experience",
};

export default function TeamPage() {
  return (
    <div className="pt-24 md:pt-28 lg:pt-32">
      <TeamOverview employees={employees} />
    </div>
  );
}