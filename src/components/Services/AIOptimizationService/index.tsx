"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AIOptimizationService() {
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
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
        </svg>
      ),
      title: "Repetitive Manual Tasks",
      description: "Your team spends too much time on repetitive, manual data entry or administrative tasks that drain productivity and morale.",
      impact: "Hours lost daily"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Workflow Bottlenecks",
      description: "You're looking for ways to streamline internal workflows and reduce operational bottlenecks that slow down your business processes.",
      impact: "Delayed operations"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      ),
      title: "Data Insights Gap",
      description: "You struggle to extract actionable insights from large volumes of unstructured data, missing opportunities for informed decision-making.",
      impact: "Missed opportunities"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "Underutilized Talent",
      description: "Employee potential is underutilized because they're stuck doing tedious work that could be automated, preventing them from contributing strategically.",
      impact: "Wasted potential"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-orange-600">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "AI Implementation Uncertainty",
      description: "You're curious about AI's potential but unsure where to start or how to implement it safely and effectively within your organization.",
      impact: "Missed innovation"
    }
  ];

  const approachSteps = [
    {
      title: "Process Identification & AI Opportunity Assessment",
      description: "We work closely with your teams to pinpoint high-impact, repetitive processes that are ripe for AI automation, ensuring a clear return on investment.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 8v8l5.66 3.39-1.32 2.22L15 18V8h1z"/>
        </svg>
      ),
      duration: "1-2 weeks",
      deliverables: ["Process analysis", "ROI assessment", "AI opportunity mapping", "Implementation roadmap"]
    },
    {
      title: "Tailored AI Solution Design",
      description: "Based on your specific needs, we design custom AI models and integrations, whether it's for natural language processing, intelligent document processing, data classification, or predictive analytics.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M27 4.002H5a3 3 0 00-3 3v18a3 3 0 003 3h22a3 3 0 003-3v-18a3 3 0 00-3-3zM5 6.002h22a1 1 0 011 1v3H4v-3a1 1 0 011-1zm22 20H5a1 1 0 01-1-1v-13h24v13a1 1 0 01-1 1z"/>
          <path d="M7 14.002h4v4H7zM13 14.002h10v2H13zM13 18.002h8v2h-8z"/>
        </svg>
      ),
      duration: "3-4 weeks",
      deliverables: ["AI model design", "Solution architecture", "Integration plan", "Security framework"]
    },
    {
      title: "Secure Development & Integration",
      description: "Our experts develop robust AI solutions and seamlessly integrate them into your existing systems, ensuring data security and system compatibility.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l-8 3v6c0 4.99 3.84 9.64 8 10.5 4.16-.86 8-5.51 8-10.5V5l-8-3z"/>
          <path d="M14 18l-3-3 1.41-1.41L14 15.17l5.59-5.58L21 11l-7 7z"/>
        </svg>
      ),
      duration: "4-8 weeks",
      deliverables: ["AI model development", "System integration", "Security implementation", "Testing validation"]
    },
    {
      title: "Human-in-the-Loop Implementation",
      description: "We prioritize solutions where AI augments human capabilities. Critical AI outputs can be reviewed and validated by your team, combining efficiency with accuracy and control.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M12 14a2 2 0 100-4 2 2 0 000 4zM20 14a2 2 0 100-4 2 2 0 000 4zM16 24c4.418 0 8-2.686 8-6H8c0 3.314 3.582 6 8 6z"/>
        </svg>
      ),
      duration: "2-3 weeks",
      deliverables: ["Human review workflows", "Validation processes", "Quality controls", "User interfaces"]
    },
    {
      title: "Performance Monitoring & Optimization",
      description: "We establish metrics and monitoring to track the AI's performance, continuously optimizing it for greater efficiency and effectiveness over time.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M26 4H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zM6 26V6h20v20z"/>
          <path d="M8 22h3v-8H8zM13 22h3v-12h-3zM18 22h3v-6h-3zM23 22h1v-10h-1z"/>
        </svg>
      ),
      duration: "2-3 weeks",
      deliverables: ["Performance metrics", "Monitoring dashboards", "Optimization reports", "Continuous improvement"]
    },
    {
      title: "Team Training & Adoption",
      description: "We ensure your team understands how to work effectively with the new AI tools, maximizing adoption and long-term success.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M12 14a2 2 0 100-4 2 2 0 000 4zM20 14a2 2 0 100-4 2 2 0 000 4zM16 24c4.418 0 8-2.686 8-6H8c0 3.314 3.582 6 8 6z"/>
        </svg>
      ),
      duration: "Ongoing",
      deliverables: ["Training programs", "User documentation", "Best practices", "Support materials"]
    }
  ];

  const benefits = [
    {
      title: "Significant Time & Cost Savings",
      description: "Automate repetitive tasks, reducing manual labor and operational expenses while increasing overall productivity.",
      metric: "Up to 80% time savings",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 6v4.17c1.83.45 3.17 2.09 3.17 4.08 0 .55-.45 1-1 1s-1-.45-1-1c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.1.9 2 2 2 2.21 0 4 1.79 4 4 0 1.99-1.34 3.63-3.17 4.08V26h-2v-1.75C12.34 23.8 11 22.16 11 20.25c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2-2.21 0-4-1.79-4-4 0-1.99 1.34-3.63 3.17-4.08V6h2z"/>
        </svg>
      )
    },
    {
      title: "Increased Accuracy & Consistency",
      description: "Minimize human error in high-volume, data-intensive processes with AI-powered validation and processing.",
      metric: "99.5% accuracy rate",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M22.707 12.293l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L14 18.172l7.293-7.293a1 1 0 011.414 1.414z"/>
        </svg>
      )
    },
    {
      title: "Enhanced Employee Productivity",
      description: "Free up your team to focus on strategic, creative, and fulfilling work by automating mundane tasks.",
      metric: "5x productivity boost",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M12 14a2 2 0 100-4 2 2 0 000 4zM20 14a2 2 0 100-4 2 2 0 000 4zM16 24c4.418 0 8-2.686 8-6H8c0 3.314 3.582 6 8 6z"/>
        </svg>
      )
    },
    {
      title: "Faster Data Processing & Insights",
      description: "Quickly extract valuable information from large datasets, enabling better and faster decision-making processes.",
      metric: "Real-time insights",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M26 4H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zM6 26V6h20v20z"/>
          <path d="M8 22h3v-8H8zM13 22h3v-12h-3zM18 22h3v-6h-3zM23 22h1v-10h-1z"/>
        </svg>
      )
    },
    {
      title: "Scalable Operations",
      description: "Handle increasing workloads without linearly increasing headcount, enabling sustainable business growth.",
      metric: "Unlimited scaling",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l4.12 8.36L30 12.24l-7 6.82 1.65 9.54L16 24.77l-8.65 3.83L9 18.06l-7-6.82 9.88-1.88L16 2z"/>
        </svg>
      )
    },
    {
      title: "Competitive Edge",
      description: "Leverage cutting-edge AI technology to innovate and outperform competitors in your market.",
      metric: "Market advantage",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-primary">
          <path d="M16 2l-8 3v6c0 4.99 3.84 9.64 8 10.5 4.16-.86 8-5.51 8-10.5V5l-8-3z"/>
          <path d="M14 18l-3-3 1.41-1.41L14 15.17l5.59-5.58L21 11l-7 7z"/>
        </svg>
      )
    }
  ];

  const technologies = [
    {
      category: "Machine Learning Libraries",
      items: ["TensorFlow", "PyTorch", "Scikit-learn"],
      color: "bg-blue-500"
    },
    {
      category: "Natural Language Processing",
      items: ["SpaCy", "NLTK", "Hugging Face Transformers"],
      color: "bg-green-500"
    },
    {
      category: "Cloud AI Services",
      items: ["AWS SageMaker", "Google Vertex AI", "Azure AI"],
      color: "bg-purple-500"
    },
    {
      category: "Data Processing",
      items: ["Pandas", "Apache Spark", "NumPy"],
      color: "bg-orange-500"
    },
    {
      category: "Automation Tools",
      items: ["RPA Integration", "Custom Scripting", "Workflow Engines"],
      color: "bg-red-500"
    },
    {
      category: "Integration Patterns",
      items: ["REST APIs", "Message Queues", "Event Streaming"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 dark:from-primary/10 dark:via-dark dark:to-primary/20">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary dark:bg-primary/20">
              Service Pillar 4
            </div>
            <h1 className="mb-8 font-heading text-4xl font-bold text-dark sm:text-5xl md:text-6xl dark:text-white">
              Smart Efficiency: <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">AI Solutions</span> that Automate Tedious Tasks and Empower Your Team
            </h1>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-dark-text leading-relaxed">
              <p>
                Many businesses are held back by repetitive, time-consuming tasks that drain resources and stifle innovation. <strong className="text-primary">AI-Powered Process Optimization and Automation</strong> offers a transformative solution, freeing your team from the mundane and enabling them to focus on higher-value work.
              </p>
              <p>
                At <strong className="text-dark dark:text-white">Unit05</strong>, we specialize in identifying and implementing practical AI solutions that tighten operational gaps, enhance accuracy, and drive significant efficiencies – with a strategic focus on human-reviewed AI to ensure both reliability and peace of mind.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className="group inline-flex items-center rounded-sm bg-primary px-8 py-4 font-heading text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Unlock Your AI Potential
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
                How We Help: <span className="text-primary">Our 6-Step AI Implementation</span>
              </h2>
              <p className="text-lg text-dark-text">
                From assessment to team enablement, we bring AI from concept to reality
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
                Transform your operations with practical AI automation
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
                  Our <strong className="text-primary">small team of highly experienced AI and software experts</strong> understands how to translate complex AI concepts into practical, deployable solutions that deliver real business value.
                </p>
                <p>
                  We offer a <strong className="text-primary">transparent, direct partnership</strong>, avoiding the &quot;ghost work&quot; and bureaucratic overhead common with larger firms. By tapping into our <strong className="text-dark dark:text-white">extensive network</strong>, we can bring in specialized AI knowledge precisely when needed.
                </p>
                <p>
                  We&apos;re your reliable, fast-paced partner committed to implementing AI solutions that provide <strong className="text-primary">tangible results and empower your workforce</strong>.
                </p>
              </div>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-dark-text">AI Specialists</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-dark-text">Ghost Work</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-dark-text">AI Monitoring</div>
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
                Cutting-edge AI and machine learning tools for practical automation
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white"
                        >
                          {item}
                        </span>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-24 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-10"></div>
        
        <div className="px-4 xl:container">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white">
              <span className="tracking-wide">AI TRANSFORMATION</span>
            </div>
            <h2 className="mb-8 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
              Ready to Unlock Your Business&apos;s AI Potential?
            </h2>
            <div className="mx-auto max-w-3xl space-y-6 text-lg text-white/90 leading-relaxed lg:text-xl lg:leading-relaxed">
              <p className="mb-10 text-lg leading-relaxed text-white/90 lg:text-xl lg:leading-relaxed">
                Let&apos;s explore how smart automation can transform your operations and empower your team.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href={`/${locale}#contact`}
                className="group inline-flex min-h-[48px] items-center rounded-sm bg-white px-8 py-4 font-heading text-base font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
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
                className="group inline-flex min-h-[48px] items-center rounded-sm border-2 border-white/30 px-8 py-4 font-heading text-base font-medium text-white transition-all hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Meet Our AI Experts
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
            
            <div className="mt-8 text-sm leading-relaxed text-white/80">
              Free consultation • No commitment • Expert advice
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