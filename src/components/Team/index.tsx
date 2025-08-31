"use client";

import { teamData } from "@/static-data/team";
import { useParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

export default function Team() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale as any);

  return (
    <section id="team" className="pt-16 sm:pt-20 lg:pt-[100px]">
      <div className="px-4 xl:container">
        <SectionTitle
          mainTitle={t('common.team.mainTitle')}
          title={t('common.team.title')}
          paragraph={t('common.team.description')}
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {/* First Row - Dominik alone */}
          <div className="w-full px-4 mb-8">
            <div className="flex justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <SingleTeam team={teamData[0]} />
              </div>
            </div>
          </div>
          
          {/* Second Row - Other four team members */}
          <div className="w-full">
            <div className="-mx-4 flex flex-wrap justify-center">
              {teamData.slice(1).map((team) => (
                <SingleTeam key={team?.id} team={team} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}