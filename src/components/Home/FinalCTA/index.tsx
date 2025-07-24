"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

export default function FinalCTA() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 py-16 sm:py-20 lg:py-[100px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-noise-pattern bg-cover bg-center opacity-10"></div>
      
      {/* Background Shapes */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <svg
          width="1215"
          height="259"
          viewBox="0 0 1215 259"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_63_363)">
            <rect
              x="450"
              y="189"
              width="315"
              height="378"
              fill="url(#paint0_linear_63_363)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_63_363"
              x="0"
              y="-261"
              width="1215"
              height="1278"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="225"
                result="effect1_foregroundBlur_63_363"
              />
            </filter>
            <linearGradient
              id="paint0_linear_63_363"
              x1="420.718"
              y1="263.543"
              x2="585.338"
              y2="628.947"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative px-4 xl:container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Build Your Digital Future?
          </h2>
          
          <p className="mb-10 text-lg text-white/90 lg:text-xl">
            Partner with a team that combines deep expertise with agile delivery. Let's discuss how our tailored solutions can achieve your strategic goals.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-sm bg-white px-8 py-4 font-heading text-base font-medium text-primary transition-all hover:bg-white/95 hover:shadow-lg"
            >
              Schedule Your Free Consultation Today
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="ml-2 fill-current"
              >
                <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" />
              </svg>
            </Link>
            
            <Link
              href="#contact"
              className="inline-flex items-center rounded-sm border-2 border-white/30 px-8 py-4 font-heading text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              Contact Our Experts
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-white/80">
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
              100% GDPR-compliant
            </div>
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
              No commitment required
            </div>
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2 fill-current">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
              Free initial consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}