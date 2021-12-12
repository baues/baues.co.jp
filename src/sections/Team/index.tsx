import React from 'react';
import { useI18n } from 'src/i18n';
import Section from 'src/components/Section';
import Title from 'src/components/Title';

const Team: React.VFC = () => {
  const { t } = useI18n();

  return (
    <Section id="team">
      <Title title={t('team')} />
      <div className="md:grid md:grid-cols-1">
        <div className="max-w-md md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 mb-8" data-aos="fade-right">
          <h1 className="text-lg font-bold mb-4">{t('member-name-1')}</h1>
          <p>{t('member-title-1')}</p>
          <p>{t('member-history-1')}</p>
          <p>{t('member-skills-1')}</p>
          <br />
        </div>

        <div className="max-w-md md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 mb-8" data-aos="fade-right">
          <h1 className="text-lg font-bold mb-4">{t('member-name-2')}</h1>
          <p>{t('member-title-2')}</p>
          <p>{t('member-history-2')}</p>
          <p>{t('member-skills-2')}</p>
        </div>
      </div>
    </Section>
  );
};

export default Team;
