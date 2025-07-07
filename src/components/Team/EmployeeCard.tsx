import { Employee } from "@/types/employee";
import Image from "next/image";
import Link from "next/link";

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="group mx-auto mb-10 max-w-[370px] text-center">
        <Link href={`/team/${employee.slug}`} className="block">
          <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
            <Image
              src={employee.photo}
              alt={employee.name}
              fill
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Skills Preview */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-wrap justify-center gap-2">
                {employee.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-dark backdrop-blur-sm"
                  >
                    {skill.name}
                  </span>
                ))}
                {employee.skills.length > 3 && (
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    +{employee.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-dark mb-2 text-xl font-medium transition-colors duration-200 group-hover:text-primary sm:text-2xl dark:text-white dark:group-hover:text-primary">
              {employee.name}
            </h3>
            <p className="font-heading text-dark-text mb-3 text-base">
              {employee.role}
            </p>
            <p className="text-sm text-dark-text line-clamp-2">
              {employee.summary}
            </p>
          </div>
        </Link>
        
        {/* Quick Stats */}
        <div className="mt-4 flex justify-center space-x-6 text-sm text-dark-text">
          <div className="text-center">
            <div className="font-medium text-dark dark:text-white">
              {employee.skills.length}
            </div>
            <div>Skills</div>
          </div>
          <div className="text-center">
            <div className="font-medium text-dark dark:text-white">
              {employee.services.length}
            </div>
            <div>Services</div>
          </div>
          <div className="text-center">
            <div className="font-medium text-dark dark:text-white">
              {employee.experience.length}
            </div>
            <div>Roles</div>
          </div>
        </div>
      </div>
    </div>
  );
}