"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CloudMigrationsService() {
  const params = useParams();
  const locale = params.locale as string;
  const [activeStep, setActiveStep] = useState(0);
  const [visibleBenefits, setVisibleBenefits] = useState(0);

  // Auto-advance timeline steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate benefits on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleBenefits((prev) => {
          if (prev < 6) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 300);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const challenges = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M11 7h2v2h-2zM11 11h2v6h-2z"/>
        </svg>
      ),
      title: "High On-Premise Infrastructure Costs",
      description: "You're burdened by the high maintenance costs and rigidity of on-premise infrastructure that limits your operational flexibility.",
      impact: "Expensive overhead"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Limited Scalability & Flexibility",
      description: "Your current systems lack the scalability and flexibility to meet fluctuating demands or support rapid business growth.",
      impact: "Growth bottlenecks"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          <path d="M12 7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2V9c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      title: "Complex Disaster Recovery Challenges",
      description: "You face complex disaster recovery challenges and want improved business continuity with reliable backup solutions.",
      impact: "Business risk"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Missing Cloud-Native Opportunities",
      description: "You're eager to leverage modern cloud-native services but are unsure where to start or how to implement them effectively.",
      impact: "Missed innovation"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      ),
      title: "Security & Compliance Concerns",
      description: "You're concerned about the security implications of moving data and applications to the cloud and ensuring compliance.",
      impact: "Security risks"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      ),
      title: "Migration Complexity Overwhelm",
      description: "The thought of planning and executing a complex migration without disruption feels overwhelming and risky.",
      impact: "Project paralysis"
    }
  ];

  const approachSteps = [
    {
      title: "Strategic Cloud Assessment & Roadmap",
      description: "We evaluate your current IT landscape, identify optimal cloud solutions (public, private, hybrid), and develop a phased migration roadmap aligned with your business objectives.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 8v8l5.66 3.39-1.32 2.22L15 18V8h1z"/>
        </svg>
      ),
      duration: "2-3 weeks",
      deliverables: ["Cloud readiness assessment", "Migration strategy", "Cost analysis", "Risk evaluation"]
    },
    {
      title: "Architecture & Design",
      description: "Our architects design robust, secure, and cost-effective cloud infrastructures, leveraging best practices for resilience and performance on your chosen cloud provider.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M27 4.002H5a3 3 0 00-3 3v18a3 3 0 003 3h22a3 3 0 003-3v-18a3 3 0 00-3-3zM5 6.002h22a1 1 0 011 1v3H4v-3a1 1 0 011-1zm22 20H5a1 1 0 01-1-1v-13h24v13a1 1 0 01-1 1z"/>
          <path d="M7 14.002h4v4H7zM13 14.002h10v2H13zM13 18.002h8v2h-8z"/>
        </svg>
      ),
      duration: "3-4 weeks",
      deliverables: ["Cloud architecture design", "Security framework", "Network topology", "Compliance mapping"]
    },
    {
      title: "Seamless Migration Execution",
      description: "We handle the end-to-end migration process, from data transfer and application re-platforming to rigorous testing, ensuring minimal downtime and business disruption.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M21.293 10.293L16 15.586l-2.293-2.293-1.414 1.414L16 18.414l6.707-6.707z"/>
        </svg>
      ),
      duration: "6-12 weeks",
      deliverables: ["Data migration", "Application deployment", "Testing validation", "Performance optimization"]
    },
    {
      title: "Cost Optimization & Governance",
      description: "We implement strategies for cloud cost management and governance, ensuring you maximize value and avoid unexpected expenses post-migration.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 6v4.17c1.83.45 3.17 2.09 3.17 4.08 0 .55-.45 1-1 1s-1-.45-1-1c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.1.9 2 2 2 2.21 0 4 1.79 4 4 0 1.99-1.34 3.63-3.17 4.08V26h-2v-1.75C12.34 23.8 11 22.16 11 20.25c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2-2.21 0-4-1.79-4-4 0-1.99 1.34-3.63 3.17-4.08V6h2z"/>
        </svg>
      ),
      duration: "2-3 weeks",
      deliverables: ["Cost monitoring setup", "Resource optimization", "Governance policies", "Budget controls"]
    },
    {
      title: "Security & Compliance",
      description: "We embed robust security measures and ensure compliance with relevant industry standards and regulations throughout your cloud environment.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l-8 3v6c0 4.99 3.84 9.64 8 10.5 4.16-.86 8-5.51 8-10.5V5l-8-3z"/>
          <path d="M14 18l-3-3 1.41-1.41L14 15.17l5.59-5.58L21 11l-7 7z"/>
        </svg>
      ),
      duration: "2-4 weeks",
      deliverables: ["Security implementation", "Compliance validation", "Access controls", "Audit trails"]
    },
    {
      title: "Cloud-Native Adoption & Modernization",
      description: "We guide you in leveraging cloud-native services (serverless, containers, managed databases) to modernize applications and unlock further efficiencies.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l4.12 8.36L30 12.24l-7 6.82 1.65 9.54L16 24.77l-8.65 3.83L9 18.06l-7-6.82 9.88-1.88L16 2z"/>
        </svg>
      ),
      duration: "Ongoing",
      deliverables: ["Modernization roadmap", "Cloud-native services", "Performance optimization", "Best practices"]
    }
  ];

  const benefits = [
    {
      title: "Reduced Operational Costs",
      description: "Lower infrastructure maintenance expenses and optimize resource utilization with pay-as-you-use models.",
      metric: "Up to 50% cost savings",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 6v4.17c1.83.45 3.17 2.09 3.17 4.08 0 .55-.45 1-1 1s-1-.45-1-1c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.1.9 2 2 2 2.21 0 4 1.79 4 4 0 1.99-1.34 3.63-3.17 4.08V26h-2v-1.75C12.34 23.8 11 22.16 11 20.25c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2-2.21 0-4-1.79-4-4 0-1.99 1.34-3.63 3.17-4.08V6h2z"/>
        </svg>
      )
    },
    {
      title: "Enhanced Scalability & Agility",
      description: "Respond rapidly to market changes and scale resources up or down as needed with elastic cloud infrastructure.",
      metric: "Instant scaling",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M26 4H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zM6 26V6h20v20z"/>
          <path d="M8 22h3v-8H8zM13 22h3v-12h-3zM18 22h3v-6h-3zM23 22h1v-10h-1z"/>
        </svg>
      )
    },
    {
      title: "Improved Business Continuity",
      description: "Strengthen disaster recovery capabilities and ensure higher availability with cloud-native backup and recovery solutions.",
      metric: "99.9% uptime",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l-8 3v6c0 4.99 3.84 9.64 8 10.5 4.16-.86 8-5.51 8-10.5V5l-8-3z"/>
          <path d="M14 18l-3-3 1.41-1.41L14 15.17l5.59-5.58L21 11l-7 7z"/>
        </svg>
      )
    },
    {
      title: "Access to Innovation",
      description: "Leverage cutting-edge cloud services for competitive advantage including AI, ML, and advanced analytics capabilities.",
      metric: "Latest technologies",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l4.12 8.36L30 12.24l-7 6.82 1.65 9.54L16 24.77l-8.65 3.83L9 18.06l-7-6.82 9.88-1.88L16 2z"/>
        </svg>
      )
    },
    {
      title: "Robust Security",
      description: "Implement advanced cloud security features and compliance frameworks with enterprise-grade protection.",
      metric: "Enterprise security",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l-8 3v6c0 4.99 3.84 9.64 8 10.5 4.16-.86 8-5.51 8-10.5V5l-8-3z"/>
          <path d="M14 18l-3-3 1.41-1.41L14 15.17l5.59-5.58L21 11l-7 7z"/>
        </svg>
      )
    },
    {
      title: "Future-Proof Infrastructure",
      description: "Build a resilient foundation for long-term digital growth that adapts to emerging technologies and business needs.",
      metric: "Future-ready",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M22.707 12.293l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L14 18.172l7.293-7.293a1 1 0 011.414 1.414z"/>
        </svg>
      )
    }
  ];

  const technologies = [
    {
      category: "Cloud Platforms",
      items: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure"],
      color: "bg-blue-500"
    },
    {
      category: "Migration Strategies",
      items: ["Re-hosting", "Re-platforming", "Re-architecting"],
      color: "bg-green-500"
    },
    {
      category: "Containerization",
      items: ["Docker", "Kubernetes"],
      color: "bg-purple-500"
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform", "Ansible"],
      color: "bg-orange-500"
    },
    {
      category: "Serverless Computing",
      items: ["AWS Lambda", "Google Cloud Functions"],
      color: "bg-red-500"
    },
    {
      category: "Databases",
      items: ["RDS", "Aurora", "DynamoDB", "Cloud SQL", "Spanner"],
      color: "bg-indigo-500"
    },
    {
      category: "Networking",
      items: ["VPC", "Direct Connect", "VPN"],
      color: "bg-pink-500"
    },
    {
      category: "Security & Identity",
      items: ["IAM", "Security Groups", "CloudTrail", "Cloud Guard"],
      color: "bg-teal-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20 sm:py-24 lg:py-32 pt-24 md:pt-28 lg:pt-32 dark:from-primary/10 dark:via-dark dark:to-primary/20">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary dark:bg-primary/20">
              Service Pillar 3
            </div>
            <h1 className="mb-8 font-heading text-4xl font-bold text-dark sm:text-5xl md:text-6xl dark:text-white">
              Navigate Your Cloud Journey: <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Seamless Migrations</span> & Expert Consultation
            </h1>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-dark-text leading-relaxed">
              <p>
                The cloud offers unparalleled scalability, flexibility, and cost efficiency, but migrating effectively requires expertise and a strategic approach. At <strong className="text-dark dark:text-white">Unit05</strong>, we provide <strong className="text-primary">expert cloud migration and consultation services</strong>, guiding your business through every stage of its cloud journey.
              </p>
              <p>
                Our highly experienced team ensures a secure, efficient, and cost-optimized transition with minimal disruption, positioning your business for sustainable growth and innovation in the cloud.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className="group inline-flex items-center rounded-sm bg-primary px-8 py-4 font-heading text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Start Your Cloud Journey
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                >
                  <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                </svg>
              </Link>
              <Link
                href="#challenges"
                className="inline-flex items-center rounded-sm border-2 border-primary/20 px-8 py-4 font-heading text-base font-medium text-dark transition-all hover:border-primary/40 hover:bg-primary/5 dark:text-white"
              >
                See If This Is You
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
                Is This You? <span className="text-primary">Your Challenges</span>
              </h2>
              <p className="text-lg text-dark-text">
                If any of these sound familiar, you&apos;re in the right place
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-sm bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 transition-all duration-300 hover:shadow-lg dark:from-orange-900/10 dark:to-orange-800/5"
                >
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-orange-200/30 transition-all group-hover:scale-110 dark:bg-orange-800/20"></div>
                  
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                      {challenge.icon}
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-medium text-dark dark:text-white">
                      {challenge.title}
                    </h3>
                    <p className="mb-4 text-sm text-dark-text leading-relaxed">
                      {challenge.description}
                    </p>
                    <div className="inline-block rounded-full bg-orange-200 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-800/30 dark:text-orange-200">
                      {challenge.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Timeline */}
      <section className="bg-stroke/5 py-16 sm:py-20 lg:py-24 dark:bg-[#1D232D]">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
                How We Help: <span className="text-primary">Our 6-Step Cloud Transformation</span>
              </h2>
              <p className="text-lg text-dark-text">
                From assessment to modernization, we guide your complete cloud journey
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 md:left-1/2"></div>
              
              {approachSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 transition-all duration-500 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'
                  } ${activeStep === index ? 'scale-105' : 'scale-100'}`}
                >
                  <div className={`absolute top-6 size-6 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-primary shadow-lg shadow-primary/50 scale-125' 
                      : 'bg-primary/60'
                  } ${index % 2 === 0 ? 'left-5 md:-right-3' : 'left-5 md:-left-3'}`}>
                    <div className={`absolute inset-0 rounded-full ${
                      activeStep === index ? 'animate-ping bg-primary/75' : ''
                    }`}></div>
                  </div>
                  
                  <div className={`ml-16 rounded-sm p-6 shadow-sm transition-all duration-300 md:ml-0 ${
                    activeStep === index 
                      ? 'bg-white shadow-lg dark:bg-[#2C3443]' 
                      : 'bg-white/80 dark:bg-[#2C3443]/80'
                  }`}>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          {step.icon}
                        </div>
                        <div className="text-sm font-medium text-primary">
                          Step {index + 1}
                        </div>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h3 className="mb-3 font-heading text-xl font-medium text-dark dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-base text-dark-text leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-dark dark:text-white">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary border border-primary/20"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
                Key Benefits <span className="text-primary">You&apos;ll Achieve</span>
              </h2>
              <p className="text-lg text-dark-text">
                Transform your infrastructure with measurable cloud advantages
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-sm bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg dark:bg-[#1D232D] ${
                    index < visibleBenefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 transition-all group-hover:scale-110"></div>
                  
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        {benefit.icon}
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
                        {benefit.metric}
                      </span>
                    </div>
                    
                    <h3 className="mb-3 font-heading text-lg font-medium text-dark dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-dark-text leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <div className="mt-4 h-1 w-full bg-stroke/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
                        style={{ 
                          width: index < visibleBenefits ? '100%' : '0%',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 sm:py-20 lg:py-24 dark:from-primary/10 dark:to-primary/20">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
              Why Choose <span className="text-primary">Unit05</span>?
            </h2>
            
            <div className="relative overflow-hidden rounded-sm bg-white/90 p-8 shadow-lg backdrop-blur-sm dark:bg-[#1D232D]/90 lg:p-12">
              <div className="relative space-y-6 text-lg text-dark-text leading-relaxed">
                <p>
                  Our <strong className="text-primary">lean team of highly experienced cloud architects and engineers</strong> specializes in navigating the complexities of cloud transformation. We offer a <strong className="text-primary">direct, transparent partnership</strong>, providing clear communication and avoiding the &quot;ghost work\&quot; often associated with larger firms.
                </p>
                <p>
                  By leveraging our <strong className="text-dark dark:text-white">extensive network</strong>, we can seamlessly integrate niche expertise for any specific cloud challenge. You gain a <strong className="text-primary">fast-paced, reliable partner</strong> committed to delivering a secure, efficient, and value-driven cloud migration that propels your business forward.
                </p>
              </div>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-dark-text">Cloud Certified Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-dark-text">Downtime Tolerance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-dark-text">Migration Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark sm:text-4xl dark:text-white">
                Technologies & <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-lg text-dark-text">
                Comprehensive cloud migration tools and platforms
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-sm bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-[#1D232D]"
                >
                  <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full ${tech.color} opacity-10 transition-all group-hover:scale-110 group-hover:opacity-20`}></div>
                  
                  <div className="relative">
                    <h3 className="mb-4 font-heading text-lg font-medium text-dark dark:text-white">
                      {tech.category}
                    </h3>
                    <div className="space-y-2">
                      {tech.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="rounded-sm bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 py-20 sm:py-24">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-10"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready to Unlock the Power of the Cloud?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Let&apos;s design a strategic cloud roadmap tailored for your business.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className="group inline-flex items-center rounded-sm bg-white px-8 py-4 font-heading text-base font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Schedule a Free Consultation
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                >
                  <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/team`}
                className="group inline-flex items-center rounded-sm border-2 border-white/20 px-8 py-4 font-heading text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                Meet Our Cloud Experts
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                >
                  <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-white/80">
              Free consultation • No commitment • Expert cloud advice
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="border-t py-12 dark:border-[#2E333D]">
        <div className="px-4 xl:container">
          <div className="text-center">
            <Link
              href={`/${locale}#services`}
              className="inline-flex items-center rounded-sm bg-stroke/20 px-6 py-3 font-heading text-base text-dark transition-all hover:bg-stroke/40 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M3.828 7L7.172 3.656L6.515 3L2 7.5L6.515 12L7.172 11.344L3.828 8H14V7H3.828Z" />
              </svg>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}