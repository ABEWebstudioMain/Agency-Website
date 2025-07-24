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
      quote: "The 58Solutions team quickly understood our complex needs and delivered an exceptional solution with remarkable efficiency. Their transparency was a breath of fresh air.",
      name: "Sarah Mitchell",
      role: "Head of Operations",
      company: "Major European Enterprise",
      avatar: "/images/testimonial/image-1.jpg"
    },
    {
      id: 2,
      quote: "Working with 58Solutions transformed our development process. Their agile approach and deep expertise helped us launch our product 3 months ahead of schedule.",
      name: "Marcus Weber",
      role: "CTO",
      company: "Tech Startup",
      avatar: "/images/hero/image-1.jpg"
    },
    {
      id: 3,
      quote: "The cloud migration was seamless and the cost savings were immediate. 58Solutions delivered exactly what they promised, when they promised it.",
      name: "Lisa Chen",
      role: "IT Director",
      company: "Manufacturing Corp",
      avatar: "/images/team/image-2.jpg"
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
            Don't just take our word for it. Here's what our clients say about working with 58Solutions.
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
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
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

        {/* Client Logos */}
        <div className="border-t pt-12 dark:border-[#2E333D] lg:pt-16">
          <div className="mb-8 text-center">
            <h3 className="font-heading text-lg font-medium text-dark dark:text-white">
              Trusted by Industry Leaders
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex h-12 w-32 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
              >
                <Image
                  src={client.darkLogo}
                  alt={client.name}
                  width={128}
                  height={48}
                  className="hidden h-8 w-auto object-contain dark:block"
                />
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={128}
                  height={48}
                  className="h-8 w-auto object-contain dark:hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}