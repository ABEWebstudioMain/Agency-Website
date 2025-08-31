"use client";

import { useState, useMemo } from "react";
import { Employee } from "@/types/employee";
import { getAllSkills, getAllServices } from "@/data/employees";
import SectionTitle from "@/components/Common/SectionTitle";
import EmployeeCard from "./EmployeeCard";
import TeamFilters from "./TeamFilters";

interface TeamOverviewProps {
  employees: Employee[];
}

export default function TeamOverview({ employees }: TeamOverviewProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const allSkills = getAllSkills();
  const allServices = getAllServices();

  const filteredEmployees = useMemo(() => {
    return employees.filter(employee => {
      const skillMatch = selectedSkills.length === 0 || 
        selectedSkills.some(skill => 
          employee.skills.some(s => s.name === skill)
        );
      
      const serviceMatch = selectedServices.length === 0 || 
        selectedServices.some(service => 
          employee.services.some(s => s.name === service)
        );

      return skillMatch && serviceMatch;
    });
  }, [employees, selectedSkills, selectedServices]);

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const clearFilters = () => {
    setSelectedSkills([]);
    setSelectedServices([]);
  };

  return (
    <section className="pt-16 sm:pt-20 lg:pt-[100px]">
      <div className="px-4 xl:container">
        <SectionTitle
          mainTitle="OUR TEAM"
          title="Meet Our Expert Team Members"
          paragraph="Discover the talented professionals behind Unit05. Each team member brings unique expertise and passion to deliver exceptional digital solutions."
        />

        <TeamFilters
          allSkills={allSkills}
          allServices={allServices}
          selectedSkills={selectedSkills}
          selectedServices={selectedServices}
          onSkillToggle={handleSkillToggle}
          onServiceToggle={handleServiceToggle}
          onClearFilters={clearFilters}
        />

        <div className="mb-12 text-center">
          <p className="text-base text-dark-text">
            Showing {filteredEmployees.length} of {employees.length} team members
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="mb-4 font-heading text-2xl font-medium text-dark dark:text-white">
              No team members found
            </h3>
            <p className="mb-8 text-base text-dark-text">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base text-white hover:bg-primary/90"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}