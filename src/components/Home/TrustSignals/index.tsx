"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";

export default function TrustSignals() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const testimonials = [
    {
      id: 1,
      quote: t('common.trustSignals.testimonials.sarah.quote'),
      name: t('common.trustSignals.testimonials.sarah.name'),
      role: t('common.trustSignals.testimonials.sarah.role'),
      company: t('common.trustSignals.testimonials.sarah.company'),
      avatar: "/images/illustrations/undraw_cool-girl-avatar_fifz.svg"
    },
    {
      id: 2,
      quote: t('common.trustSignals.testimonials.marcus.quote'),
      name: t('common.trustSignals.testimonials.marcus.name'),
      role: t('common.trustSignals.testimonials.marcus.role'),
      company: t('common.trustSignals.testimonials.marcus.company'),
      avatar: "/images/illustrations/undraw_professor-avatar_y9ai.svg"
    },
    {
      id: 3,
      quote: t('common.trustSignals.testimonials.lisa.quote'),
      name: t('common.trustSignals.testimonials.lisa.name'),
      role: t('common.trustSignals.testimonials.lisa.role'),
      company: t('common.trustSignals.testimonials.lisa.company'),
      avatar: "/images/illustrations/undraw_cool-girl-avatar_fifz.svg"
    }
  ];

  const clientLogos = [
    { name: "UIDeck", logo: "/images/brands/uideck.svg", darkLogo: "/images/brands/uideck-2.svg" },
    { name: "TailAdmin", logo: "/images/brands/tailadmin.svg", darkLogo: "/images/brands/tailadmin-2.svg" },
    { name: "GrayGrids", logo: "/images/brands/graygrids.svg", darkLogo: "/images/brands/graygrids-2.svg" },
    { name: "LineIcons", logo: "/images/brands/lineicons.svg", darkLogo: "/images/brands/lineicons-2.svg" },
    { name: "PlainAdmin", logo: "/images/brands/plainadmin.svg", darkLogo: "/images/brands/plainadmin-2.svg" }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-[100px] dark:bg-[#1A1D23]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <span className="title">TESTIMONIALS</span>
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            What Our Partners Say
          </h2>
          <p className="text-base text-dark-text">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Unit05.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex h-full flex-col rounded-sm bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-[#1D232D] lg:p-8"
            >
              <div className="mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="fill-current text-primary/20"
                >
                  <path d="M10 8C6.686 8 4 10.686 4 14c0 3.314 2.686 6 6 6h2v8h8V14c0-3.314-2.686-6-6-6H10zm12 0c-3.314 0-6 2.686-6 6v14h8v-8h2c3.314 0 6-2.686 6-6s-2.686-6-6-6h-4z"/>
                </svg>
              </div>
              
              <blockquote className="mb-6 flex-grow text-base text-dark-text leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              <div className="mt-auto w-full text-center">
                <div className="w-full text-center">
                  <div className="font-heading text-base font-medium text-dark dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-dark-text">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}