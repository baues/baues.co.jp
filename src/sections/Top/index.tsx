import { useI18n } from 'src/i18n';
import H1 from './H1';

const Top: React.VFC = () => {
  const { t } = useI18n();

  return (
    <section className="relative bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-8 md:pb-16">
            <div className="col-sm-12 justify-content-center mt-4 title mb-32">
              {t('catch').split(' ').map((text, i) => <H1 key={i}>{text}</H1>)}
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="fade-zoom-in" data-aos-delay="300">
                {t('sub-catch')}
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="fade-zoom-in" data-aos-delay="300">
                <div>
                  <a className="text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto inline-flex items-center justify-center rounded leading-snug px-8 py-3 shadow-lg" href="#products">
                    {t('see-our-products')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
