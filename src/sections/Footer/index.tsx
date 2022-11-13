import { useI18n } from 'src/i18n';
import LogoImage from 'src/components/LogoImage';
import Copyright from 'src/components/Copyright';
import FacebookIcon from 'src/components/FacebookIcon';
import GithubIcon from 'src/components/GithubIcon';
import TwitterIcon from 'src/components/TwitterIcon';
import InternalLinkItem from './InternalLinkItem';
import SNSLinkItem from './SNSLinkItem';

const Footer: React.VFC = () => {
  const { t } = useI18n();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <LogoImage />
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">{t('products')}</h6>
            <ul className="text-sm">
              <InternalLinkItem href="https://baues.io">{t('baues')}</InternalLinkItem>
              <InternalLinkItem href="https://analysis.baues.io">{t('baues-analysis')}</InternalLinkItem>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">{t('links')}</h6>
            <ul className="text-sm">
              <InternalLinkItem href="https://baues.io/contact">{t('contact')}</InternalLinkItem>
            </ul>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <SNSLinkItem href="https://twitter.com/BAUES_IO" ariaLabel="Twitter">
              <TwitterIcon />
            </SNSLinkItem>
            <SNSLinkItem href="https://github.com/baues" ariaLabel="Github">
              <GithubIcon />
            </SNSLinkItem>
            <SNSLinkItem href="https://facebook.com/baues.io" ariaLabel="Facebook">
              <FacebookIcon />
            </SNSLinkItem>
          </ul>

          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
