"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

export default function Timeline() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineSteps = [
    {
      id: 1,
      time: "Week 1",
      painPoint: {
        title: "Endless Discovery Meetings",
        description: "Large consultancies schedule meeting after meeting, extending the 'discovery phase' for weeks without clear deliverables or progress.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
          </svg>
        )
      },
      solution: {
        title: "Immediate Action Plan",
        description: "We start with a focused 2-day assessment and deliver a clear roadmap with defined milestones, timelines, and deliverables.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        )
      }
    },
    {
      id: 2,
      time: "Month 1",
      painPoint: {
        title: "Vague Progress Updates",
        description: "Status reports filled with jargon and percentages that don't reflect real progress or tangible outcomes.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        )
      },
      solution: {
        title: "Transparent Weekly Demos",
        description: "Live demonstrations of working features every week, with clear metrics and direct access to the development team.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        )
      }
    },
    {
      id: 3,
      time: "Month 3",
      painPoint: {
        title: "Scope Creep & Hidden Costs",
        description: "Unexpected charges appear as 'additional requirements' that should have been included in the original scope.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
          </svg>
        )
      },
      solution: {
        title: "Fixed-Price Transparency",
        description: "All costs defined upfront with detailed breakdowns. No surprises, no hidden fees, and clear change request processes.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        )
      }
    },
    {
      id: 4,
      time: "Month 6",
      painPoint: {
        title: "Junior Team Handoffs",
        description: "Senior consultants disappear after the sale, leaving junior developers to handle complex implementation challenges.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5H15v6h2zm-11.5-6L10 14h4v8h-2v-6h-1.5l-2.5 2.5V22H6v-6z"/>
          </svg>
        )
      },
      solution: {
        title: "Senior Expert Continuity",
        description: "The same senior specialists who design your solution also implement it, ensuring consistency and deep understanding throughout.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        )
      }
    },
    {
      id: 5,
      time: "Month 9",
      painPoint: {
        title: "Delayed Launch & Excuses",
        description: "Original timelines become distant memories as launch dates slip with technical excuses and blame-shifting.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        )
      },
      solution: {
        title: "On-Time Delivery Guarantee",
        description: "Agile sprints with working software delivered every 2 weeks. You see progress continuously, not just at the end.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollStart = -sectionTop + windowHeight * 0.2;
      const scrollEnd = sectionHeight - windowHeight * 0.8;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setScrollProgress(progress);

      // Determine active step based on scroll progress
      const stepIndex = Math.floor(progress * timelineSteps.length);
      setActiveStep(Math.min(stepIndex, timelineSteps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [timelineSteps.length]);

  return (
    <section ref={timelineRef} className="relative py-16 sm:py-20 lg:py-[100px] overflow-hidden">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">THE JOURNEY</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Traditional Consultancy vs. 58Solutions Approach
          </h2>
          <p className="text-base text-dark-text">
            See how our transparent, agile methodology contrasts with the typical frustrations of working with large consultancies.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-stroke dark:bg-[#2E333D]" style={{ height: 'calc(100% - 200px)', width: '1px' }}>
            {/* Progress Indicator */}
            <div 
              className="absolute top-0 w-full bg-primary transition-all duration-300 ease-out"
              style={{ height: `${Math.min(scrollProgress * 100, 85)}%` }}
            />
          </div>

          {/* Animated Progress Ball */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
            style={{ 
              top: `${Math.min(scrollProgress * 85, 80)}%`,
              zIndex: 5
            }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-primary/20 animate-pulse"></div>
              {/* Main ball */}
              <div className="relative h-4 w-4 rounded-full bg-primary shadow-lg border-2 border-white dark:border-dark"></div>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 lg:space-y-24">
            {timelineSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative transition-all duration-500 ${
                  activeStep === index ? 'opacity-100' : 'opacity-75'
                }`}
              >
                {/* Time Label */}
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className={`rounded-full px-4 py-2 font-heading text-sm font-medium shadow-md transition-all duration-300 ${
                    activeStep >= index 
                      ? 'bg-primary text-white scale-110' 
                      : 'bg-white text-dark dark:bg-[#1D232D] dark:text-white'
                  }`}>
                    {step.time}
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
                  {/* Pain Point (Left) */}
                  <div className="lg:text-right">
                    <div className={`rounded-sm border-l-4 border-orange-400 bg-orange-50 p-6 transition-all duration-300 dark:bg-orange-900/10 lg:p-8 ${
                      activeStep >= index ? 'shadow-md border-orange-500' : 'shadow-sm'
                    } h-full flex flex-col`}>
                      <div className="mb-4 flex items-center lg:justify-end">
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 lg:order-2 lg:ml-3 lg:mr-0">
                          {step.painPoint.icon}
                        </div>
                        <h3 className="font-heading text-lg font-medium text-dark dark:text-white lg:order-1">
                          {step.painPoint.title}
                        </h3>
                      </div>
                      <p className="text-base text-dark-text leading-relaxed flex-grow">
                        {step.painPoint.description}
                      </p>
                    </div>
                  </div>

                  {/* Solution (Right) */}
                  <div>
                    <div className={`rounded-sm border-l-4 border-primary bg-primary/5 p-6 transition-all duration-300 dark:bg-primary/10 lg:p-8 ${
                      activeStep >= index ? 'shadow-md border-primary bg-primary/10 dark:bg-primary/15' : 'shadow-sm'
                    } h-full flex flex-col`}>
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                          {step.solution.icon}
                        </div>
                        <h3 className="font-heading text-lg font-medium text-dark dark:text-white">
                          {step.solution.title}
                        </h3>
                      </div>
                      <p className="text-base text-dark-text leading-relaxed flex-grow">
                        {step.solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="relative mt-32 text-center lg:mt-40 pt-12">
            {/* Visual separator from timeline */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-stroke to-transparent dark:via-[#2E333D]"></div>
            
            <div className="mx-auto max-w-2xl rounded-sm bg-primary/5 p-8 dark:bg-primary/10">
              <h3 className="mb-4 font-heading text-2xl font-semibold text-dark dark:text-white">
                Ready for a Different Experience?
              </h3>
              <p className="mb-6 text-base text-dark-text">
                Skip the frustration and work with a team that delivers transparency, expertise, and results from day one.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Start Your Project Right
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-2 fill-current"
                >
                  <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}