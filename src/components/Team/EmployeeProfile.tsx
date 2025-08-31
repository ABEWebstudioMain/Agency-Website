"use client";

import { useState } from "react";
import { Employee } from "@/types/employee";
import Image from "next/image";
import Link from "next/link";
import SkillModal from "./SkillModal";
import ServiceModal from "./ServiceModal";

interface EmployeeProfileProps {
  employee: Employee;
}

export default function EmployeeProfile({ employee }: EmployeeProfileProps) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const skill = selectedSkill ? employee.skills.find(s => s.id === selectedSkill) : null;
  const service = selectedService ? employee.services.find(s => s.id === selectedService) : null;

  return (
    <div className="pt-24 md:pt-28 lg:pt-32">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 py-20 dark:from-primary/10 dark:to-primary/20">
        <div className="px-4 xl:container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/3">
              <div className="relative mx-auto mb-8 aspect-square w-full max-w-[300px] overflow-hidden rounded-sm lg:mb-0">
                <Image
                  src={employee.photo}
                  alt={employee.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-2/3">
              <div className="max-w-[600px]">
                <h1 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl md:text-5xl dark:text-white">
                  {employee.name}
                </h1>
                <h2 className="mb-6 font-heading text-xl font-medium text-primary sm:text-2xl">
                  {employee.role}
                </h2>
                <p className="mb-8 text-base text-dark-text lg:text-lg">
                  {employee.summary}
                </p>
                
                {/* Contact Info */}
                <div className="mb-8 space-y-2">
                  {employee.email && (
                    <div className="flex items-center text-dark-text">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 fill-current">
                        <path d="M2.5 5.83333V14.1667C2.5 15.0871 3.24619 15.8333 4.16667 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333ZM4.16667 5.83333H15.8333L10 9.16667L4.16667 5.83333Z" />
                      </svg>
                      <a href={`mailto:${employee.email}`} className="hover:text-primary">
                        {employee.email}
                      </a>
                    </div>
                  )}
                  {employee.location && (
                    <div className="flex items-center text-dark-text">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 fill-current">
                        <path d="M10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 11.25 10 17.5 10 17.5S15 11.25 15 7.5C15 4.73858 12.7614 2.5 10 2.5ZM10 9.16667C9.07953 9.16667 8.33333 8.42047 8.33333 7.5C8.33333 6.57953 9.07953 5.83333 10 5.83333C10.9205 5.83333 11.6667 6.57953 11.6667 7.5C11.6667 8.42047 10.9205 9.16667 10 9.16667Z" />
                      </svg>
                      <span>{employee.location}</span>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                {employee.socialLinks && employee.socialLinks.length > 0 && (
                  <div className="flex space-x-4">
                    {employee.socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                        aria-label={`${employee.name} on ${social.platform}`}
                      >
                        <SocialIcon platform={social.platform} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="px-4 xl:container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
              Technical Skills
            </h2>
            <p className="text-base text-dark-text">
              Click on any skill to learn more about expertise and experience
            </p>
          </div>
          
          <div className="-mx-4 flex flex-wrap">
            {employee.skills.map((skill) => (
              <div key={skill.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <button
                  onClick={() => setSelectedSkill(skill.id)}
                  className="group mb-8 w-full rounded-sm bg-white p-6 text-left shadow-sm transition-all hover:shadow-md dark:bg-[#1D232D]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-heading text-lg font-medium text-dark group-hover:text-primary dark:text-white">
                      {skill.name}
                    </h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      skill.level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-dark-text line-clamp-2">
                    {skill.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-dark-text">
                    <span>{skill.yearsOfExperience} years experience</span>
                    <span className="text-primary group-hover:text-primary/80">
                      Learn more →
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-stroke/5 py-16 sm:py-20 lg:py-[100px] dark:bg-[#1D232D]">
        <div className="px-4 xl:container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
              Professional Experience
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20 md:left-1/2"></div>
            
            {employee.experience.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                {/* Timeline Dot */}
                <div className={`absolute top-6 size-4 rounded-full bg-primary ${index % 2 === 0 ? 'left-6 md:-right-2' : 'left-6 md:-left-2'}`}></div>
                
                <div className="ml-16 rounded-sm bg-white p-6 shadow-sm dark:bg-[#2C3443] md:ml-0">
                  <div className="mb-4">
                    <h3 className="font-heading text-xl font-medium text-dark dark:text-white">
                      {exp.position}
                    </h3>
                    <h4 className="font-heading text-lg text-primary">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-dark-text">
                      {exp.startDate} - {exp.endDate || 'Present'} • {exp.location}
                    </p>
                  </div>
                  
                  <p className="mb-4 text-base text-dark-text">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="mb-2 font-heading text-sm font-medium text-dark dark:text-white">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-dark-text">
                          <span className="mr-2 mt-1.5 size-1.5 rounded-full bg-primary"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="px-4 xl:container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
              Services Offered
            </h2>
            <p className="text-base text-dark-text">
              Professional services and expertise available for your projects
            </p>
          </div>
          
          <div className="-mx-4 flex flex-wrap">
            {employee.services.map((service) => (
              <div key={service.id} className="w-full px-4 lg:w-1/2">
                <button
                  onClick={() => setSelectedService(service.id)}
                  className="group mb-8 w-full rounded-sm bg-white p-8 text-left shadow-sm transition-all hover:shadow-md dark:bg-[#1D232D]"
                >
                  <h3 className="mb-4 font-heading text-xl font-medium text-dark group-hover:text-primary dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mb-6 text-base text-dark-text">
                    {service.description}
                  </p>
                  
                  {service.pricing && (
                    <div className="mb-4 rounded-sm bg-primary/5 p-4 dark:bg-primary/10">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-dark dark:text-white">
                          Pricing Range:
                        </span>
                        <span className="font-heading text-lg font-medium text-primary">
                          {service.pricing.range}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-stroke/50 px-3 py-1 text-xs font-medium text-dark-text"
                        >
                          {tool}
                        </span>
                      ))}
                      {service.tools.length > 3 && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          +{service.tools.length - 3} more
                        </span>
                      )}
                    </div>
                    <span className="text-primary group-hover:text-primary/80">
                      View Details →
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Team */}
      <section className="border-t py-12 dark:border-[#2E333D]">
        <div className="px-4 xl:container">
          <div className="text-center">
            <Link
              href={`/team`}
              className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base text-white hover:bg-primary/90"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M3.828 7L7.172 3.656L6.515 3L2 7.5L6.515 12L7.172 11.344L3.828 8H14V7H3.828Z" />
              </svg>
              Back to Team
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      {skill && (
        <SkillModal
          skill={skill}
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
      
      {service && (
        <ServiceModal
          service={service}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M3.58 1.33C3.58 2.07 3.01 2.67 2.29 2.67C1.57 2.67 1 2.07 1 1.33C1 0.59 1.57 0 2.29 0C3.01 0 3.58 0.59 3.58 1.33ZM3.67 4H1V15H3.67V4ZM8.67 4H6V15H8.67V9.33C8.67 6.67 12 6.33 12 9.33V15H14.67V8.33C14.67 4 10.33 4.33 8.67 6.67V4Z" />
        </svg>
      );
    case 'github':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm5.284 3.203a6.847 6.847 0 011.545 4.297c-.226-.043-2.482-.301-4.766-.138-.049-.114-.098-.229-.154-.343-.145-.295-.301-.589-.463-.876 2.482-1.017 3.612-2.498 3.838-2.94zm-5.284 9.797c-2.482 0-4.766-1.017-6.407-2.729.226-.043 2.482-.301 4.766-.138.049.114.098.229.154.343.145.295.301.589.463.876-2.482 1.017-3.612 2.498-3.838 2.94a6.847 6.847 0 01-1.545-4.297c.226.043 2.482.301 4.766.138.049-.114.098-.229.154-.343.145-.295.301-.589.463-.876-2.482-1.017-3.612-2.498-3.838-2.94z" />
        </svg>
      );
    case 'behance':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M6.5 4.5h-5v7h5c2.5 0 4.5-1 4.5-3.5s-2-3.5-4.5-3.5zm-3.5 2h3c1 0 2 0.5 2 1.5s-1 1.5-2 1.5h-3v-3zm7.5-1h4v1h-4v-1zm0 3h4c0 1.5-1 2.5-2 2.5s-2-1-2-2.5zm2-1.5c1 0 2 0.5 2 1.5h-4c0-1 1-1.5 2-1.5z" />
        </svg>
      );
    default:
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
      );
  }
}