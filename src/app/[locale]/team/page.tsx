import { Metadata } from "next";
import TeamOverview from "@/components/Team/TeamOverview";
import { employees } from "@/data/employees";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Our Team | ${siteName}`,
  description: "Meet our talented team of developers, designers, and engineers at Unit05. Discover their expertise and experience in building digital solutions.",
  keywords: "team, developers, designers, engineers, Unit05, expertise, experience",
};

export default function TeamPage() {
  return (
    <TeamOverview employees={employees} />
  );
}