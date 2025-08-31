import { SocialLink, Team } from "@/types/team";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getEmployeeBySlug } from "@/data/employees";

export default function SingleTeam({ team }: { team: Team }) {
  const params = useParams();
  const locale = params.locale as string;

  // Map team members to employee profiles
  const getEmployeeSlugForTeam = (teamId: string) => {
    const slugMap: { [key: string]: string } = {
      "team-member-bilal": "sarah-johnson", // Using existing employee data
      "team-member-dominik": "michael-chen", // Using existing employee data
      "team-member-jeremias": "emily-rodriguez", // Using existing employee data
      "team-member-martin": "sarah-johnson", // Fallback to existing
      "team-member-toyah": "emily-rodriguez" // Fallback to existing
    };
    return slugMap[teamId] || "sarah-johnson";
  };

  const employeeSlug = getEmployeeSlugForTeam(team.id as string);
  const employee = getEmployeeBySlug(employeeSlug);
  const skills = employee ? employee.skills.slice(0, 3).map(skill => skill.name) : ["Expertise", "Innovation", "Excellence"];

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
        <div className="relative">
          <Link href={`/${locale}/team/${employeeSlug}`} className="block">
            <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
              <Image
                src={team?.image}
                alt={team?.name}
                fill
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Skills Preview */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-dark backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-dark mb-1 text-xl font-medium transition-colors duration-200 group-hover:text-primary sm:text-2xl dark:text-white dark:group-hover:text-primary">
                {team?.name}
              </h3>
              <p className="font-heading text-dark-text text-base">
                {team?.designation}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
