"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

const DynamicTypewriter = dynamic(
  () => import('react-simple-typewriter').then((mod) => ({ default: mod.Typewriter })),
  { ssr: false }
);

export default function Hero() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <section
      id='home'
      className='relative z-40 overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[170px]'
    >
      <div className='px-4 xl:container'>
        <div className='-mx-4 flex flex-wrap items-center'>
          <div className='w-full px-3 lg:w-1/2'>
            <div className='mx-auto mb-12 max-w-[530px] text-center lg:mb-0 lg:ml-0 lg:text-left'>
              <span className='bg-primary/5 font-heading text-primary mb-8 inline-block rounded-full px-5 py-[10px] text-base dark:bg-white/10 dark:text-white'>
                <span className='bg-primary mr-2 inline-block h-2 w-2 rounded-full'></span>
                {t('common.hero.badge')}
              </span>
              <h1 className='font-heading mb-5 text-2xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white'>
                {t('common.hero.title')}{" "}
                <span className="text-primary">
                  <DynamicTypewriter
                    words={t('common.hero.rotatingWords').split(',')}
                    cursor
                    loop={0}
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className='text-dark-text mb-12 text-base lg:text-lg leading-relaxed'>
                {t('common.hero.description')}
              </p>
              <div className='flex flex-wrap items-center justify-center lg:justify-start'>
                <a
                  href='#contact'
                  className='bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-[10px] text-base text-white md:px-8 md:py-[14px]'
                >
                  {t('common.hero.getStarted')}
                  <span className='pl-3'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href='#services'
                  className='font-heading text-dark hover:text-primary dark:hover:text-primary inline-flex items-center rounded-sm px-8 py-[14px] text-base dark:text-white'
                >
                  <span className='pr-3'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'
                    >
                      <path d='M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z' />
                    </svg>
                  </span>
                  {t('common.hero.ourExpertise')}
                </a>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0'>
              <div className='absolute right-0 top-0 lg:w-11/12'>
                <img
                  src='/images/illustrations/undraw_visionary-technology_f6b3.svg'
                  alt="Visionary technology and innovation illustration"
                  className='w-full h-auto object-contain aspect-[1.08]'
                />
              </div>
              <div className='absolute bottom-0 left-0 z-10'>
                <img
                  src='/images/illustrations/undraw_website-builder_4go7.svg'
                  alt="Website development and software engineering illustration"
                  className='w-full h-auto object-contain aspect-[1.08]'
                  style={{ 
                    maxWidth: '350px', 
                    maxHeight: '420px',
                    background: 'linear-gradient(135deg, #4a6cf7 0%, #ffffff 50%, #4a6cf7 100%)',
                    mask: 'url(/images/illustrations/undraw_website-builder_4go7.svg) no-repeat center',
                    maskSize: 'contain'
                  }}
                />
              </div>
              <div className='absolute bottom-0 left-0'>
                <svg
                  width='72'
                  height='38'
                  viewBox='0 0 72 38'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute right-0 top-0 -z-10'>
        <svg
          width='1356'
          height='860'
          viewBox='0 0 1356 860'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            opacity='0.5'
            filter='url(#filter0_f_201_2181)'
          >
            <rect
              x='450.088'
              y='-126.709'
              width='351.515'
              height='944.108'
              transform='rotate(-34.6784 450.088 -126.709)'
              fill='url(#paint0_linear_201_2181)'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_201_2181'
              x='0.0878906'
              y='-776.711'
              width='1726.24'
              height='1876.4'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood
                floodOpacity='0'
                result='BackgroundImageFix'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='225'
                result='effect1_foregroundBlur_201_2181'
              />
            </filter>
            <linearGradient
              id='paint0_linear_201_2181'
              x1='417.412'
              y1='59.4717'
              x2='966.334'
              y2='603.857'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#ABBCFF' />
              <stop
                offset='0.859375'
                stopColor='#4A6CF7'
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='absolute bottom-0 left-0 -z-10'>
        <svg
          width='1469'
          height='498'
          viewBox='0 0 1469 498'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            opacity='0.3'
            filter='url(#filter0_f_201_2182)'
          >
            <rect
              y='450'
              width='1019'
              height='261'
              fill='url(#paint0_linear_201_2182)'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_201_2182'
              x='-450'
              y='0'
              width='1919'
              height='1161'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood
                floodOpacity='0'
                result='BackgroundImageFix'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='225'
                result='effect1_foregroundBlur_201_2182'
              />
            </filter>
            <linearGradient
              id='paint0_linear_201_2182'
              x1='-94.7239'
              y1='501.47'
              x2='-65.8058'
              y2='802.2'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#ABBCFF' />
              <stop
                offset='0.859375'
                stopColor='#4A6CF7'
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}