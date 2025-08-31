"use client";

import { useEffect } from "react";
import { Skill } from "@/types/employee";

interface SkillModalProps {
  skill: Skill;
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <div 
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-white p-8 dark:bg-[#1D232D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-stroke/20 text-dark-text hover:bg-stroke/40 dark:bg-white/10 dark:hover:bg-white/20"
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
            <path d="M12.5 3.5L8 8L3.5 3.5L2.5 4.5L7 9L2.5 13.5L3.5 14.5L8 10L12.5 14.5L13.5 13.5L9 9L13.5 4.5L12.5 3.5Z" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 id="skill-modal-title" className="font-heading text-2xl font-bold text-dark dark:text-white">
              {skill.name}
            </h2>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${
              skill.level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            }`}>
              {skill.level}
            </span>
          </div>
          <p className="text-primary font-medium">
            {skill.yearsOfExperience} years of experience • {skill.category}
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="mb-3 font-heading text-lg font-medium text-dark dark:text-white">
            About This Skill
          </h3>
          <p className="text-base text-dark-text leading-relaxed">
            {skill.description}
          </p>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-8">
          <h3 className="mb-4 font-heading text-lg font-medium text-dark dark:text-white">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {skill.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        {skill.projects.length > 0 && (
          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-dark dark:text-white">
              Related Projects
            </h3>
            <div className="space-y-4">
              {skill.projects.map((project) => (
                <div key={project.id} className="rounded-sm bg-stroke/5 p-4 dark:bg-white/5">
                  <h4 className="mb-2 font-heading text-base font-medium text-dark dark:text-white">
                    {project.name}
                  </h4>
                  <p className="mb-3 text-sm text-dark-text">
                    {project.description}
                  </p>
                  
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-dark-text dark:bg-[#2C3443] dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-dark-text">
                    {project.duration && (
                      <span>Duration: {project.duration}</span>
                    )}
                    {project.outcome && (
                      <span className="font-medium text-primary">
                        {project.outcome}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}