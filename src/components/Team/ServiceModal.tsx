"use client";

import { useEffect } from "react";
import { Service } from "@/types/employee";

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
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
      aria-labelledby="service-modal-title"
    >
      <div 
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-white p-8 dark:bg-[#1D232D]"
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
          <h2 id="service-modal-title" className="mb-2 font-heading text-2xl font-bold text-dark dark:text-white">
            {service.name}
          </h2>
          <p className="text-base text-dark-text">
            {service.description}
          </p>
        </div>

        {/* Pricing */}
        {service.pricing && (
          <div className="mb-8 rounded-sm bg-primary/5 p-6 dark:bg-primary/10">
            <h3 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
              Investment
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-base text-dark-text">
                {service.pricing.type === 'hourly' ? 'Hourly Rate' : 
                 service.pricing.type === 'project' ? 'Project Range' : 
                 'Retainer Range'}:
              </span>
              <span className="font-heading text-xl font-bold text-primary">
                {service.pricing.range}
              </span>
            </div>
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-8">
          <h3 className="mb-3 font-heading text-lg font-medium text-dark dark:text-white">
            Service Overview
          </h3>
          <p className="text-base text-dark-text leading-relaxed">
            {service.detailedDescription}
          </p>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-8">
          <h3 className="mb-4 font-heading text-lg font-medium text-dark dark:text-white">
            Tools & Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h3 className="mb-4 font-heading text-lg font-medium text-dark dark:text-white">
            What You&apos;ll Receive
          </h3>
          <ul className="space-y-2">
            {service.deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start text-base text-dark-text">
                <svg width="20" height="20" viewBox="0 0 20 20" className="mr-3 mt-0.5 shrink-0 fill-current text-primary">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        {service.projects.length > 0 && (
          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-dark dark:text-white">
              Case Studies
            </h3>
            <div className="space-y-6">
              {service.projects.map((project) => (
                <div key={project.id} className="rounded-sm bg-stroke/5 p-6 dark:bg-white/5">
                  <h4 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
                    {project.name}
                  </h4>
                  <p className="mb-4 text-base text-dark-text">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white px-3 py-1 text-sm font-medium text-dark-text dark:bg-[#2C3443] dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {project.duration && (
                      <div>
                        <span className="text-sm font-medium text-dark dark:text-white">Duration:</span>
                        <span className="ml-2 text-sm text-dark-text">{project.duration}</span>
                      </div>
                    )}
                    {project.outcome && (
                      <div>
                        <span className="text-sm font-medium text-dark dark:text-white">Result:</span>
                        <span className="ml-2 text-sm font-medium text-primary">{project.outcome}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 border-t pt-6 text-center dark:border-[#2E333D]">
          <p className="mb-4 text-base text-dark-text">
            Interested in this service? Let&apos;s discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base text-white hover:bg-primary/90"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" className="ml-2 fill-current">
              <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}