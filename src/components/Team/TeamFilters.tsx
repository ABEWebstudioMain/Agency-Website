"use client";

import { useState } from "react";

interface TeamFiltersProps {
  allSkills: string[];
  allServices: string[];
  selectedSkills: string[];
  selectedServices: string[];
  onSkillToggle: (skill: string) => void;
  onServiceToggle: (service: string) => void;
  onClearFilters: () => void;
}

export default function TeamFilters({
  allSkills,
  allServices,
  selectedSkills,
  selectedServices,
  onSkillToggle,
  onServiceToggle,
  onClearFilters,
}: TeamFiltersProps) {
  const [showSkills, setShowSkills] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const hasActiveFilters = selectedSkills.length > 0 || selectedServices.length > 0;

  return (
    <div className="mb-16 rounded-sm bg-stroke/5 p-6 dark:bg-[#1D232D]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-heading text-xl font-medium text-dark dark:text-white">
          Filter Team Members
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-primary hover:text-primary/80"
          >
            Clear All Filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Skills Filter */}
        <div>
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="mb-3 flex w-full items-center justify-between rounded-sm bg-white p-4 text-left font-heading text-base font-medium text-dark hover:bg-gray-50 dark:bg-[#2C3443] dark:text-white dark:hover:bg-[#3A4553]"
            aria-expanded={showSkills}
            aria-controls="skills-filter"
          >
            <span>
              Skills {selectedSkills.length > 0 && `(${selectedSkills.length})`}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className={`fill-current transition-transform ${showSkills ? 'rotate-180' : ''}`}
            >
              <path d="M8 10.5L3.5 6L4.5 5L8 8.5L11.5 5L12.5 6L8 10.5Z" />
            </svg>
          </button>
          
          {showSkills && (
            <div id="skills-filter" className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => onSkillToggle(skill)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedSkills.includes(skill)
                      ? 'bg-primary text-white'
                      : 'bg-white text-dark hover:bg-primary/10 dark:bg-[#2C3443] dark:text-white dark:hover:bg-primary/20'
                  }`}
                  aria-pressed={selectedSkills.includes(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Services Filter */}
        <div>
          <button
            onClick={() => setShowServices(!showServices)}
            className="mb-3 flex w-full items-center justify-between rounded-sm bg-white p-4 text-left font-heading text-base font-medium text-dark hover:bg-gray-50 dark:bg-[#2C3443] dark:text-white dark:hover:bg-[#3A4553]"
            aria-expanded={showServices}
            aria-controls="services-filter"
          >
            <span>
              Services {selectedServices.length > 0 && `(${selectedServices.length})`}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className={`fill-current transition-transform ${showServices ? 'rotate-180' : ''}`}
            >
              <path d="M8 10.5L3.5 6L4.5 5L8 8.5L11.5 5L12.5 6L8 10.5Z" />
            </svg>
          </button>
          
          {showServices && (
            <div id="services-filter" className="flex flex-wrap gap-2">
              {allServices.map((service) => (
                <button
                  key={service}
                  onClick={() => onServiceToggle(service)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedServices.includes(service)
                      ? 'bg-primary text-white'
                      : 'bg-white text-dark hover:bg-primary/10 dark:bg-[#2C3443] dark:text-white dark:hover:bg-primary/20'
                  }`}
                  aria-pressed={selectedServices.includes(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}