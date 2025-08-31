"use client";

import { useState } from "react";
import { caseStudies, getFeaturedCaseStudies } from "@/data/caseStudies";
import { useParams } from "next/navigation";
import SectionTitle from "@/components/Common/SectionTitle";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyFilters from "./CaseStudyFilters";

export default function CaseStudiesOverview() {
  const params = useParams();
  const locale = params.locale as string;
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const featuredStudies = getFeaturedCaseStudies();

  const categories = [
    { id: 'all', name: 'All Case Studies', count: caseStudies.length },
    { id: 'custom-software', name: 'Custom Software', count: caseStudies.filter(s => s.serviceCategory === 'custom-software').length },
    { id: 'devsecops', name: 'DevSecOps', count: caseStudies.filter(s => s.serviceCategory === 'devsecops').length },
    { id: 'cloud-migration', name: 'Cloud Migration', count: caseStudies.filter(s => s.serviceCategory === 'cloud-migration').length },
    { id: 'ai-optimization', name: 'AI Optimization', count: caseStudies.filter(s => s.serviceCategory === 'ai-optimization').length }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.serviceCategory === selectedCategory);

  return (
    <div className="pt-24 md:pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20 sm:py-24 lg:py-32 dark:from-primary/10 dark:via-dark dark:to-primary/20">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary dark:bg-primary/20">
              SUCCESS STORIES
            </div>
            <h1 className="mb-8 font-heading text-4xl font-bold text-dark sm:text-5xl md:text-6xl dark:text-white">
              Our Impact: <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Real-World Solutions</span>, Measurable Results
            </h1>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-dark-text leading-relaxed">
              <p>
                At <strong className="text-dark dark:text-white">58agents</strong>, we don&apos;t just promise results—we deliver them. Our commitment to <strong className="text-primary">agile expertise, transparent partnership, and efficient execution</strong> translates into tangible value for our clients.
              </p>
              <p>
                Explore how our lean team of highly experienced IT professionals has helped businesses overcome complex challenges and achieve their strategic goals through <strong className="text-primary">custom software, DevSecOps platforms, cloud migrations, and AI optimization</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
                Featured <span className="text-primary">Success Stories</span>
              </h2>
              <p className="text-lg text-dark-text">
                While specific client names may be withheld for confidentiality, the impact speaks for itself
              </p>
            </div>

            <div className="grid gap-8 lg:gap-12">
              {featuredStudies.map((study, index) => (
                <CaseStudyCard 
                  key={study.id} 
                  study={study} 
                  featured={true}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="bg-stroke/5 py-16 sm:py-20 lg:py-24 dark:bg-[#1D232D]">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
                All <span className="text-primary">Case Studies</span>
              </h2>
              <p className="text-lg text-dark-text">
                Browse our complete collection of client success stories by service category
              </p>
            </div>

            <CaseStudyFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {filteredStudies.map((study) => (
                <CaseStudyCard 
                  key={study.id} 
                  study={study} 
                  featured={false}
                />
              ))}
            </div>

            {filteredStudies.length === 0 && (
              <div className="py-20 text-center">
                <h3 className="mb-4 font-heading text-2xl font-medium text-dark dark:text-white">
                  No case studies found
                </h3>
                <p className="mb-8 text-base text-dark-text">
                  Try selecting a different category to see more results.
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base text-white hover:bg-primary/90"
                >
                  View All Case Studies
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 py-20 sm:py-24">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-10"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready to See Similar Results?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Discover how 58agents can drive digital transformation for your business.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`/${locale}#contact`}
                className="group inline-flex items-center rounded-sm bg-white px-8 py-4 font-heading text-base font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Schedule Your Free Consultation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                >
                  <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                </svg>
              </a>
              <a
                href={`/${locale}/team`}
                className="group inline-flex items-center rounded-sm border-2 border-white/20 px-8 py-4 font-heading text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                Meet Our Experts
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                >
                  <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8 text-sm text-white/80">
              Free consultation • No commitment • Expert advice
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}