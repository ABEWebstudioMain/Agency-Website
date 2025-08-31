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
      quote: "The 58agents team quickly understood our complex needs and delivered an exceptional solution with remarkable efficiency. Their transparency and direct communication were a breath of fresh air compared to our previous experiences with large consultancies.",
      name: "Sarah M.",
      role: "Head of Operations",
      company: "European Logistics Provider",
      avatar: "/images/illustrations/undraw_profile_pic.svg"
    },
    {
      id: 2,
      quote: "Working with 58agents transformed our entire development process. Their expertise in DevSecOps and direct, hands-on approach helped us achieve what we thought would take years in just a few months.",
      name: "Marcus W.",
      role: "CTO",
      company: "FinTech Startup",
      avatar: "/images/illustrations/undraw_profile_pic.svg"
    },
    {
      id: 3,
      quote: "The cloud migration was seamless and the cost savings were immediate. 58agents delivered exactly what they promised, when they promised it, with complete transparency throughout the process.",
      name: "Lisa C.",
      role: "IT Director",
      company: "Enterprise SaaS Provider",
      avatar: "/images/illustrations/undraw_profile_pic.svg"
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
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with 58Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-sm bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-[#1D232D] lg:p-8"
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
              
              <blockquote className="mb-6 text-base text-dark-text leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-contain bg-gray-100 dark:bg-gray-800"
                    style={{ filter: 'hue-rotate(220deg) saturate(1.2)' }}
                  />
                </div>
                <div>
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