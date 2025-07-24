"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

export default function SuccessSnapshot() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">SUCCESS SNAPSHOT</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Our Impact in Action
          </h2>
          <p className="text-base text-dark-text">
            Real results from real partnerships. See how we've helped businesses transform their operations.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-primary/5 to-primary/10 p-8 dark:from-primary/10 dark:to-primary/20 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-5"></div>
            
            {/* Content */}
            <div className="relative">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white">
                  -40% Manual Work
                </div>
                <div className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white">
                  6 Months ROI
                </div>
                <div className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white">
                  Enterprise Scale
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h3 className="mb-4 font-heading text-2xl font-semibold text-dark dark:text-white lg:text-3xl">
                    European Logistics Transformation
                  </h3>
                  <p className="mb-6 text-base text-dark-text leading-relaxed lg:text-lg">
                    "Enabled a European logistics firm to reduce manual data entry by 40% through custom process automation, resulting in significant cost savings and improved accuracy across their supply chain operations."
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-dark-text">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mr-3 fill-current text-green-500">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      Custom automation workflows implemented
                    </div>
                    <div className="flex items-center text-sm text-dark-text">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mr-3 fill-current text-green-500">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      Real-time data processing and validation
                    </div>
                    <div className="flex items-center text-sm text-dark-text">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mr-3 fill-current text-green-500">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      Seamless integration with existing systems
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-6xl font-bold text-primary lg:text-7xl">
                      40%
                    </div>
                    <div className="text-lg font-medium text-dark dark:text-white">
                      Reduction in
                    </div>
                    <div className="text-lg font-medium text-dark dark:text-white">
                      Manual Work
                    </div>
                    <div className="mt-4 text-sm text-dark-text">
                      Achieved in 6 months
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center lg:mt-12">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-sm bg-primary px-8 py-3 font-heading text-base font-medium text-white transition-colors hover:bg-primary/90"
                >
                  View All Case Studies
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="ml-2 fill-current"
                  >
                    <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}