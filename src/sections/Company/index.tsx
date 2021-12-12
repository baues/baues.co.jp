import React from 'react';
import { useI18n } from 'src/i18n';
import Section from 'src/components/Section';
import Title from 'src/components/Title';

const Company: React.VFC = () => {
  const { t } = useI18n();

  return (
    <Section className="bg-gray-900" id="company">
      <Title title={t('company')} className="text-white" />

      <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
        <table className="table-fixed mx-auto text-white">
          <tbody>
            <tr className="border-t border-b">
              <td className="w-1/2 pl-8 pt-8 pb-8">{t('company-name')}</td>
              <td className="pr-8 pt-8 pb-8">{t('company-name-content')}</td>
            </tr>
            <tr className="border-b">
              <td className="pl-8 pt-8 pb-8">{t('business')}</td>
              <td className="pr-8 pt-8 pb-8">・{t('business-content1')}<br/>・{t('business-content2')}</td>
            </tr>
            <tr className="border-b">
              <td className="pl-8 pt-8 pb-8">{t('ceo')}</td>
              <td className="pr-8 pt-8 pb-8">{t('ceo-content')}</td>
            </tr>
            <tr className="border-b">
              <td className="pl-8 pt-8 pb-8">{t('address')}</td>
              <td className="pr-8 pt-8 pb-8">{t('address-content')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Company;
