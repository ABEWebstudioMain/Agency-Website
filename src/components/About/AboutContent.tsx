"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import TabPanel from "./TabPanel";

export default function AboutContent() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <div className="space-y-24 lg:space-y-32">
      {/* About Section - Left Aligned */}
      <TabPanel
        title={t('common.about.content.section1.title')}
        image1='/images/illustrations/undraw_global-team_8jok.svg'
        image1Alt='Global team collaboration illustration'
        image2='/images/illustrations/undraw_lightbulb-moment_16av.svg'
        image2Alt='Innovation and ideas illustration'
        leftContent={false}
      >
        {t('common.about.content.section1.paragraphs').map((paragraph: string, index: number) => (
          <p key={index} className='mb-6 text-base text-dark-text leading-relaxed'>
            {paragraph}
          </p>
        ))}
        
        {/* Key Highlights */}
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          {t('common.about.content.section1.highlights').map((highlight: any, index: number) => (
            <div key={index} className='flex items-start space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
                <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current text-primary">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div>
                <h4 className='font-heading text-base font-medium text-dark dark:text-white'>{highlight.title}</h4>
                <p className='text-sm text-dark-text'>{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      {/* Mission Section - Right Aligned */}
      <TabPanel
        title={t('common.about.content.section2.title')}
        image1='/images/illustrations/undraw_mind-map_i9bv.svg'
        image1Alt='Strategic planning and process optimization illustration'
        image2='/images/illustrations/undraw_designing-components_kb05.svg'
        image2Alt='Efficient workflow and component design illustration'
        leftContent={true}
      >
        {t('common.about.content.section2.paragraphs').map((paragraph: string, index: number) => (
          <p key={index} className='mb-6 text-base text-dark-text leading-relaxed'>
            {paragraph}
          </p>
        ))}
        
        {/* Philosophy Pillars */}
        <div className='mt-8 space-y-4'>
          {t('common.about.content.section2.pillars').map((pillar: any, index: number) => (
            <div key={index} className='border-l-4 border-primary/30 pl-4'>
              <h4 className='font-heading text-base font-medium text-dark dark:text-white mb-2'>{pillar.title}</h4>
              <p className='text-sm text-dark-text'>{pillar.description}</p>
            </div>
          ))}
        </div>
      </TabPanel>

      {/* Vision Section - Left Aligned */}
      <TabPanel
        title={t('common.about.content.section3.title')}
        image1='/images/illustrations/undraw_data-analysis_b7cp.svg'
        image1Alt='Data analysis and digital transformation illustration'
        image2='/images/illustrations/undraw_metrics_5v8d.svg'
        image2Alt='Performance metrics and growth illustration'
        leftContent={false}
      >
        {t('common.about.content.section3.paragraphs').map((paragraph: string, index: number) => (
          <p key={index} className='mb-6 text-base text-dark-text leading-relaxed'>
            {paragraph}
          </p>
        ))}
        
        {/* Our Services */}
        <div className='mt-8 rounded-sm bg-primary/5 p-6 dark:bg-primary/10'>
          <h4 className='font-heading text-lg font-medium text-dark dark:text-white mb-4'>
            {locale === 'de' ? 'Unsere Kerndienstleistungen' : 'Our Core Services'}
          </h4>
          <div className='grid gap-4 sm:grid-cols-2'>
            {t('common.about.content.section3.services').map((service: string, index: number) => (
              <div key={index} className='flex items-center space-x-3'>
                <div className='h-2 w-2 rounded-full bg-primary'></div>
                <span className='text-sm font-medium text-dark dark:text-white'>{service}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className='mt-6 text-center'>
          <p className='text-sm font-medium text-primary'>
            &quot;{t('common.about.content.section3.quote')}&quot;
          </p>
        </div>
      </TabPanel>
    </div>
  );
}