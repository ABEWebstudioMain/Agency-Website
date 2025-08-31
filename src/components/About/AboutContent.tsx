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
        title="Your Agile Partner for Digital Excellence"
        image1='https://illustrations.undraw.co/svg/team_collaboration.svg'
        image1Alt='Team collaboration illustration'
        image2='https://illustrations.undraw.co/svg/business_plan.svg'
        image2Alt='Business planning illustration'
        leftContent={false}
      >
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          At 58agents, we believe that exceptional IT consulting doesn&apos;t require a bloated organization. It demands deep expertise, agile execution, and a transparent partnership built on trust. We are a dedicated team of highly experienced software and IT experts, united by a passion for solving complex challenges and delivering tangible results.
        </p>
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          Our journey began with a clear vision: to offer a superior alternative to traditional large-scale consultancies. We saw an opportunity to provide the same (or even higher) level of senior expertise and strategic insight, but with the speed, efficiency, and personal commitment that only a focused, lean team can offer.
        </p>
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          We&apos;re not just consultants; we&apos;re architects, developers, and problem-solvers who immerse ourselves in your challenges to craft future-proof solutions.
        </p>
        
        {/* Key Highlights */}
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          <div className='flex items-start space-x-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current text-primary">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div>
              <h4 className='font-heading text-base font-medium text-dark dark:text-white'>Direct Access to Senior Talent</h4>
              <p className='text-sm text-dark-text'>Work directly with experienced professionals</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current text-primary">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div>
              <h4 className='font-heading text-base font-medium text-dark dark:text-white'>Agile & Transparent Workflow</h4>
              <p className='text-sm text-dark-text'>Faster delivery with complete visibility</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current text-primary">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div>
              <h4 className='font-heading text-base font-medium text-dark dark:text-white'>Network-Powered Solutions</h4>
              <p className='text-sm text-dark-text'>Extensive network of specialists when needed</p>
            </div>
          </div>
          
          <div className='flex items-start space-x-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current text-primary">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div>
              <h4 className='font-heading text-base font-medium text-dark dark:text-white'>Fair Pricing, Exceptional Value</h4>
              <p className='text-sm text-dark-text'>Competitive rates with maximum ROI</p>
            </div>
          </div>
        </div>
      </TabPanel>

      {/* Mission Section - Right Aligned */}
      <TabPanel
        title="Less Ghost Work, More Value"
        image1='https://undraw.co/illustrations/agile'
        image1Alt='Agile development illustration'
        image2='https://undraw.co/illustrations/process'
        image2Alt='Efficient process illustration'
        leftContent={true}
      >
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          We&apos;ve all experienced it: the large consultancy model where junior staff do much of the heavy lifting, communication is a maze, and costs seem to mysteriously inflate. We&apos;re different.
        </p>
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          Our efficient processes mean faster delivery, clear communication, and complete visibility into project progress. You&apos;re always in the loop. While we&apos;re a lean core team, we leverage an extensive, trusted network of specialists to bridge any knowledge gaps and scale capabilities precisely when your project demands it.
        </p>
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          This means comprehensive solutions without unnecessary overhead. We&apos;re not just looking for projects; we&apos;re looking to build lasting relationships. Your sustained success is our ultimate measure of achievement.
        </p>
        
        {/* Philosophy Pillars */}
        <div className='mt-8 space-y-4'>
          <div className='border-l-4 border-primary/30 pl-4'>
            <h4 className='font-heading text-base font-medium text-dark dark:text-white mb-2'>Direct Access to Senior Talent</h4>
            <p className='text-sm text-dark-text'>No middle-man or layers of bureaucracy</p>
          </div>
          
          <div className='border-l-4 border-primary/30 pl-4'>
            <h4 className='font-heading text-base font-medium text-dark dark:text-white mb-2'>Network-Powered Solutions</h4>
            <p className='text-sm text-dark-text'>Comprehensive solutions without unnecessary overhead</p>
          </div>
          
          <div className='border-l-4 border-primary/30 pl-4'>
            <h4 className='font-heading text-base font-medium text-dark dark:text-white mb-2'>Long-Term Partnership</h4>
            <p className='text-sm text-dark-text'>Building lasting relationships focused on your success</p>
          </div>
        </div>
      </TabPanel>

      {/* Vision Section - Left Aligned */}
      <TabPanel
        title="Your Digital Future, Realized"
        image1='https://undraw.co/illustrations/innovation'
        image1Alt='Innovation illustration'
        image2='https://undraw.co/illustrations/growth'
        image2Alt='Business growth illustration'
        leftContent={false}
      >
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          We&apos;re driven by the opportunity to empower businesses like yours to thrive in the digital age. Whether it&apos;s crafting custom software to optimize core processes, building secure DevSecOps platforms, navigating complex cloud migrations, or leveraging AI to automate tedious tasks, our goal is to deliver solutions that are not just technically sound, but strategically impactful.
        </p>
        <p className='mb-6 text-base text-dark-text leading-relaxed'>
          We favor efficiency, collaboration, and long-term partnership over one-off projects. This approach enables our clients to innovate rapidly, scale sustainably, and deliver experiences that turn users into fans.
        </p>
        
        {/* Our Services */}
        <div className='mt-8 rounded-sm bg-primary/5 p-6 dark:bg-primary/10'>
          <h4 className='font-heading text-lg font-medium text-dark dark:text-white mb-4'>Our Core Services</h4>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='flex items-center space-x-3'>
              <div className='h-2 w-2 rounded-full bg-primary'></div>
              <span className='text-sm font-medium text-dark dark:text-white'>Custom Software Development</span>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='h-2 w-2 rounded-full bg-primary'></div>
              <span className='text-sm font-medium text-dark dark:text-white'>DevSecOps Platforms</span>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='h-2 w-2 rounded-full bg-primary'></div>
              <span className='text-sm font-medium text-dark dark:text-white'>Cloud Migrations</span>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='h-2 w-2 rounded-full bg-primary'></div>
              <span className='text-sm font-medium text-dark dark:text-white'>AI Process Optimization</span>
            </div>
          </div>
        </div>
        
        <div className='mt-6 text-center'>
          <p className='text-sm font-medium text-primary'>
            "Experience the difference of a true IT partner committed to your success"
          </p>
        </div>
      </TabPanel>
    </div>
  );
}