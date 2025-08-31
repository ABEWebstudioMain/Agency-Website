"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import { useState } from "react";

export default function Support() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    { value: "custom-software", label: "Custom Software Development & Digitalization" },
    { value: "devsecops", label: "DevSecOps Platform Solutions" },
    { value: "cloud-migrations", label: "Cloud Migrations & Consultation" },
    { value: "ai-optimization", label: "AI-Powered Process Optimization & Automation" },
    { value: "custom-consultation", label: "Custom Consultation" }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20 sm:py-24 lg:py-32 dark:from-primary/10 dark:via-dark dark:to-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
      
      <div className="px-4 xl:container">
        {/* Header Section */}
        <div className="relative mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary dark:bg-primary/20">
            GET IN TOUCH
          </span>
          <h2 className="mb-6 font-heading text-4xl font-bold text-dark sm:text-5xl md:text-6xl dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-dark-text leading-relaxed">
            Let&apos;s discuss your project and explore how our expertise can drive your digital transformation. 
            Get a personalized consultation tailored to your specific needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="group rounded-sm bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:shadow-lg dark:bg-[#1D232D]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
              Email Us
            </h3>
            <p className="mb-3 text-sm text-dark-text">
              Get in touch via email
            </p>
            <a
              href="mailto:hello@58solutions.com"
              className="font-medium text-primary hover:text-primary/80"
            >
              hello@58solutions.com
            </a>
          </div>

          <div className="group rounded-sm bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:shadow-lg dark:bg-[#1D232D]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
              Call Us
            </h3>
            <p className="mb-3 text-sm text-dark-text">
              Speak directly with our team
            </p>
            <a
              href="tel:+4969123456789"
              className="font-medium text-primary hover:text-primary/80"
            >
              +49 69 123 456 789
            </a>
          </div>

          <div className="group rounded-sm bg-white/80 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:shadow-lg dark:bg-[#1D232D]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current text-primary">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <h3 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white">
              Schedule Appointment
            </h3>
            <p className="mb-3 text-sm text-dark-text">
              Book a consultation call
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Schedule Meeting
            </a>
          </div>
        </div>

        {/* Contact Form - Temporarily Deactivated */}
        {/* 
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-sm bg-white/90 p-8 shadow-lg backdrop-blur-sm dark:bg-[#1D232D]/90 lg:p-12">
            <div className="mb-8 text-center">
              <h3 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                Start Your Project Today
              </h3>
              <p className="text-base text-dark-text">
                Kleiner Hirschgraben 8<br />60311 Frankfurt am Main
              </p>
            </div>

            <form className="space-y-8" action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group">
                  <label htmlFor="firstName" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark placeholder-dark-text/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="lastName" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark placeholder-dark-text/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="group">
                  <label htmlFor="email" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark placeholder-dark-text/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                    placeholder="your.email@yourcompany.com"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="phone" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark placeholder-dark-text/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                    placeholder="+49 69 71 16 36 36"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="group">
                  <label htmlFor="company" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark placeholder-dark-text/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="group relative">
                  <label htmlFor="service" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                    Service Interest *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex w-full items-center justify-between rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                    >
                      <span className={selectedService ? "text-dark dark:text-white" : "text-dark-text/60"}>
                        {selectedService 
                          ? serviceOptions.find(option => option.value === selectedService)?.label 
                          : "Select a service..."
                        }
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className={`fill-current text-dark-text transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M8 10.5L3.5 6L4.5 5L8 8.5L11.5 5L12.5 6L8 10.5Z" />
                      </svg>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full z-50 mt-2 w-full rounded-sm border border-stroke bg-white shadow-lg dark:border-[#2C3443] dark:bg-[#1D232D]">
                        {serviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setSelectedService(option.value);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-6 py-3 text-left text-base text-dark hover:bg-primary/5 dark:text-white dark:hover:bg-primary/10"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input type="hidden" name="service" value={selectedService} />
                </div>
              </div>

              <div className="group">
                <label htmlFor="budget" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                  Project Budget (Optional)
                </label>
                <select
                  name="budget"
                  id="budget"
                  className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under €10,000</option>
                  <option value="10k-25k">€10,000 - €25,000</option>
                  <option value="25k-50k">€25,000 - €50,000</option>
                  <option value="50k-100k">€50,000 - €100,000</option>
                  <option value="over-100k">Over €100,000</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="timeline" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                  Project Timeline
                </label>
                <select
                  name="timeline"
                  id="timeline"
                  className="w-full rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                >
                  <option value="">When do you want to start?</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-months-plus">6+ months</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="message" className="mb-3 block font-heading text-sm font-medium text-dark dark:text-white">
                  Project Details *
                </label>
                <textarea
                  rows={6}
                  name="message"
                  id="message"
                  required
                  className="w-full resize-none rounded-sm border border-stroke bg-white px-6 py-4 text-base text-dark placeholder-dark-text/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-[#2C3443] dark:bg-[#1D232D] dark:text-white dark:focus:border-primary"
                  placeholder="Tell us about your project, goals, challenges, and any specific requirements you have in mind..."
                ></textarea>
              </div>

              <div className="group">
                <label className="flex cursor-pointer items-start gap-4 text-sm text-dark-text">
                  <input
                    type="checkbox"
                    required
                    className="peer sr-only"
                  />
                  <span className="group flex h-[1lh] shrink-0 items-center">
                    <span className="flex size-5 items-center justify-center rounded border border-stroke dark:border-[#414652]">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="currentColor"
                        className="group-peer-checked:opacity-100 text-primary opacity-0 transition-opacity"
                      >
                        <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" strokeWidth="0.4" />
                      </svg>
                    </span>
                  </span>
                  <span className="leading-relaxed">
                    I agree to the <a href={`/${locale}/terms-conditions`} className="text-primary hover:underline">Terms & Conditions</a> and <a href={`/${locale}/privacy-policy`} className="text-primary hover:underline">Privacy Policy</a>. I consent to being contacted about this inquiry. *
                  </span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center rounded-sm bg-primary px-12 py-4 font-heading text-base font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  Send Project Inquiry
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="ml-2 fill-current transition-transform group-hover:translate-x-1"
                  >
                    <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                  </svg>
                </button>
              </div>

              <div className="rounded-sm bg-primary/5 p-6 text-center dark:bg-primary/10">
                <p className="text-sm text-dark-text">
                  <strong className="text-dark dark:text-white">What happens next?</strong><br />
                  We&apos;ll review your inquiry and get back to you within 24 hours with a personalized proposal and next steps.
                </p>
              </div>
            </form>
          </div>
        </div>
        */}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-base text-dark-text">
            Prefer to talk directly? Schedule a free consultation call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hey@58agents.com"
              className="inline-flex items-center rounded-sm border border-primary px-6 py-3 font-heading text-base font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M14 2H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM2 3h12l-6 4L2 3zm0 10V4.5l6 4 6-4V13H2z"/>
              </svg>
              Email Us
            </a>
            <a
              href="tel:+496971163636"
              className="inline-flex items-center rounded-sm bg-primary px-6 py-3 font-heading text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M3.654 1.328l-.8 1.388a.5.5 0 00.098.608l1.85 1.85a.5.5 0 00.707 0l.8-.8a.5.5 0 01.707 0l3.182 3.182a.5.5 0 010 .707l-.8.8a.5.5 0 000 .707l1.85 1.85a.5.5 0 00.608.098l1.388-.8A.5.5 0 0013 10.5V13a3 3 0 01-3 3H6a3 3 0 01-3-3V3a3 3 0 013-3h2.5a.5.5 0 01.354.854l-.8 1.388a.5.5 0 01-.608.098L5.596 1.49a.5.5 0 00-.608.098z"/>
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}