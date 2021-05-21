import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { BAUES, BAUESAnalysis, BAUESIcon, BAUESAnalysisIcon } from 'src/Images';
import { useI18n } from 'src/i18n';
import Button from './Button';
import TabItem from './TabItem';

const Products: React.VFC = () => {
  const { t } = useI18n();
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section className="relative pt-16 pb-16 min-h-screen" id="products">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{t('products')}</h1>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="mb-8 md:mb-0">
                <Button
                  title={t('baues')}
                  description={t('baues-description')}
                  tabKey={1}
                  tab={tab}
                  icon={
                    <Image src={BAUESIcon} width={20} height={20} loading='eager' />
                  }
                  setTab={setTab}
                />
                <Button
                  title={t('baues-analysis')}
                  description={t('baues-analysis-description')}
                  tabKey={2}
                  tab={tab}
                  icon={
                    <Image src={BAUESAnalysisIcon} width={20} height={20} loading='eager' />
                  }
                  setTab={setTab}
                />
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-left" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <TabItem href="https://baues.io" tabKey={1} tab={tab} src={BAUES} alt='BAUES'/>
                <TabItem href="https://analysis.baues.io" tabKey={2} tab={tab} src={BAUESAnalysis} alt='BAUES Analysis'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
