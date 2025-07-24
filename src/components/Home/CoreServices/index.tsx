"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

export default function CoreServices() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const services = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="fill-current text-primary">
          <path d="M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM6 10h36v4H6v-4zm0 28V18h36v20H6z"/>
          <path d="M10 22h4v4h-4zM18 22h16v2H18zM18 26h12v2H18zM10 30h4v4h-4zM18 30h16v2H18zM18 34h8v2h-8z"/>
        </svg>
      ),
      title: "Custom Software Development & Digitalization",
      description: "Tailored applications and process automation to drive efficiency and unlock innovation for your specific business needs.",
      link: "#"
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="fill-current text-primary">
          <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z"/>
          <path d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
          <path d="M24 18v6l4 2"/>
          <circle cx="24" cy="24" r="2"/>
        </svg>
      ),
      title: "DevSecOps Platform Solutions",
      description: "Accelerate software delivery and strengthen security with robust, automated pipelines and cloud-native platforms.",
      link: "#"
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="fill-current text-primary">
          <path d="M40 16c0-1.1-.9-2-2-2h-4c0-6.627-5.373-12-12-12S10 7.373 10 14H6c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V16zM22 6c4.418 0 8 3.582 8 8H14c0-4.418 3.582-8 8-8zm16 36H6V18h4v4h4v-4h16v4h4v-4h4v24z"/>
          <path d="M24 26c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      title: "Cloud Migrations & Consultation",
      description: "Seamlessly transition to the cloud, optimize your infrastructure, and unlock scalability and cost efficiencies.",
      link: "#"
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="fill-current text-primary">
          <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z"/>
          <path d="M32 16H16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm0 14H16V18h16v12z"/>
          <path d="M20 22h8v2h-8zM20 26h6v2h-6z"/>
          <circle cx="18" cy="20" r="1"/>
          <circle cx="18" cy="24" r="1"/>
          <circle cx="18" cy="28" r="1"/>
        </svg>
      ),
      title: "AI-Powered Process Optimization",
      description: "Free your team from tedious tasks with practical AI solutions that enhance efficiency and provide actionable insights.",
      link: "#"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-[100px] dark:bg-[#1A1D23]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">OUR CORE SERVICES</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Our Core Expertise: How We Can Transform Your Business
          </h2>
          <p className="text-base text-dark-text">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-sm bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-[#1D232D] lg:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 transition-all duration-300 group-hover:bg-primary/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                {service.icon}
              </div>
              
              <h3 className="mb-4 font-heading text-xl font-medium text-dark dark:text-white lg:text-2xl">
                {service.title}
              </h3>
              
              <p className="mb-6 text-base text-dark-text leading-relaxed">
                {service.description}
              </p>
              
              <Link
                href={service.link}
                className="inline-flex items-center font-heading text-base font-medium text-primary transition-colors hover:text-primary/80"
              >
                Learn More
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
          ))}
        </div>
      </div>
    </section>
  );
}