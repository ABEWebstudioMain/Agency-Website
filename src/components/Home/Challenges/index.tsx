"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

export default function Challenges() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const challenges = [
    {
      id: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-red-500">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M21.5 10.5L10.5 21.5M10.5 10.5l11 11"/>
        </svg>
      ),
      title: "Slow, costly software development cycles?",
      description: "Traditional development approaches eating into your budget and timeline"
    },
    {
      id: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-orange-500">
          <path d="M16 2L2 9v14c0 8.84 6.16 15.56 14 16 7.84-.44 14-7.16 14-16V9L16 2zm0 2.18L28 11v12c0 7.16-5.16 12.84-12 13-6.84-.16-12-5.84-12-13V11l12-6.82z"/>
          <path d="M12 16l3 3 7-7"/>
        </svg>
      ),
      title: "Outdated systems hindering growth and innovation?",
      description: "Legacy infrastructure blocking your competitive advantage"
    },
    {
      id: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-yellow-500">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 8v8l5.66 3.34"/>
        </svg>
      ),
      title: "High expenses from traditional cloud infrastructure?",
      description: "Overprovisioned resources and inefficient cloud spending"
    },
    {
      id: 4,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-purple-500">
          <path d="M4 6h24v2H4zM4 12h24v2H4zM4 18h24v2H4zM4 24h24v2H4z"/>
        </svg>
      ),
      title: "Repetitive tasks consuming your team's valuable time?",
      description: "Manual processes preventing focus on strategic initiatives"
    },
    {
      id: 5,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current text-gray-500">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
          <path d="M16 8v8h8"/>
        </svg>
      ),
      title: "Lack of transparency or hidden costs from large consultancies?",
      description: "Unclear pricing and communication from traditional service providers"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-[100px] dark:bg-[#1A1D23]">
      <div className="px-4 xl:container">
        <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-16 lg:mb-20">
          <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Are You Facing These Common IT Challenges?
          </h2>
          <p className="text-base text-dark-text">
            Many businesses struggle with the same technology roadblocks. Sound familiar?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="group rounded-sm bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-[#1D232D] lg:p-8"
            >
              <div className="mb-4 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-medium text-dark dark:text-white lg:text-xl">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-dark-text lg:text-base">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}