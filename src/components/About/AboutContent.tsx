"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import TabPanel from "./TabPanel";


export default function AboutContent() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  const tabButtons = [
    {
      id: crypto.randomUUID(),
      title: t('common.about.tabs.about'),
      value: "about"
    },
    {
      id: crypto.randomUUID(),
      title: t('common.about.tabs.mission'),
      value: "mission"
    },
    {
      id: crypto.randomUUID(),
      title: t('common.about.tabs.vision'),
      value: "vision"
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  return (
    <>
      <div className='tabButtons flex w-full items-center justify-around'>
        {tabButtons.map((tabButton) => (
          <button
            key={tabButton?.id}
            onClick={() => setActiveTab(tabButton?.value)}
            className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${activeTab === tabButton?.value ? "border-primary text-primary dark:border-primary" : "hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary"}`}
          >
            {tabButton?.title}
          </button>
        ))}
      </div>
      <div className='w-full'>
        {activeTab === "about" && (
          <TabPanel
            title={t('common.about.content.about.title')}
            image1='/images/about/image-1.jpg'
            image1Alt='about image 1'
            image2='/images/about/image-2.jpg'
            image2Alt='about image 2'
          >
            <p className='mb-6 text-base text-dark-text'>
              {t('common.about.content.about.description')}
            </p>
            <p className='mb-6 text-base text-dark-text'>
              {t('common.about.content.about.description')}
            </p>
            <p className='text-base text-dark-text'>
              {t('common.about.content.about.description')}
            </p>
          </TabPanel>
        )}

        {activeTab === "mission" && (
          <TabPanel
            title={t('common.about.content.mission.title')}
            image1='/images/about/image-1.jpg'
            image1Alt='about image 1'
            image2='/images/about/image-2.jpg'
            image2Alt='about image 2'
            leftContent
          >
            <p className='mb-6 text-base text-dark-text'>
              {t('common.about.content.mission.description')}
            </p>
            <p className='mb-6 text-base text-dark-text'>
              {t('common.about.content.mission.description')}
            </p>
          </TabPanel>
        )}

        {activeTab === "vision" && (
          <TabPanel
            title={t('common.about.content.vision.title')}
            image1='/images/about/image-1.jpg'
            image1Alt='about image 1'
            image2='/images/about/image-2.jpg'
            image2Alt='about image 2'
          >
            <p className='mb-6 text-base text-dark-text'>
              {t('common.about.content.vision.description')}
            </p>
            <p className='mb-6 text-base text-dark-text'>
              {t('common.about.content.vision.description')}
            </p>
          </TabPanel>
        )}
      </div>
    </>
  );
}
